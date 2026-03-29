import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@rockellstech.com'

export function Hero() {
  return (
    <section className="hero hero-shift section">
      <div className="wrap hero-shift-inner">
        <div className="hero-copy">
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
          >
            Jack Rockell · Former CEO, Eagle AI Labs
          </motion.p>
          <motion.h1
            className="hero-shift-title"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            Products that ship—<span className="text-gradient">models, infra, and UI.</span>
          </motion.h1>
          <motion.p
            className="hero-shift-lead"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
          >
            I build end-to-end: live trading and ML systems, sports and betting products, compliance-style onboarding, and
            operator-facing apps. Former CEO work; hands-on product work now. If you need someone who owns the loop from spec to
            production, that&apos;s what I do.
          </motion.p>
          <motion.div
            className="hero-shift-cta"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <a className="shift-btn shift-btn-solid shift-btn-lg" href={`mailto:${contactEmail}`}>
              Get in touch
              <ArrowRight size={18} aria-hidden />
            </a>
            <a className="shift-btn shift-btn-outline shift-btn-lg" href="#builds">
              Explore the work
            </a>
          </motion.div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.55 }}
        >
          <div className="hero-frame hero-frame-shift">
            <img src="/hero.png" alt="Jack Rockell" width={560} height={560} className="hero-img" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
