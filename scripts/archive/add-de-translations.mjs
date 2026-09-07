/**
 * Adds German (`de`) translations to localized blog post objects.
 * Usage: node scripts/add-de-translations.mjs [it-roles|all]
 */
import fs from 'fs'
import path from 'path'
import { translate } from 'google-translate-api-x'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const cache = new Map()
let translatedCount = 0
let skippedCount = 0

async function translateEn(text) {
  if (!text || typeof text !== 'string') return text
  if (cache.has(text)) {
    skippedCount++
    return cache.get(text)
  }
  // Keep short technical tokens as-is when mostly non-letters
  if (!/[A-Za-zÀ-ÿ]{3,}/.test(text)) {
    cache.set(text, text)
    return text
  }

  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await translate(text, { from: 'en', to: 'de', forceBatch: false })
      const out = typeof res.text === 'string' ? res.text : text
      cache.set(text, out)
      translatedCount++
      if (translatedCount % 25 === 0) {
        console.log(`Translated ${translatedCount} unique strings...`)
      }
      await new Promise((r) => setTimeout(r, 120))
      return out
    } catch (err) {
      console.warn(`Retry ${attempt + 1} for: ${text.slice(0, 60)}...`, err.message || err)
      await new Promise((r) => setTimeout(r, 800 * (attempt + 1)))
    }
  }
  cache.set(text, text)
  return text
}

async function localizeNode(node) {
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      node[i] = await localizeNode(node[i])
    }
    return node
  }
  if (!node || typeof node !== 'object') return node

  // Localized text object
  if (typeof node.en === 'string' && typeof node.ua === 'string') {
    if (!node.de) {
      node.de = await translateEn(node.en)
    }
    return node
  }

  // Tags object
  if (Array.isArray(node.en) && Array.isArray(node.ua) && node.en.every((x) => typeof x === 'string')) {
    if (!node.de) {
      node.de = []
      for (const tag of node.en) {
        node.de.push(await translateEn(tag))
      }
    }
    return node
  }

  for (const key of Object.keys(node)) {
    node[key] = await localizeNode(node[key])
  }
  return node
}

function serialize(value, indent = 0) {
  const pad = ' '.repeat(indent)
  const pad2 = ' '.repeat(indent + 2)
  if (typeof value === 'string') return JSON.stringify(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    return '[\n' + value.map((v) => pad2 + serialize(v, indent + 2)).join(',\n') + '\n' + pad + ']'
  }
  if (value && typeof value === 'object') {
    const keys = Object.keys(value)
    return '{\n' + keys.map((k) => pad2 + k + ': ' + serialize(value[k], indent + 2)).join(',\n') + '\n' + pad + '}'
  }
  return String(value)
}

async function processItRoles() {
  const file = path.join(root, 'src/data/blog/posts-it-roles.ts')
  const text = fs.readFileSync(file, 'utf8')
  const marker = 'export const itRoleBlogPosts: RawBlogPost[] = '
  const idx = text.indexOf(marker)
  if (idx < 0) throw new Error('Could not find itRoleBlogPosts export')
  const arrText = text.slice(idx + marker.length)
  const posts = Function(`"use strict"; return (${arrText})`)()
  console.log(`Loaded ${posts.length} IT role posts`)
  await localizeNode(posts)
  const out =
    `import type { RawBlogPost } from './types'\n\n` +
    `/**\n * IT roles series: overview map + one article per major position.\n * EN / UA / DE\n */\n` +
    `export const itRoleBlogPosts: RawBlogPost[] = ${serialize(posts, 0)}\n`
  fs.writeFileSync(file, out)
  console.log(`Wrote ${file}`)
}

async function main() {
  const mode = process.argv[2] || 'it-roles'
  if (mode === 'it-roles') {
    await processItRoles()
  } else {
    throw new Error(`Unknown mode: ${mode}`)
  }
  console.log(`Done. unique translated=${translatedCount}, cache hits=${skippedCount}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
