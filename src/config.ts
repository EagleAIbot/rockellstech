/** Public website source — https://github.com/EagleAIbot/rockellstech */
export const DEFAULT_GITHUB_REPO_URL = 'https://github.com/EagleAIbot/rockellstech'

export function getGithubUrl(): string {
  return import.meta.env.VITE_GITHUB_URL || DEFAULT_GITHUB_REPO_URL
}
