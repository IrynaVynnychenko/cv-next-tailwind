/**
 * Adds French (`fr`) translations to localized blog post objects.
 * Usage: node scripts/add-fr-to-blog-posts.mjs
 *
 * Progress is saved to scripts/.fr-translate-cache.json so the run can resume.
 */
import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import { translate } from 'google-translate-api-x'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BATCH = 12
const PAUSE_MS = 220
const CACHE_PATH = path.join(__dirname, '.fr-translate-cache.json')

const BLOG_DIR = path.join(__dirname, '../src/data/blog')
const FILES = fs
  .readdirSync(BLOG_DIR)
  .filter((f) => f.startsWith('posts-') && f.endsWith('.ts'))
  .map((f) => path.join(BLOG_DIR, f))

function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return new Map()
  try {
    return new Map(Object.entries(JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'))))
  } catch {
    return new Map()
  }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(Object.fromEntries(cache), null, 0))
}

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

async function translateBatch(texts, cache) {
  const missing = texts.filter((t) => !cache.has(t))
  console.log(`  cached=${texts.length - missing.length}, to translate=${missing.length}`)

  for (let i = 0; i < missing.length; i += BATCH) {
    const chunk = missing.slice(i, i + BATCH)
    const results = await Promise.all(
      chunk.map(async (text) => {
        if (!/[A-Za-zÀ-ÿ]{3,}/.test(text)) return [text, text]
        for (let attempt = 0; attempt < 4; attempt++) {
          try {
            const res = await translate(text, { from: 'en', to: 'fr', forceBatch: false })
            return [text, typeof res.text === 'string' ? res.text : text]
          } catch (err) {
            await new Promise((r) => setTimeout(r, 600 * (attempt + 1)))
            if (attempt === 3) {
              console.warn('fail', text.slice(0, 50), err.message || err)
              return [text, text]
            }
          }
        }
        return [text, text]
      })
    )
    for (const [k, v] of results) cache.set(k, v)
    saveCache(cache)
    console.log(`  Batch ${Math.min(i + BATCH, missing.length)}/${missing.length}`)
    await new Promise((r) => setTimeout(r, PAUSE_MS))
  }
  return cache
}

function collectJobs(sourceFile) {
  /** @type {{ start: number, enTexts: string[], kind: 'string'|'tags' }[]} */
  const jobs = []
  const unique = new Set()

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const enProp = getProp(node, 'en')
      const uaProp = getProp(node, 'ua')
      const deProp = getProp(node, 'de')
      const frProp = getProp(node, 'fr')
      if (enProp && uaProp && !frProp && ts.isPropertyAssignment(enProp)) {
        const insertAfter = deProp || uaProp
        const enInit = enProp.initializer
        const enStr = litText(enInit)
        if (enStr !== null) {
          unique.add(enStr)
          jobs.push({ start: insertAfter.end, enTexts: [enStr], kind: 'string' })
        } else if (ts.isArrayLiteralExpression(enInit)) {
          const tags = []
          for (const el of enInit.elements) {
            const t = litText(el)
            if (t === null) return
            tags.push(t)
            unique.add(t)
          }
          jobs.push({ start: insertAfter.end, enTexts: tags, kind: 'tags' })
        }
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return { jobs, unique }
}

async function processFile(filePath, cache) {
  const sourceText = fs.readFileSync(filePath, 'utf8')
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true)
  const { jobs, unique } = collectJobs(sourceFile)

  console.log(`\n${path.basename(filePath)}: jobs=${jobs.length}, unique EN=${unique.size}`)

  if (jobs.length === 0) {
    console.log('Nothing to do - all localized objects already have fr.')
    return
  }

  await translateBatch([...unique], cache)
  console.log('Applying inserts...')

  const inserts = jobs
    .map((job) => {
      if (job.kind === 'string') {
        const fr = cache.get(job.enTexts[0]) || job.enTexts[0]
        return { start: job.start, insert: `,\n      fr: ${JSON.stringify(fr)}` }
      }
      const arr =
        '[\n' +
        job.enTexts.map((t) => `        ${JSON.stringify(cache.get(t) || t)}`).join(',\n') +
        '\n      ]'
      return { start: job.start, insert: `,\n      fr: ${arr}` }
    })
    .sort((a, b) => b.start - a.start)

  let out = sourceText
  for (const ins of inserts) {
    out = out.slice(0, ins.start) + ins.insert + out.slice(ins.start)
  }

  fs.writeFileSync(filePath, out)
  console.log(`Done. inserts=${inserts.length}`)
}

async function main() {
  const cache = loadCache()
  for (const file of FILES) {
    await processFile(file, cache)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
