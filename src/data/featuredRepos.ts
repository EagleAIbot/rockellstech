export type FeaturedRepo = {
  title: string
  category: string
  hook: string
  points: string[]
  stack: string[]
  repoUrl: string
  liveUrl?: string
  liveLabel?: string
}

const GH = 'https://github.com/EagleAIbot'

export const featuredRepos: FeaturedRepo[] = [
  {
    title: 'Forward_curves',
    category: 'Markets · ML',
    hook: 'Curve and prediction work wired for live market conditions.',
    points: ['Production-style pipelines', 'Retrain and evaluation loops', 'Real feeds, not toy datasets'],
    stack: ['JS', 'ML'],
    repoUrl: `${GH}/Forward_curves`,
  },
  {
    title: 'mobilerork',
    category: 'Product · TS',
    hook: 'Large TypeScript codebase for mobile-first product flows.',
    points: ['Room to grow without collapsing structure', 'Typed end-to-end', 'Iterated like a real product'],
    stack: ['TypeScript'],
    repoUrl: `${GH}/mobilerork`,
  },
  {
    title: 'READY4REFURB',
    category: 'Platform',
    hook: 'Refurb vertical with Pages deploy and full product surface.',
    points: ['Substantial app surface', 'Shareable GitHub Pages build', 'Operator-focused flows'],
    stack: ['JavaScript', 'Pages'],
    repoUrl: `${GH}/READY4REFURB`,
    liveUrl: 'https://eagleaibot.github.io/READY4REFURB/',
    liveLabel: 'Live',
  },
  {
    title: 'art-ai-website',
    category: 'Brand',
    hook: 'Public Art AI site: positioning and narrative for AI products.',
    points: ['Marketing polish', 'Fast iteration on GitHub Pages', 'Client-grade presentation'],
    stack: ['JavaScript', 'Pages'],
    repoUrl: `${GH}/art-ai-website`,
    liveUrl: 'https://eagleaibot.github.io/art-ai-website/',
    liveLabel: 'Live',
  },
  {
    title: 'rockellstech',
    category: 'OSS · site',
    hook: 'This site — Vite, React, motion, CI to Pages; source is public.',
    points: ['Forkable layout', 'Modern stack', 'Documented deploy'],
    stack: ['TS', 'React', 'Vite'],
    repoUrl: `${GH}/rockellstech`,
    liveUrl: 'https://rockellstech.com',
    liveLabel: 'Site',
  },
  {
    title: 'syd-wells-charity-',
    category: 'Charity',
    hook: 'Charity web presence: clear story, mobile-friendly, Pages-hosted.',
    points: ['Trust-first layout', 'Simple hosting story', 'Same care as commercial work'],
    stack: ['JavaScript', 'Pages'],
    repoUrl: `${GH}/syd-wells-charity-`,
    liveUrl: 'https://eagleaibot.github.io/syd-wells-charity-/',
    liveLabel: 'Live',
  },
]

export const moreRepos: { name: string; repoUrl: string; note: string }[] = [
  { name: 'PJPAINTWORSK', repoUrl: `${GH}/PJPAINTWORSK`, note: 'Trade / SMB site' },
  { name: 'Tracertool3', repoUrl: `${GH}/Tracertool3`, note: 'Network utility' },
]
