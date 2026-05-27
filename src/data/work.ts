/**
 * Work showcase: short flex, no repo links.
 */

export type WorkItem = {
  title: string
  category: string
  impact: string
  wins: string[]
  liveUrl?: string
  liveLabel?: string
}

export const flagshipWork: WorkItem[] = [
  {
    title: 'Eagle Oracle',
    category: 'Eagle AI · Platform',
    impact: 'Prediction + validation engine for the whole trading business.',
    wins: ['Live multi-model stack on oracle.eagleailabs.com', 'Validators, executor, walkforward. Real money ops'],
    liveUrl: 'https://oracle.eagleailabs.com',
    liveLabel: 'Live',
  },
  {
    title: 'Pitch Predict',
    category: 'Eagle AI · Sports',
    impact: 'Soccer prediction product. Internal models to consumer brand.',
    wins: ['pitchpredict.ai live: fixtures, models, bet builder', 'SportRadar + ECS, match-week scale'],
    liveUrl: 'https://pitchpredict.ai',
    liveLabel: 'Live',
  },
  {
    title: 'CLAW',
    category: 'Eagle AI · Trading',
    impact: 'Main trading surface. Copy-trade, signals, real-time data.',
    wins: ['Wired to Stream, Oracle, execution', 'What traders actually used daily'],
  },
  {
    title: 'CLAW Stealth',
    category: 'Eagle AI · Mobile',
    impact: 'Signals in your pocket. Push, conviction-scored.',
    wins: ['PWA / iOS agent', 'Oracle + breakout + LSTM lanes'],
  },
  {
    title: 'Eagle Terminal',
    category: 'Eagle AI · Terminal',
    impact: 'Operator UI the desk opened every day.',
    wins: ['Real-time data plane', 'Demo + live market face of the stack'],
    liveUrl: 'https://oracle.eagleailabs.com',
    liveLabel: 'Live',
  },
  {
    title: 'HL Crowd Signals',
    category: 'Eagle AI · Hyperliquid',
    impact: 'Crowd & leader books. Own product lane on HL.',
    wins: ['Live validator + copy-trade compare', 'Azure prod, own runbook'],
    liveUrl: 'https://oracle.eagleailabs.com/validator/hl-crowd',
    liveLabel: 'Live',
  },
  {
    title: 'Stream',
    category: 'Eagle AI · Infra',
    impact: 'Real-time market data. Orderbooks, heatmaps, execution APIs.',
    wins: ['12+ channels into CLAW', 'Go stack that stayed up'],
  },
  {
    title: 'JARVIS',
    category: 'Personal · Health OS',
    impact: 'Health OS I run daily. Not a fitness app.',
    wins: ['Protocols + 33-tool AI coach', 'Telegram + dashboard on EC2'],
    liveUrl: 'https://t.me/JARVIS_Health_OS_bot',
    liveLabel: 'Telegram',
  },
  {
    title: 'Dexter',
    category: 'Eagle AI · Agent',
    impact: 'AI assistant for CME micro futures → Oracle predictions.',
    wins: ['Tool-calling agent on live APIs'],
  },
  {
    title: 'SoloGo',
    category: 'Growth automation',
    impact: 'Six agents qualifying local leads 24/7.',
    wins: ['~£4.50/mo to run', 'Scrape, audit, outreach on autopilot'],
  },
  {
    title: 'Key Partnership',
    category: 'Client',
    impact: 'Full recruitment brand site. Video hero, jobs, Supabase.',
    wins: ['ourkeypartnership.co.uk', 'Same bar as Eagle products'],
    liveUrl: 'https://ourkeypartnership.co.uk',
    liveLabel: 'Live',
  },
]

export type WorkHighlight = { name: string; flex: string }

export type WorkCategory = { label: string; items: WorkHighlight[] }

export const workMore: WorkCategory[] = [
  {
    label: 'Sports',
    items: [
      { name: 'Pitch backend', flex: 'SportRadar → live predictions' },
      { name: 'Football models', flex: 'Goals, cards, fouls. Match week.' },
    ],
  },
  {
    label: 'Trading',
    items: [
      { name: 'CopyTrade / HL', flex: 'Wallet mirror + copy books' },
      { name: 'Breakout bots', flex: 'Signal → execution' },
      { name: 'Forward curves', flex: 'Live curves → Oracle' },
    ],
  },
  {
    label: 'Other',
    items: [
      { name: 'Fibre CRM', flex: 'Client CRM' },
      { name: 'READY4REFURB', flex: 'Refurb vertical' },
      { name: 'SMB + charity sites', flex: 'Shipped same quality' },
    ],
  },
]
