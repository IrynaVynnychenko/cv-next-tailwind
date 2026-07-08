import { rmSync } from 'node:fs'

const dirs = ['.next', 'out']

for (const dir of dirs) {
  rmSync(dir, { recursive: true, force: true })
}

console.log(`Cleaned: ${dirs.join(', ')}`)
