import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

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
            <Sparkles size={14} className="hero-badge-icon" aria-hidden />
            AI-native builder · Ex-CEO · Shipped systems
          </motion.div>
          <motion.h1
            className="headline-xl hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            I build serious AI products—<span className="text-gradient">end to end.</span>
          </motion.h1>
          <motion.p
            className="lead hero-lead"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            I&apos;m <strong className="text-strong">Jack Rockell</strong>. I led Eagle AI Labs as CEO for two and a half years,
            then went deeper into product as the company evolved. The breadth in my repos reflects what I&apos;ve actually{' '}
            <strong className="text-strong">built and delivered</strong>: crypto ML and market systems, full sports prediction
            products, compliance-grade onboarding tech, and trading operator UIs—models, APIs, deploy paths, and the interfaces
            people use—not a single narrow lane.
          </motion.p>
          <motion.p
            className="lead hero-lead hero-lead-secondary"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.5 }}
          >
            I&apos;m <strong className="text-strong">not a &quot;coder&quot; in the classic sense</strong>—I don&apos;t lean on a
            traditional CS identity. I <strong className="text-strong">build with AI</strong>: as a core skill, not a shortcut. I
            learned to pair AI tooling with architecture, taste, and shipping discipline—and I&apos;m{' '}
            <strong className="text-strong">exceptionally strong</strong> at that workflow. If you&apos;re hiring for people who
            can ship in the AI era (think Meta, frontier product teams, zero-hand-holding execution)—I&apos;m that profile.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.45 }}
          >
            <a className="btn btn-primary" href={`mailto:${contactEmail}`}>
              Let&apos;s talk
              <ArrowRight size={18} aria-hidden />
            </a>
            <a className="btn btn-ghost" href="#builds">
              See what I&apos;ve built
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
          <p className="hero-caption muted">AI-accelerated. Production-obsessed.</p>
        </motion.div>
      </div>
    </section>
  )
}
