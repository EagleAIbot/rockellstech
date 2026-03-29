export const DEFAULT_GITHUB_REPO_URL = 'https://github.com/EagleAIbot/rockellstech'

export const DEFAULT_GITHUB_PROFILE_URL = 'https://github.com/EagleAIbot'

export function getGithubUrl(): string {
  return import.meta.env.VITE_GITHUB_URL || DEFAULT_GITHUB_REPO_URL
}

export function getGithubProfileUrl(): string {
  return import.meta.env.VITE_GITHUB_PROFILE_URL || DEFAULT_GITHUB_PROFILE_URL
}
