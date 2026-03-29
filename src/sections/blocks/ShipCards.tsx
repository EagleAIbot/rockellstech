import { motion } from 'framer-motion'

const cards = [
  {
    name: 'Eagle Stack',
    tag: 'Crypto / ML',
    desc: 'Forward curves, retrain paths, analytics services, and the AWS-shaped plumbing around them.',
  },
  {
    name: 'Match week',
    tag: 'Sports products',
    desc: 'Dashboards, operators, and models around football—cards, shots, goals—built for real fixtures.',
  },
  {
    name: 'Onboarding rail',
    tag: 'Compliance',
    desc: 'AML-style screening, reports, Flask APIs, React surfaces—accountancy-grade, not demo-grade.',
  },
  {
    name: 'Desk & mirror',
    tag: 'Trading UI',
    desc: 'Crypto trading PWAs: sockets, wallets, mirror modes—built for people who live in the product.',
  },
  {
    name: 'Lab to prod',
    tag: 'Research',
    desc: 'Repeatable train/eval, containers, deploys—so “it ran once” becomes “it runs”.',
  },
  {
    name: 'When to act',
    tag: 'Signals',
    desc: 'Regime filters, validation, execution-adjacent logic—because timing beats a leaderboard.',
  },
]

export function ShipCards() {
  return (
    <section id="ships" className="s-ships section">
      <div className="wrap">
        <h2 className="s-h2-center s-h2-tight">
          Product surfaces I build—not slideware, not toy demos.
        </h2>
        <p className="s-sub-center">
          Pick the lane that matches what you need. Same person across all of them: me in the repo, not a handoff chain.
        </p>
        <div className="s-ship-grid">
          {cards.map((c, i) => (
            <motion.article
              key={c.name}
              className="s-ship-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <span className="s-ship-tag">{c.tag}</span>
              <h3 className="s-ship-name">{c.name}</h3>
              <p className="s-ship-desc">{c.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
