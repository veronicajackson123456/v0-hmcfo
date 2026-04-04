import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const REPO_URL = 'https://github.com/veronicajackson123456/v0-hmcfo-org.git'
const CLONE_DIR = '/tmp/hmcfo-clone'

// Clone the repo
if (fs.existsSync(CLONE_DIR)) {
  execSync(`rm -rf ${CLONE_DIR}`)
}
console.log('[v0] Cloning repo...')
execSync(`git clone --depth 1 ${REPO_URL} ${CLONE_DIR}`, { stdio: 'pipe' })
console.log('[v0] Clone complete')

// Skip these directories/files
const SKIP = new Set(['.git', 'node_modules', '.next', '.vercel'])
const SKIP_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.ico', '.svg', '.woff', '.woff2', '.ttf', '.eot', '.mp4', '.webp', '.webm', '.pdf'])

function walk(dir, base = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const results = []
  for (const entry of entries) {
    if (SKIP.has(entry.name)) continue
    const fullPath = path.join(dir, entry.name)
    const relPath = path.relative(base, fullPath)
    if (entry.isDirectory()) {
      results.push(...walk(fullPath, base))
    } else {
      const ext = path.extname(entry.name).toLowerCase()
      if (SKIP_EXTENSIONS.has(ext)) {
        console.log('[v0] SKIP_BINARY:', relPath)
        continue
      }
      try {
        const content = fs.readFileSync(fullPath, 'utf8')
        results.push({ path: relPath, content })
      } catch (e) {
        console.log('[v0] SKIP_ERROR:', relPath, e.message)
      }
    }
  }
  return results
}

const files = walk(CLONE_DIR)
console.log('[v0] Total files found:', files.length)
console.log('[v0] FILES_JSON_START')
console.log(JSON.stringify(files, null, 2))
console.log('[v0] FILES_JSON_END')
