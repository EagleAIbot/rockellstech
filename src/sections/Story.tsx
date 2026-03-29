import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease },
}

export function Story() {
  return (
    <section id="story" className="story section">
      <div className="wrap">
        <motion.p className="eyebrow" {...fade}>
          Background
        </motion.p>
        <motion.h2 className="headline-lg" {...fade}>
          Eagle AI Labs, then product-heavy work.
        </motion.h2>
        <motion.p className="lead story-lead" {...fade} transition={{ duration: 0.5, ease, delay: 0.04 }}>
          I wasn&apos;t sitting in meetings while other people shipped. I was in the same codebases, same outages, same
          deadlines as everyone else.
        </motion.p>
        <div className="story-grid">
          <motion.article className="story-card" {...fade}>
            <h3 className="story-card-title">CEO</h3>
            <p className="muted">
              About <strong className="text-strong">two and a half years</strong> as CEO: direction, investors, partners—and
              making sure we actually released software, not just decks.
            </p>
          </motion.article>
          <motion.article className="story-card" {...fade} transition={{ duration: 0.5, ease, delay: 0.08 }}>
            <h3 className="story-card-title">Product</h3>
            <p className="muted">
              Over time I spent more time on <strong className="text-strong">live systems</strong>: what models ran, how they
              were served, and what traders and operators saw on screen.
            </p>
          </motion.article>
          <motion.article className="story-card" {...fade} transition={{ duration: 0.5, ease, delay: 0.16 }}>
            <h3 className="story-card-title">Now</h3>
            <p className="muted">
              The company <strong className="text-strong">restructured</strong>. I&apos;m building under my own name now—same
              bar for quality, less noise around it.
            </p>
          </motion.article>
          <motion.article className="story-card story-card-wide" {...fade} transition={{ duration: 0.5, ease, delay: 0.22 }}>
            <h3 className="story-card-title">How I work</h3>
            <p className="muted">
              I&apos;m not trying to sound like a Leetcode profile. I use AI in the loop for design, implementation, and review,
              and I get to production fast. That&apos;s the skill I&apos;ve been drilling: ship something real, fix what breaks,
              repeat.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
