import {
  careerHighlights,
  experience,
  projectHighlights,
  resumeMeta,
  resumeSummary,
  skillGroups,
} from '../data/resume'

/** Plain text resume for ATS paste / TXT upload */
export function buildResumeText(): string {
  const lines: string[] = [
    resumeMeta.name.toUpperCase(),
    resumeMeta.title,
    `${resumeMeta.email} | ${resumeMeta.location}`,
    `${resumeMeta.website} | ${resumeMeta.github}`,
    '',
    'PROFESSIONAL SUMMARY',
    resumeSummary,
    '',
    'KEY HIGHLIGHTS',
    ...careerHighlights.map((h) => `• ${h}`),
    '',
    'TECHNICAL SKILLS',
    ...skillGroups.map((g) => `${g.label}: ${g.skills.join(', ')}`),
    '',
    'WORK EXPERIENCE',
  ]

  for (const job of experience) {
    lines.push('')
    lines.push(`${job.company} | ${job.role} | ${job.dates}`)
    for (const b of job.bullets) lines.push(`• ${b}`)
  }

  lines.push('', 'SELECTED PROJECTS')
  for (const p of projectHighlights) lines.push(`• ${p}`)

  return lines.join('\n')
}

export function downloadTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

/** Load hero photo as PNG data URL — react-pdf often fails on raw JPEG/EXIF blobs */
export async function fetchPhotoDataUrl(): Promise<string> {
  const base = import.meta.env.BASE_URL || '/'
  const path = `${base}hero.png`.replace(/\/+/g, '/')
  const src = path.startsWith('http') ? path : new URL(path, window.location.origin).href

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const size = 256
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Could not prepare profile photo'))
        return
      }
      const iw = img.naturalWidth
      const ih = img.naturalHeight
      const scale = Math.max(size / iw, size / ih)
      const sw = size / scale
      const sh = size / scale
      const sx = (iw - sw) / 2
      const sy = 0
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = () => reject(new Error('Could not load profile photo'))
    img.src = src
  })
}
