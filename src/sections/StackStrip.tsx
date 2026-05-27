import { stack } from '../data/profile'

export function StackStrip() {
  const items = [...stack, ...stack]

  return (
    <section className="rt-stack-strip" aria-label="Technologies I ship with">
      <div className="container">
        <p className="rt-stack-strip-label">Stack &amp; systems I ship with</p>
      </div>
      <div className="rt-stack-marquee" aria-hidden>
        <div className="rt-stack-marquee-track">
          {items.map((tech, i) => (
            <span key={`${tech}-${i}`}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
