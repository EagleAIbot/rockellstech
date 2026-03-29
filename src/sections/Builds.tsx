import { motion } from 'framer-motion'
import {
  Activity,
  BarChart3,
  Cpu,
  LayoutDashboard,
  ShieldCheck,
  Trophy,
} from 'lucide-react'

const items = [
  {
    icon: Cpu,
    title: 'Crypto & markets ML (Eagle-scale)',
    body:
      'Delivered forward-curve engines, TFT/LSTM-style prediction stacks, analytics and retrain services, DynamoDB/S3/RabbitMQ-style pipelines, and migration-ready APIs—the same class of systems that power serious trading and research orgs, not weekend notebooks.',
    span: 'large',
  },
  {
    icon: Trophy,
    title: 'Sports intelligence — full product surface',
    body:
      'Built and shipped prediction-era products: operator automation, live dashboards and PWAs, model pipelines for football/soccer (cards, shots, team goals), data integrations, and the kind of end-user UX that runs on real match weeks.',
    span: 'medium',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & onboarding tech',
    body:
      'Delivered AML-style screening pipelines, report generation, Flask APIs, and React front-ends for accountancy/regulated onboarding—production-shaped workflows, not slideware.',
    span: 'medium',
  },
  {
    icon: LayoutDashboard,
    title: 'Trading & operator experiences',
    body:
      'Shipped crypto trading PWAs and dashboards: real-time sockets, wallet flows, mirror/presentation modes, notifications—interfaces meant for operators and power users under load.',
    span: 'small',
  },
  {
    icon: BarChart3,
    title: 'From research to release',
    body:
      'Owned the path from experiment to reproducible train/eval, containerised and AWS-style deploys, and frontends that sit on top—so delivery is repeatable, not a one-off demo.',
    span: 'small',
  },
  {
    icon: Activity,
    title: 'Signal, regime & execution thinking',
    body:
      'Built regime filters, validation tooling, and execution-adjacent logic—because what matters is when systems act in live markets, not a leaderboard on a static CSV.',
    span: 'small',
  },
]

export function Builds() {
  return (
    <section id="builds" className="builds section">
      <div className="wrap">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          What I’ve built & delivered
        </motion.p>
        <motion.h2
          className="headline-lg builds-head"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The repos you see are the work—not side quests.
        </motion.h2>
        <p className="lead builds-sub">
          Over years I&apos;ve <strong className="text-strong">owned and shipped</strong> across crypto ML, sports products,
          compliance stacks, and trading UIs. The footprint in those codebases isn&apos;t theory: it&apos;s models, services,
          frontends, and ops paths I&apos;ve <strong className="text-strong">built, wired, and delivered</strong>—often as the
          person stitching research, infra, and product together.
        </p>
        <div className="bento">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              className={`bento-card bento-${item.span}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <div className="bento-icon">
                <item.icon size={22} strokeWidth={2} aria-hidden />
              </div>
              <h3 className="bento-title">{item.title}</h3>
              <p className="muted bento-body">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
