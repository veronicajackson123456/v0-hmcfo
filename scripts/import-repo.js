import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

// Discover the real project directory
function findProjectDir() {
  // Log environment info
  console.log('[v0] HOME:', process.env.HOME)
  console.log('[v0] cwd:', process.cwd())
  console.log('[v0] __dirname equiv via import.meta:', new URL(import.meta.url).pathname)

  // List /home/user contents
  try {
    console.log('[v0] /home/user contents:', fs.readdirSync('/home/user'))
  } catch(e) { console.log('[v0] cannot read /home/user:', e.message) }

  // List /vercel contents
  try {
    console.log('[v0] /vercel contents:', fs.readdirSync('/vercel'))
  } catch(e) { console.log('[v0] cannot read /vercel:', e.message) }

  // List /vercel/share if it exists
  try {
    console.log('[v0] /vercel/share contents:', fs.readdirSync('/vercel/share'))
  } catch(e) { console.log('[v0] cannot read /vercel/share:', e.message) }

  const candidates = [
    '/vercel/share/v0-project',
    '/home/user/v0-project',
    '/home/user',
    process.cwd(),
  ]
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.existsSync(path.join(c, 'package.json'))) {
      console.log('[v0] Found project at:', c)
      return c
    }
  }
  throw new Error('Could not find project directory with package.json')
}
const TARGET_DIR = findProjectDir()
const CLONE_DIR = '/tmp/import-repo-clone'
const REPO_URL = 'https://github.com/veronicajackson123456/v0-hmcfo-org.git'

// Files/dirs to never delete from target
const PRESERVE = new Set([
  'scripts',
  '.git',
  '.next',
  'node_modules',
])

console.log('[v0] Target directory:', TARGET_DIR)
console.log('[v0] Cloning repo:', REPO_URL)
if (fs.existsSync(CLONE_DIR)) {
  execSync(`rm -rf ${CLONE_DIR}`)
}
execSync(`git clone --depth 1 ${REPO_URL} ${CLONE_DIR}`, { stdio: 'inherit' })
console.log('[v0] Clone complete')

// Remove existing files in target (except preserved)
function removeDir(dir) {
  for (const entry of fs.readdirSync(dir)) {
    if (PRESERVE.has(entry)) continue
    const fullPath = path.join(dir, entry)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true })
    } else {
      fs.unlinkSync(fullPath)
    }
  }
}

console.log('[v0] Clearing existing project files...')
removeDir(TARGET_DIR)

// Copy files from clone to target
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src)) {
    if (entry === '.git') continue
    const srcPath = path.join(src, entry)
    const destPath = path.join(dest, entry)
    const stat = fs.statSync(srcPath)
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

console.log('[v0] Copying new repo files...')
copyDir(CLONE_DIR, TARGET_DIR)

console.log('[v0] Done! Files copied from', REPO_URL)
console.log('[v0] Listing top-level files:')
for (const f of fs.readdirSync(TARGET_DIR)) {
  console.log(' -', f)
}
