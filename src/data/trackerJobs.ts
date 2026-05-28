import raw from '../../job-search/jobs.json'

export type JobStatus = 'todo' | 'applied' | 'interview' | 'skip'

export type TrackerJob = {
  id: string
  priority: number
  company: string
  title: string
  bucket: string
  fit: number
  remote: string
  salary: string
  applyUrl: string
  notes: string
  status: JobStatus
}

export const trackerProfile = raw.profile as {
  name: string
  email: string
  site: string
  github: string
  resumePdf: string
  salaryGbp: string
}

export const trackerJobs = (raw.jobs as TrackerJob[]).slice().sort((a, b) => a.priority - b.priority)

export const trackerUpdated = raw.updated as string
