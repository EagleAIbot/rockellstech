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

export async function fetchPhotoDataUrl(): Promise<string> {
  const base = import.meta.env.BASE_URL || '/'
  const res = await fetch(`${base}hero.png`)
  if (!res.ok) throw new Error('Could not load profile photo')
  const blob = await res.blob()
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}
