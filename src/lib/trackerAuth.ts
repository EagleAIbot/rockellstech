const STORAGE_KEY = 'rt-apply-auth-v1'

async function digest(password: string): Promise<string> {
  const data = new TextEncoder().encode(password)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

function expectedHash(): string {
  const h = import.meta.env.VITE_TRACKER_PASSWORD_HASH
  return typeof h === 'string' ? h.trim() : ''
}

export function isTrackerConfigured(): boolean {
  return expectedHash().length === 64
}

export function isTrackerUnlocked(): boolean {
  if (!isTrackerConfigured()) return false
  return sessionStorage.getItem(STORAGE_KEY) === expectedHash()
}

export async function unlockTracker(password: string): Promise<boolean> {
  const hash = expectedHash()
  if (!hash) return false
  const attempt = await digest(password)
  if (attempt !== hash) return false
  sessionStorage.setItem(STORAGE_KEY, hash)
  return true
}

export function lockTracker(): void {
  sessionStorage.removeItem(STORAGE_KEY)
}
