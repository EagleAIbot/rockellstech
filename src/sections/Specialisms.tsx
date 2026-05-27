import { ArrowRight } from 'lucide-react'
import { productLanes, sectionCopy } from '../data/profile'
import { LANES_VIDEO } from '../media/videos'

export function Specialisms() {
  return (
    <section className="rt-specialisms" id="lanes">
      <div className="rt-specialisms-video" aria-hidden>
        <video autoPlay muted loop playsInline preload="none" className="rt-specialisms-video__vid">
          <source src={LANES_VIDEO} type="video/mp4" />
        </video>
        <div className="rt-specialisms-video__overlay" />
      </div>
      <div className="container">
        <div className="section-divider section-divider--light" data-reveal />
        <p className="eyebrow eyebrow--light" data-reveal>
          {sectionCopy.products.eyebrow}
        </p>
        <h2 className="section-title section-title--light" data-reveal>
          {sectionCopy.products.title}
        </h2>
        <p className="section-subtitle section-subtitle--light" data-reveal>
          {sectionCopy.products.subtitle}
        </p>
        <div className="rt-specialisms-grid">
          {productLanes.map((p) => (
            <div key={p.slug} className="rt-spec-card" data-reveal>
              <h3>{p.title}</h3>
              <p>{p.hook}</p>
              <div className="rt-spec-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a href="#work" className="rt-spec-link">
                View work <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
