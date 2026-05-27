import { sectionCopy, testimonials } from '../data/profile'

export function Credibility() {
  return (
    <section className="rt-credibility">
      <div className="container">
        <div className="section-divider" data-reveal />
        <p className="eyebrow" data-reveal>
          {sectionCopy.credibility.eyebrow}
        </p>
        <h2 className="section-title" data-reveal>
          {sectionCopy.credibility.title}
        </h2>
        <p className="section-subtitle" data-reveal>
          {sectionCopy.credibility.subtitle}
        </p>
        <div className="rt-credibility-grid">
          {testimonials.map((t) => (
            <blockquote key={t.quote} className="rt-quote-card" data-reveal>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>{t.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
