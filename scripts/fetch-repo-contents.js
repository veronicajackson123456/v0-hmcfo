import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const REPO_URL = 'https://github.com/veronicajackson123456/v0-hmcfo-org.git'
const CLONE_DIR = '/tmp/hmcfo-org-clone'
const OUTPUT_FILE = '/tmp/repo-file-list.json'

// Clean up old clone
if (fs.existsSync(CLONE_DIR)) {
  fs.rmSync(CLONE_DIR, { recursive: true, force: true })
}

console.log('[v0] Cloning repo...')
execSync(`git clone --depth 1 ${REPO_URL} ${CLONE_DIR}`, { stdio: 'inherit' })
console.log('[v0] Clone complete')

// Walk all files
function walk(dir, base = dir) {
  const results = []
  for (const entry of fs.readdirSync(dir)) {
    if (entry === '.git' || entry === 'node_modules') continue
    const full = path.join(dir, entry)
    const rel = path.relative(base, full)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      results.push(...walk(full, base))
    } else {
      // Only include text files we can embed
      const ext = path.extname(entry)
      const textExts = [
        '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs',
        '.json', '.css', '.md', '.mdx', '.txt', '.html',
        '.svg', '.yml', '.yaml', '.env', '.gitignore',
        '.mts', '.cts', '.lock', '.toml',
      ]
      const isBinary = !textExts.includes(ext) && ext !== ''
      if (!isBinary) {
        try {
          const content = fs.readFileSync(full, 'utf8')
          results.push({ path: rel, content })
        } catch (e) {
          console.log(`[v0] Skipping binary: ${rel}`)
        }
      } else {
        console.log(`[v0] Skipping binary file: ${rel}`)
      }
    }
  }
  return results
}

console.log('[v0] Walking files...')
const files = walk(CLONE_DIR)
console.log(`[v0] Found ${files.length} text files`)

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(files, null, 2))
console.log(`[v0] Written to ${OUTPUT_FILE}`)
console.log('[v0] File list:')
files.forEach(f => console.log(' -', f.path))
