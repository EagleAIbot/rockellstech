/** Resume content — ATS-first, metric-rich, human voice */

export const resumeMeta = {
  name: 'Jack Rockell',
  title: 'Senior Product Engineer · ML · Live Systems',
  email: 'jack@shiftaitech.com',
  phone: '',
  location: 'United Kingdom',
  website: 'https://rockellstech.com',
  github: 'https://github.com/EagleAIbot',
  linkedin: '',
}

/** Scannable wins — first thing recruiters read */
export const careerHighlights = [
  'Eagle AI Labs: shipped Oracle, CLAW, Stream, and HL Crowd Signals. Live crypto prediction, trading terminals, 12+ real-time market channels, production under market hours.',
  'Pitch Predict (separate company): founded and shipped pitchpredict.ai. SportRadar on AWS ECS, bet builder, match-week ML, web + mobile.',
  'Independent: JARVIS Health OS (33-tool AI coach), Dexter futures agent, 120+ repos shipped across trading, sports ML, and agents.',
]

export const resumeSummary =
  'Senior product engineer, 3+ years shipping live ML, trading, and agent platforms. Own systems end to end at Eagle AI Labs and Pitch Predict. Python, TypeScript, Go, AWS, PyTorch, LLM tool-calling. In the codebase when prod breaks.'

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Go', 'SQL'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Vue.js', 'Vite', 'PWA', 'Capacitor', 'WebSockets'],
  },
  {
    label: 'Backend & data',
    skills: ['Node.js', 'Express', 'Flask', 'FastAPI', 'PostgreSQL', 'SQLite', 'MongoDB', 'DuckDB', 'Redis'],
  },
  {
    label: 'ML & AI',
    skills: [
      'PyTorch',
      'Machine Learning',
      'Walkforward validation',
      'LLM agents',
      'Tool calling',
      'RAG',
      'OpenAI API',
      'DeepSeek',
      'Model deployment',
    ],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['AWS', 'AWS ECS', 'AWS Amplify', 'EC2', 'Docker', 'GitHub Actions', 'CI/CD', 'Azure VM'],
  },
  {
    label: 'Domains',
    skills: [
      'Crypto trading',
      'Hyperliquid',
      'Sports prediction',
      'SportRadar',
      'Bet builder',
      'Copy trading',
      'Real-time market data',
      'Fintech',
      'Health tech',
    ],
  },
]

export const experience = [
  {
    company: 'Eagle AI Labs',
    role: 'Product & Engineering Lead',
    location: 'United Kingdom',
    dates: '01/2022 – 12/2025',
    bullets: [
      'Architected Oracle multi-model crypto stack (Zeus, Apollo, Hermes) on AWS Amplify with DGX inference, live validators, executor, and walkforward ops for real-money trading.',
      'Owned CLAW trading terminal (TypeScript, Vue, WebSockets): copy trade, breakout and prediction channels; daily desk use wired to Stream and execution paths.',
      'Built Stream in Go: 12+ live WebSocket channels (orderbooks, heatmaps, sentiment, screener); real-time data plane for CLAW and internal trading tools.',
      'Shipped HL Crowd Signals on Hyperliquid: independent crowd and leader books, live validator UI, Azure production deploy with autotune and dedicated runbook.',
      'Led CLAW Stealth mobile agent (Capacitor iOS, PWA): conviction-scored signals, push alerts, Oracle-aligned analyst views in pocket.',
    ],
  },
  {
    company: 'Pitch Predict',
    role: 'Founder · Product & Engineering Lead',
    location: 'United Kingdom',
    dates: '01/2023 – 12/2025',
    bullets: [
      'Founded Pitch Predict as a separate sports prediction company (not Eagle AI Labs). Shipped pitchpredict.ai web and mobile consumer product.',
      'Built SportRadar fixture ingest and PitchPredictBackend on AWS ECS; WC2026 match service and match-week release pipeline for live fixtures.',
      'Deployed goals, cards, fouls, and team-goals model suite with bet builder UX; walk-forward validation before match-week go-live.',
      'Ran growth automation: TikTok autopilot, trends studio, and agent APIs integrated with core prediction output.',
    ],
  },
  {
    company: 'Shift AI Tech',
    role: 'Independent Product Engineer',
    location: 'United Kingdom',
    dates: '01/2025 – Present',
    bullets: [
      'Shipped JARVIS Health OS on AWS EC2: 33-tool Telegram AI coach, SQLite and Express, Apple Health ingest, protocols run in daily production use.',
      'Built Dexter trading agent: multi-step tool-calling loop into live Oracle prediction APIs for CME micro futures.',
      'Ran SoloGo growth engine at ~£4.50/mo operating cost: Playwright audits, lead scoring, and autonomous outreach pipeline.',
      'Delivered Key Partnership recruitment platform (ourkeypartnership.co.uk): Supabase vacancies, GSAP UX, GitHub Pages production deploy.',
    ],
  },
]

export const projectHighlights = [
  'Oracle: Zeus / Apollo / Hermes lanes, strategy validator, shadow books, epoch reviews',
  'Pitch Predict: pitchpredict.ai live, SportRadar, ECS, bet builder, football ML model suite',
  'CLAW + Stream + Stealth: copy trade, 12+ sockets, Hyperliquid crowd books, mobile signals',
  'Agents: JARVIS (33 tools), Dexter (futures), SoloGo (outreach). 120+ production repos',
]

export const resumeKeywordsFlat = skillGroups.flatMap((g) => g.skills).join(', ')
