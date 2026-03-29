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
    title: 'Crypto & markets',
    body:
      'Forward curves, prediction and retrain pipelines, analytics APIs, AWS-style deploys, Dynamo/S3/Rabbit-style wiring—the boring stuff that has to work when markets are open.',
    span: 'large',
  },
  {
    icon: Trophy,
    title: 'Sports & betting products',
    body:
      'Dashboards, operator tooling, models around football (cards, shots, team goals), data pulls, and UIs that get used on match week—not a one-off notebook.',
    span: 'medium',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & onboarding',
    body:
      'AML-style screening flows, generated reports, Flask backends, React front ends for regulated onboarding. Built for real accountancy workflows, not a hackathon demo.',
    span: 'medium',
  },
  {
    icon: LayoutDashboard,
    title: 'Trading & ops UIs',
    body:
      'Crypto trading PWAs: sockets, wallets, mirror modes, notifications. Built for people who stare at screens all day.',
    span: 'small',
  },
  {
    icon: BarChart3,
    title: 'Research → production',
    body:
      'Taking experiments from “ran once” to repeatable train/eval, containers, and deploys—with a frontend on top when it matters.',
    span: 'small',
  },
  {
    icon: Activity,
    title: 'Signals & execution',
    body:
      'Regime filters, validation tooling, and logic around when systems act—not just what they print on a chart.',
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
          Work
        </motion.p>
        <motion.h2
          className="headline-lg builds-head"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What I&apos;ve actually shipped.
        </motion.h2>
        <p className="lead builds-sub">
          The repos aren&apos;t a portfolio garnish. They&apos;re where the models, services, and frontends live—often with me
          connecting the pieces between research, infra, and what users click.
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
