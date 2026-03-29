import { motion } from 'framer-motion'
import { Boxes, Cpu, Gauge, Layers, Shield } from 'lucide-react'

const pillars = [
  {
    icon: Cpu,
    title: 'Crypto & ML systems',
    desc: 'Curves, pipelines, and services meant to run when markets are open.',
  },
  {
    icon: Gauge,
    title: 'Sports & product surfaces',
    desc: 'Dashboards, operators, and models around real fixtures and users.',
  },
  {
    icon: Shield,
    title: 'Compliance stacks',
    desc: 'Onboarding flows and APIs shaped for regulated workflows.',
  },
  {
    icon: Layers,
    title: 'Trading & ops UIs',
    desc: 'PWAs and consoles for people who live in the terminal.',
  },
  {
    icon: Boxes,
    title: 'Research → production',
    desc: 'Repeatable train, deploy, and ship—not one-off demos.',
  },
]

export function Pillars() {
  return (
    <section id="pillars" className="pillars section">
      <div className="wrap">
        <p className="pillars-eyebrow">What I focus on</p>
        <h2 className="pillars-title">Built across the full stack—not a single lane.</h2>
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              className="pillar-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="pillar-icon">
                <p.icon size={22} strokeWidth={2} aria-hidden />
              </div>
              <h3 className="pillar-card-title">{p.title}</h3>
              <p className="pillar-card-desc">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
