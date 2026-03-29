import { motion } from 'framer-motion'
import { GitBranch, Headphones, Layers, LineChart, Lock, MessageSquare, Radio, Zap } from 'lucide-react'

const adv = [
  { icon: Zap, title: 'Velocity with taste', desc: 'Fast doesn’t mean sloppy—defaults are documented.' },
  { icon: Layers, title: 'End-to-end ownership', desc: 'Models, services, UI—I connect the seams.' },
  { icon: LineChart, title: 'Honest metrics', desc: 'We measure what changes decisions.' },
  { icon: GitBranch, title: 'Sane branching', desc: 'Main stays shippable; experiments don’t rot.' },
  { icon: Radio, title: 'Live systems mindset', desc: 'Outages, rollbacks, and on-call empathy.' },
  { icon: Lock, title: 'Risk-aware builds', desc: 'Compliance and security as design inputs.' },
  { icon: MessageSquare, title: 'Plain communication', desc: 'No mystique—clear tradeoffs and timelines.' },
  { icon: Headphones, title: 'Direct line', desc: 'You talk to the builder, not a relay race.' },
]

const process = [
  { title: 'Scope & slice', text: 'Cut the problem until it can ship; argue with data.' },
  { title: 'Build in the open', text: 'Shared repo, visible progress, early ugly truth.' },
  { title: 'Harden & observe', text: 'Metrics, alerts, and user feedback in the loop.' },
  { title: 'Iterate without drama', text: 'Backlog is honest; rework is planned.' },
]

export function ShiftAdvantage() {
  return (
    <>
      <section id="advantage" className="s-adv section">
        <div className="wrap">
          <h2 className="s-h2-center">The Rockell advantage</h2>
          <p className="s-sub-center">
            Former CEO at Eagle AI Labs; hands-on product now. Same bar for quality—less theatre, more shipping.
          </p>
          <div className="s-adv-grid">
            {adv.map((a, i) => (
              <motion.div
                key={a.title}
                className="s-adv-card"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <a.icon className="s-adv-ic" size={22} strokeWidth={1.75} />
                <h3 className="s-adv-h">{a.title}</h3>
                <p className="s-adv-p">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="s-proc section">
        <div className="wrap">
          <h2 className="s-h2-center">How I work, simplified</h2>
          <p className="s-sub-center">No black box—just a loop you can inspect.</p>
          <div className="s-proc-row">
            {process.map((p, i) => (
              <motion.div
                key={p.title}
                className="s-proc-step"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="s-proc-n">{i + 1}</span>
                <h3 className="s-proc-h">{p.title}</h3>
                <p className="s-proc-p">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
