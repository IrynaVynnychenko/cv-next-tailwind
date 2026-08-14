/**
 * Faster DE translation for blog-posts.ts:
 * 1) collect unique EN strings
 * 2) translate in parallel batches
 * 3) apply AST inserts once
 */
import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import { translate } from 'google-translate-api-x'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, '../src/data/blog-posts.ts')
const BATCH = 12
const PAUSE_MS = 250

function getProp(obj, name) {
  return obj.properties.find(
    (p) =>
      ts.isPropertyAssignment(p) &&
      ((ts.isIdentifier(p.name) && p.name.text === name) ||
        (ts.isStringLiteral(p.name) && p.name.text === name))
  )
}

function litText(node) {
  if (!node) return null
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text
  return null
}

async function translateBatch(texts) {
  const out = new Map()
  for (let i = 0; i < texts.length; i += BATCH) {
    const chunk = texts.slice(i, i + BATCH)
    const results = await Promise.all(
      chunk.map(async (text) => {
        if (!/[A-Za-zÀ-ÿ]{3,}/.test(text)) return [text, text]
        for (let attempt = 0; attempt < 4; attempt++) {
          try {
            const res = await translate(text, { from: 'en', to: 'de', forceBatch: false })
            return [text, typeof res.text === 'string' ? res.text : text]
          } catch (err) {
            await new Promise((r) => setTimeout(r, 400 * (attempt + 1)))
            if (attempt === 3) {
              console.warn('fail', text.slice(0, 50), err.message || err)
              return [text, text]
            }
          }
        }
        return [text, text]
      })
    )
    for (const [k, v] of results) out.set(k, v)
    console.log(`Batch ${Math.min(i + BATCH, texts.length)}/${texts.length}`)
    await new Promise((r) => setTimeout(r, PAUSE_MS))
  }
  return out
}

async function main() {
  const sourceText = fs.readFileSync(filePath, 'utf8')
  // Skip if file already has many de keys from partial run - we still fill missing only
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true)

  /** @type {{ start: number, enTexts: string[], kind: 'string'|'tags' }[]} */
  const jobs = []
  const unique = new Set()

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const enProp = getProp(node, 'en')
      const uaProp = getProp(node, 'ua')
      const deProp = getProp(node, 'de')
      if (enProp && uaProp && !deProp && ts.isPropertyAssignment(enProp)) {
        const enInit = enProp.initializer
        const enStr = litText(enInit)
        if (enStr !== null) {
          unique.add(enStr)
          jobs.push({ start: uaProp.end, enTexts: [enStr], kind: 'string' })
        } else if (ts.isArrayLiteralExpression(enInit)) {
          const tags = []
          for (const el of enInit.elements) {
            const t = litText(el)
            if (t === null) return
            tags.push(t)
            unique.add(t)
          }
          jobs.push({ start: uaProp.end, enTexts: tags, kind: 'tags' })
        }
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  console.log(`Jobs needing de: ${jobs.length}, unique EN strings: ${unique.size}`)

  if (jobs.length === 0) {
    console.log('Nothing to do — all localized objects already have de.')
    return
  }

  const map = await translateBatch([...unique])
  console.log('Applying inserts...')

  const inserts = jobs
    .map((job) => {
      if (job.kind === 'string') {
        const de = map.get(job.enTexts[0]) || job.enTexts[0]
        return { start: job.start, insert: `,\n      de: ${JSON.stringify(de)}` }
      }
      const arr =
        '[\n' +
        job.enTexts.map((t) => `        ${JSON.stringify(map.get(t) || t)}`).join(',\n') +
        '\n      ]'
      return { start: job.start, insert: `,\n      de: ${arr}` }
    })
    .sort((a, b) => b.start - a.start)

  let out = sourceText
  for (const ins of inserts) {
    out = out.slice(0, ins.start) + ins.insert + out.slice(ins.start)
  }

  fs.writeFileSync(filePath, out)
  console.log(`Done. inserts=${inserts.length}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
