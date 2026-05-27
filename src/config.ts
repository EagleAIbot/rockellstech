export const DEFAULT_GITHUB_REPO_URL = 'https://github.com/EagleAIbot/rockellstech'

export const DEFAULT_GITHUB_PROFILE_URL = 'https://github.com/EagleAIbot'

export const DEFAULT_CONTACT_EMAIL = 'jack@shiftaitech.com'

export function getContactEmail(): string {
  return import.meta.env.VITE_CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL
}

export function getGithubUrl(): string {
  return import.meta.env.VITE_GITHUB_URL || DEFAULT_GITHUB_REPO_URL
}

export function getGithubProfileUrl(): string {
  return import.meta.env.VITE_GITHUB_PROFILE_URL || DEFAULT_GITHUB_PROFILE_URL
}
