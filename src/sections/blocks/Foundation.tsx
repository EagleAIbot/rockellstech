import { motion } from 'framer-motion'

const cats = ['Crypto & markets', 'Sports & betting', 'Compliance', 'Trading UX', 'ML lifecycle', 'Data & APIs']

const tiles = [
  { t: 'Curve & prediction paths', c: 'Markets' },
  { t: 'Operator & fan surfaces', c: 'Sports' },
  { t: 'Screening & reports', c: 'Compliance' },
  { t: 'Realtime consoles', c: 'Trading' },
  { t: 'Train → deploy loop', c: 'ML' },
  { t: 'Postgres / queues / S3', c: 'Infra' },
  { t: 'Flask & FastAPI', c: 'Backend' },
  { t: 'React & PWAs', c: 'Frontend' },
]

export function Foundation() {
  return (
    <section id="foundations" className="s-found section">
      <div className="wrap">
        <p className="s-eyebrow">Where I focus</p>
        <h2 className="s-h2-wide">Foundations you can tune—without rebuilding from zero.</h2>
        <div className="s-found-chips">
          {cats.map((c) => (
            <span key={c} className="s-chip">
              {c}
            </span>
          ))}
        </div>
        <div className="s-found-grid">
          {tiles.map((x, i) => (
            <motion.a
              key={x.t}
              href="#builds"
              className="s-found-tile"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <span className="s-found-cat">{x.c}</span>
              <span className="s-found-t">{x.t}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
