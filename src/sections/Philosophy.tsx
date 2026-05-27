import { sectionCopy, trackRecord } from '../data/profile'

const BG = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80'

export function Philosophy() {
  return (
    <section className="rt-philosophy" style={{ backgroundImage: `url(${BG})` }} id="track-record">
      <div className="rt-philosophy-overlay" aria-hidden />
      <div className="container">
        <div className="section-header">
          <div className="section-divider section-divider--light" data-reveal />
          <p className="eyebrow eyebrow--light" data-reveal>
            {sectionCopy.trackRecord.eyebrow}
          </p>
          <h2 className="section-title section-title--light" data-reveal>
            {sectionCopy.trackRecord.title}
          </h2>
          <p className="section-subtitle section-subtitle--light" data-reveal>
            {sectionCopy.trackRecord.subtitle}
          </p>
        </div>
        <div className="rt-philosophy-grid">
          {trackRecord.map((item) => (
            <article key={item.num} className="rt-philosophy-card" data-reveal>
              <div className="rt-philosophy-num">{item.num}</div>
              <h3>{item.title}</h3>
              <p className="rt-philosophy-summary">{item.summary}</p>
              <p className="rt-philosophy-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
