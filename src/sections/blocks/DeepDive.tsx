import { motion } from 'framer-motion'

const blocks = [
  {
    title: 'Ship on real timelines',
    body:
      'I’m used to roadmaps that collide with markets and match weeks. That means tight feedback loops, honest cuts, and software that’s allowed to be boring if it’s reliable.',
    bullets: ['No “we’ll ship in Q4” with nothing in prod', 'Same accountability I had as CEO', 'You get direct access, not layers'],
  },
  {
    title: 'ML that meets markets',
    body:
      'Crypto and sports aren’t Kaggle contests. I’ve built forward-curve and prediction paths, retrain and analytics services, and the glue around them so outputs are usable when it matters.',
    bullets: ['Production-shaped pipelines', 'Ops-minded evaluation', 'Infra that matches how teams deploy'],
  },
  {
    title: 'Operator-grade UIs',
    body:
      'If traders or operators won’t touch it, it doesn’t count. I’ve shipped dashboards and PWAs with real-time data, wallets, and flows meant for long sessions.',
    bullets: ['Sockets and state done responsibly', 'Mirror / presentation modes where needed', 'Clarity over feature creep'],
  },
  {
    title: 'Integrations that stick',
    body:
      'The boring parts—queues, object storage, DB config, auth boundaries—are where products die or scale. I default to patterns that teams can extend without archaeology.',
    bullets: ['Fewer bespoke snowflakes', 'Docs and handover that match the code', 'Same rigor across greenfield and rescue'],
  },
  {
    title: 'Signal you can act on',
    body:
      'Pretty charts aren’t the goal. I care whether the right person can decide faster Monday morning—whether that’s risk, ops, or product.',
    bullets: ['Instrumentation that matches decisions', 'Honest about uncertainty', 'Iteration with adults in the room'],
  },
]

export function DeepDive() {
  return (
    <section id="deep" className="s-deep section">
      <div className="wrap">
        <p className="s-eyebrow">The detail</p>
        <h2 className="s-h2-wide">Same themes—spelled out the way I’d explain them in a room.</h2>
        <div className="s-deep-stack">
          {blocks.map((b, i) => (
            <motion.article
              key={b.title}
              className="s-deep-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <h3 className="s-deep-title">{b.title}</h3>
              <p className="s-deep-body">{b.body}</p>
              <ul className="s-deep-bullets">
                {b.bullets.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
