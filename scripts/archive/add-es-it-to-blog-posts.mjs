/**
 * Adds Spanish (`es`) and Italian (`it`) translations to localized blog post objects.
 * Usage: node scripts/add-es-it-to-blog-posts.mjs
 *
 * Progress is saved so the run can resume.
 */
import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import { translate } from 'google-translate-api-x'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BATCH = 4
const PAUSE_MS = 900
const TARGETS = ['es', 'it', 'tr']

const BLOG_DIR = path.join(__dirname, '../src/data/blog')
const FILES = fs
  .readdirSync(BLOG_DIR)
  .filter((f) => f.startsWith('posts-') && f.endsWith('.ts'))
  .map((f) => path.join(BLOG_DIR, f))

function cachePath(lang) {
  return path.join(__dirname, `.${lang}-translate-cache.json`)
}

function loadCache(lang) {
  const p = cachePath(lang)
  if (!fs.existsSync(p)) return new Map()
  try {
    return new Map(Object.entries(JSON.parse(fs.readFileSync(p, 'utf8'))))
  } catch {
    return new Map()
  }
}

function saveCache(lang, cache) {
  fs.writeFileSync(cachePath(lang), JSON.stringify(Object.fromEntries(cache), null, 0))
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

async function translateBatch(texts, lang, cache) {
  const missing = texts.filter((t) => !cache.has(t))
  console.log(`  cached=${texts.length - missing.length}, to translate=${missing.length}`)

  for (let i = 0; i < missing.length; i += BATCH) {
    const chunk = missing.slice(i, i + BATCH)
    const results = await Promise.all(
      chunk.map(async (text) => {
        if (!/[A-Za-zÀ-ÿ]{3,}/.test(text)) return [text, text]
        for (let attempt = 0; attempt < 6; attempt++) {
          try {
            const res = await translate(text, { from: 'en', to: lang, forceBatch: false })
            const out = typeof res.text === 'string' ? res.text : ''
            if (!out) throw new Error('empty translation')
            return [text, out]
          } catch (err) {
            const wait = 1500 * (attempt + 1)
            console.warn(`retry ${attempt + 1}`, text.slice(0, 40), err.message || err)
            await new Promise((r) => setTimeout(r, wait))
            if (attempt === 5) {
              console.warn('fail', text.slice(0, 50), err.message || err)
              return [text, null]
            }
          }
        }
        return [text, null]
      })
    )
    for (const [k, v] of results) {
      if (v != null) cache.set(k, v)
    }
    saveCache(lang, cache)
    console.log(`  Batch ${Math.min(i + BATCH, missing.length)}/${missing.length}`)
    await new Promise((r) => setTimeout(r, PAUSE_MS))
  }
  return cache
}

function collectJobs(sourceFile, lang) {
  /** @type {{ start: number, enTexts: string[], kind: 'string'|'tags' }[]} */
  const jobs = []
  const unique = new Set()

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const enProp = getProp(node, 'en')
      const uaProp = getProp(node, 'ua')
      const targetProp = getProp(node, lang)
      if (enProp && uaProp && !targetProp && ts.isPropertyAssignment(enProp)) {
        const insertAfter =
          getProp(node, 'tr') ||
          getProp(node, 'it') ||
          getProp(node, 'es') ||
          getProp(node, 'fr') ||
          getProp(node, 'de') ||
          uaProp
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

async function processFile(filePath, lang, cache) {
  const sourceText = fs.readFileSync(filePath, 'utf8')
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true)
  const { jobs, unique } = collectJobs(sourceFile, lang)

  console.log(`\n[${lang}] ${path.basename(filePath)}: jobs=${jobs.length}, unique EN=${unique.size}`)

  if (jobs.length === 0) {
    console.log(`Nothing to do - all localized objects already have ${lang}.`)
    return
  }

  await translateBatch([...unique], lang, cache)
  console.log('Applying inserts...')

  const inserts = jobs
    .map((job) => {
      if (job.kind === 'string') {
        const translated = cache.get(job.enTexts[0])
        if (!translated) return null
        return { start: job.start, insert: `,\n      ${lang}: ${JSON.stringify(translated)}` }
      }
      const missing = job.enTexts.some((t) => !cache.get(t))
      if (missing) return null
      const arr =
        '[\n' +
        job.enTexts.map((t) => `        ${JSON.stringify(cache.get(t) || t)}`).join(',\n') +
        '\n      ]'
      return { start: job.start, insert: `,\n      ${lang}: ${arr}` }
    })
    .filter(Boolean)
    .sort((a, b) => b.start - a.start)

  let out = sourceText
  for (const ins of inserts) {
    out = out.slice(0, ins.start) + ins.insert + out.slice(ins.start)
  }

  fs.writeFileSync(filePath, out)
  console.log(`Done. inserts=${inserts.length}`)
}

async function main() {
  for (const lang of TARGETS) {
    const cache = loadCache(lang)
    for (const file of FILES) {
      await processFile(file, lang, cache)
    }
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
