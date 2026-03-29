import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@rockellstech.com'

export function Hero() {
  return (
    <section className="s-hero section">
      <div className="s-hero-wrap">
        <motion.div
          className="s-hero-copy"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="s-hero-brand">Rockell Tech · Jack Rockell</p>
          <h1 className="s-hero-h1">
            <span className="s-hero-line1">Product-first · Built to ship</span>
            <span className="s-hero-line2">
              Models, infra, and UI that survive <span className="text-gradient">contact with reality.</span>
            </span>
          </h1>
          <p className="s-hero-sub">
            Former CEO at Eagle AI Labs (two and a half years). Hands-on product now—crypto ML, sports products,
            compliance-style onboarding, trading UIs. I own the loop from spec to something running in prod.
          </p>
          <p className="s-hero-try">
            <a href="#pillars">Give it a try — see how I work ↓</a>
          </p>
          <div className="s-hero-btns">
            <a className="rt-btn rt-btn-solid rt-btn-lg" href={`mailto:${contactEmail}`}>
              Get in touch
              <ArrowRight size={18} aria-hidden />
            </a>
            <a className="rt-btn rt-btn-outline rt-btn-lg" href="#ships">
              Explore the work
            </a>
          </div>
        </motion.div>

        <motion.div
          className="s-hero-photo"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className="hero-frame hero-frame-accent">
            <img src="/hero.png" alt="Jack Rockell" width={720} height={720} className="hero-img" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
