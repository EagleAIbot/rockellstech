/** Curated public repos — edit hooks & flex bullets here as projects evolve. */
export type FeaturedRepo = {
  title: string
  category: string
  hook: string
  flex: string[]
  stack: string[]
  repoUrl: string
  /** Optional live / demo URL (GitHub Pages, prod, etc.) */
  liveUrl?: string
  liveLabel?: string
}

const GH = 'https://github.com/EagleAIbot'

export const featuredRepos: FeaturedRepo[] = [
  {
    title: 'Forward_curves',
    category: 'Crypto · ML',
    hook:
      'Forward-curve and prediction-path work—the kind of ML that has to behave when markets move, not when a Kaggle timer stops.',
    flex: [
      'Pipelines shaped for production, not one-off notebooks',
      'Retrain / eval loops you can operate, not hand-wave',
      'Wiring meant for real feeds and volatility, not clean CSVs',
    ],
    stack: ['JavaScript', 'ML', 'Markets'],
    repoUrl: `${GH}/Forward_curves`,
  },
  {
    title: 'mobilerork',
    category: 'TypeScript · Product',
    hook:
      'A heavyweight TypeScript codebase—mobile-first product workflows with room to grow. This is what “serious repo mass” looks like when you keep shipping.',
    flex: [
      'Large, iterated surface—built to add features without collapsing',
      'Typed, structured codebase you can onboard engineers into',
      'Same discipline as trading & sports products: ship, observe, iterate',
    ],
    stack: ['TypeScript', 'Mobile', 'Product'],
    repoUrl: `${GH}/mobilerork`,
  },
  {
    title: 'READY4REFURB',
    category: 'Full-stack · Platform',
    hook:
      'A full refurb platform with GitHub Pages in the loop—real business flows, not a single hero section pretending to be a company.',
    flex: [
      'Substantial JavaScript surface—complexity you expect from a real vertical',
      'Deploy story: Pages-ready, shareable, forkable',
      'Owner mindset: ship something operators can actually use',
    ],
    stack: ['JavaScript', 'GitHub Pages', 'Platform'],
    repoUrl: `${GH}/READY4REFURB`,
    liveUrl: 'https://eagleaibot.github.io/READY4REFURB/',
    liveLabel: 'Live (Pages)',
  },
  {
    title: 'art-ai-website',
    category: 'Brand · Marketing',
    hook:
      'Public Art AI presence—product narrative, AI solutions positioning, and a site that matches the story. Description on GitHub: “Art AI — AI products and solutions.”',
    flex: [
      'Marketing site that doesn’t read like a template farm',
      'GitHub Pages deploy—fast iteration on copy & layout',
      'Same bar for polish as anything I’d put in front of a client',
    ],
    stack: ['JavaScript', 'GitHub Pages', 'Brand'],
    repoUrl: `${GH}/art-ai-website`,
    liveUrl: 'https://eagleaibot.github.io/art-ai-website/',
    liveLabel: 'Live (Pages)',
  },
  {
    title: 'rockellstech',
    category: 'Portfolio · OSS',
    hook:
      'The site you’re on—Shift-inspired flow, Framer Motion, TypeScript, CI to GitHub Pages. Fork the layout or judge the code: it’s all there.',
    flex: [
      'Open source—no black box portfolio',
      'Modern stack: Vite, React 19, motion, tight CSS',
      'Deploy pipeline documented—repeatable, not “works on my machine”',
    ],
    stack: ['TypeScript', 'React', 'Vite', 'CI/CD'],
    repoUrl: `${GH}/rockellstech`,
    liveUrl: 'https://rockellstech.com',
    liveLabel: 'Live site',
  },
  {
    title: 'syd-wells-charity-',
    category: 'Charity · Web',
    hook:
      'Charity-facing web presence—shipped, Pages-deployed, and built for trust: clear story, usable on phones, maintainable in the open.',
    flex: [
      'Real org use case—not a hypothetical “charity template”',
      'GitHub Pages delivery—transparent, low-friction hosting',
      'Same attention to detail as commercial work',
    ],
    stack: ['JavaScript', 'GitHub Pages', 'Impact'],
    repoUrl: `${GH}/syd-wells-charity-`,
    liveUrl: 'https://eagleaibot.github.io/syd-wells-charity-/',
    liveLabel: 'Live (Pages)',
  },
]

/** Smaller / utility repos — still linked for completeness */
export const moreRepos: { name: string; repoUrl: string; note: string }[] = [
  {
    name: 'PJPAINTWORSK',
    repoUrl: `${GH}/PJPAINTWORSK`,
    note: 'SMB / trade web — CSS-heavy, Pages-deployed',
  },
  {
    name: 'Tracertool3',
    repoUrl: `${GH}/Tracertool3`,
    note: 'Utility / network tooling — focused JS surface',
  },
]
