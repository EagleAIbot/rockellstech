#!/usr/bin/env node
/** Print SHA-256 hex for VITE_TRACKER_PASSWORD_HASH */
import { createHash } from 'node:crypto'

const pass = process.argv[2]
if (!pass) {
  console.error('Usage: node scripts/hash-tracker-password.mjs "your-password"')
  process.exit(1)
}
const hash = createHash('sha256').update(pass, 'utf8').digest('hex')
console.log(hash)
console.log('\nAdd to .env.local:')
console.log(`VITE_TRACKER_PASSWORD_HASH=${hash}`)
console.log('\nGitHub repo secret (Settings → Secrets): TRACKER_PASSWORD_HASH')
