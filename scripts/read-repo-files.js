import fs from 'fs'
import path from 'path'

const CLONE_DIR = '/tmp/hmcfo-org-clone'
const files = JSON.parse(fs.readFileSync('/tmp/repo-file-list.json', 'utf8'))

for (const file of files) {
  const fullPath = path.join(CLONE_DIR, file)
  try {
    const content = fs.readFileSync(fullPath, 'utf8')
    console.log(`===FILE_START:${file}===`)
    console.log(content)
    console.log(`===FILE_END:${file}===`)
  } catch (e) {
    console.log(`[v0] Error reading ${file}: ${e.message}`)
  }
}
