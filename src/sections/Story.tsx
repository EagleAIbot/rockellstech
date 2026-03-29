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
          The arc
        </motion.p>
        <motion.h2 className="headline-lg" {...fade}>
          CEO at Eagle AI Labs—then hands-on product across the stack.
        </motion.h2>
        <motion.p className="lead story-lead" {...fade} transition={{ duration: 0.5, ease, delay: 0.04 }}>
          That period wasn&apos;t management theatre: it was shipping alongside the team—same codebases, same production
          constraints, same accountability for what went live.
        </motion.p>
        <div className="story-grid">
          <motion.article className="story-card" {...fade}>
            <h3 className="story-card-title">Leadership</h3>
            <p className="muted">
              For <strong className="text-strong">two and a half years</strong> I was CEO of Eagle AI Labs—setting direction,
              owning investor and partner conversations, and making sure we shipped, not just slid.
            </p>
          </motion.article>
          <motion.article className="story-card" {...fade} transition={{ duration: 0.5, ease, delay: 0.08 }}>
            <h3 className="story-card-title">Product depth</h3>
            <p className="muted">
              As things matured I moved <strong className="text-strong">closer to product</strong>: model roadmaps, live systems,
              and the interfaces traders and operators actually touch.
            </p>
          </motion.article>
          <motion.article className="story-card" {...fade} transition={{ duration: 0.5, ease, delay: 0.16 }}>
            <h3 className="story-card-title">What happened next</h3>
            <p className="muted">
              The company <strong className="text-strong">restructured</strong>. That cleared the runway for me to double down on
              building under my own flag—same standards, sharper focus.
            </p>
          </motion.article>
          <motion.article className="story-card story-card-wide" {...fade} transition={{ duration: 0.5, ease, delay: 0.22 }}>
            <h3 className="story-card-title">How I build today</h3>
            <p className="muted">
              I&apos;m <strong className="text-strong">not positioning as a textbook &quot;coder&quot;</strong>—I&apos;m positioning
              as someone who ships. I use AI aggressively and responsibly to go from spec to production: design, implementation,
              review, iteration. That workflow is a craft I&apos;ve pushed to an <strong className="text-strong">exceptionally high
              level</strong>—the kind of profile teams at places like Meta hire when they care about velocity <em>and</em> taste.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
