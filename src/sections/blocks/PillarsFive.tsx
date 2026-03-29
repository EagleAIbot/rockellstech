import { motion } from 'framer-motion'
import { BarChart3, Cpu, Link2, Rocket, Wallet } from 'lucide-react'

const pillars = [
  {
    icon: Rocket,
    title: 'Ship on real timelines',
    lines: ['From spec to prod without theatre', 'CEO + IC discipline', 'Owns what breaks in prod'],
  },
  {
    icon: Cpu,
    title: 'ML that meets markets',
    lines: ['Curves, retrain loops, analytics APIs', 'Thinks in regimes, not just scores', 'Wiring that survives volatility'],
  },
  {
    icon: Wallet,
    title: 'Operator-grade UIs',
    lines: ['Trading & betting consoles', 'Sockets, wallets, mirrors', 'Built for people under load'],
  },
  {
    icon: Link2,
    title: 'Integrations that stick',
    lines: ['Queues, buckets, DB-bound configs', 'Same patterns across stacks', 'Less glue, more product'],
  },
  {
    icon: BarChart3,
    title: 'Signal you can act on',
    lines: ['Dashboards people open daily', 'Honest eval, not vanity charts', 'Clarity over noise'],
  },
]

export function PillarsFive() {
  return (
    <section id="pillars" className="s-pillars section">
      <div className="wrap">
        <h2 className="s-h2-center">Five things you get when we work together</h2>
        <div className="s-pillars-grid">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              className="s-pillar-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="s-pillar-icon">
                <p.icon size={26} strokeWidth={1.75} />
              </div>
              <h3 className="s-pillar-h">{p.title}</h3>
              <ul className="s-pillar-ul">
                {p.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
