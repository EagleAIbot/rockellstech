import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@rockellstech.com'

export function Hero() {
  return (
    <section className="hero section">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            Jack Rockell · Eagle AI Labs (ex-CEO)
          </motion.div>
          <motion.h1
            className="headline-xl hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            I build products that ship—<span className="text-gradient">models, infra, UI.</span>
          </motion.h1>
          <motion.p
            className="lead hero-lead"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            I ran Eagle AI Labs as CEO for two and a half years, then spent more of my time in the product: live systems,
            traders&apos; tools, the stuff that breaks if you get it wrong. My work spans crypto ML, sports products,
            compliance-style onboarding stacks, and trading UIs. It&apos;s all in the repos—nothing there for show only.
          </motion.p>
          <motion.p
            className="lead hero-lead hero-lead-secondary"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.5 }}
          >
            I didn&apos;t come up through a classic CS degree path. I use AI tools the way I use any other tool: to move fast,
            keep quality high, and own the full loop from idea to something running in prod. If that&apos;s the kind of builder
            you need, we should talk.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.45 }}
          >
            <a className="btn btn-primary" href={`mailto:${contactEmail}`}>
              Email me
              <ArrowRight size={18} aria-hidden />
            </a>
            <a className="btn btn-ghost" href="#builds">
              See the work
            </a>
          </motion.div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-frame">
            <img src="/hero.png" alt="Jack Rockell" width={560} height={560} className="hero-img" />
            <div className="hero-ring" aria-hidden />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
