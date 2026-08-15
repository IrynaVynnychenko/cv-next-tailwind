import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, '../src/data/blog/posts-engineering.ts')

const T = Object.assign(
  {},
  ...fs
    .readdirSync(__dirname)
    .filter((f) => f.startsWith('eng-es-it-tr-') && f.endsWith('.json'))
    .sort()
    .map((f) => JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8')))
)

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

function indentOf(sourceText, node) {
  const start = node.getStart()
  let i = start
  while (i > 0 && sourceText[i - 1] !== '\n') i--
  return sourceText.slice(i, start)
}

function quote(s) {
  return JSON.stringify(s)
}

const sourceText = fs.readFileSync(filePath, 'utf8')
const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true)

const missing = []
const inserts = []
let applied = 0
let skipped = 0

function collectJobs(postNode) {
  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const enProp = getProp(node, 'en')
      const frProp = getProp(node, 'fr')
      const esProp = getProp(node, 'es')
      if (enProp && frProp && !esProp && ts.isPropertyAssignment(enProp)) {
        const indent = indentOf(sourceText, frProp)
        const enInit = enProp.initializer
        const enStr = litText(enInit)
        if (enStr !== null) {
          const t = T[enStr]
          if (!t || !t.es || !t.it || !t.tr) {
            missing.push(enStr)
            skipped++
          } else {
            inserts.push({
              start: frProp.end,
              insert: `,\n${indent}es: ${quote(t.es)},\n${indent}it: ${quote(t.it)},\n${indent}tr: ${quote(t.tr)}`,
            })
            applied++
          }
        } else if (ts.isArrayLiteralExpression(enInit)) {
          const tags = []
          for (const el of enInit.elements) {
            const tag = litText(el)
            if (tag === null) return
            tags.push(tag)
          }
          const es = []
          const it = []
          const tr = []
          let ok = true
          for (const tag of tags) {
            const t = T[tag]
            if (!t || !t.es || !t.it || !t.tr) {
              missing.push('[TAG] ' + tag)
              ok = false
            } else {
              es.push(t.es)
              it.push(t.it)
              tr.push(t.tr)
            }
          }
          if (ok) {
            const inner = indent + '  '
            const arr = (vals) =>
              '[\n' + vals.map((v) => `${inner}${quote(v)}`).join(',\n') + `\n${indent}]`
            inserts.push({
              start: frProp.end,
              insert: `,\n${indent}es: ${arr(es)},\n${indent}it: ${arr(it)},\n${indent}tr: ${arr(tr)}`,
            })
            applied++
          } else skipped++
        }
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(postNode)
}

function walk(node) {
  if (ts.isArrayLiteralExpression(node)) {
    for (const el of node.elements) {
      if (!ts.isObjectLiteralExpression(el)) continue
      const slugProp = getProp(el, 'slug')
      if (slugProp && litText(slugProp.initializer)) collectJobs(el)
    }
    return
  }
  ts.forEachChild(node, walk)
}

walk(sourceFile)

inserts.sort((a, b) => b.start - a.start)
let out = sourceText
for (const ins of inserts) {
  out = out.slice(0, ins.start) + ins.insert + out.slice(ins.start)
}

if (inserts.length) fs.writeFileSync(filePath, out)

console.log(`Applied ${applied} blocks. Still missing ${missing.length}.`)
if (missing.length) {
  const uniq = [...new Set(missing)]
  console.log(`Unique missing: ${uniq.length}`)
  for (const m of uniq.slice(0, 8)) console.log('---\n' + m.slice(0, 160))
}
