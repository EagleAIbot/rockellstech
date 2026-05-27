import { useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { sectionCopy } from '../data/profile'
import { flagshipWork, workMore } from '../data/work'

export function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: 'smooth' })
  }

  return (
    <section className="rt-projects" id="work">
      <div className="container">
        <div className="rt-projects-head">
          <div>
            <div className="section-divider" data-reveal />
            <p className="eyebrow" data-reveal>
              {sectionCopy.work.eyebrow}
            </p>
            <h2 className="section-title" data-reveal>
              {sectionCopy.work.title}
            </h2>
            <p className="section-subtitle" data-reveal>
              {sectionCopy.work.subtitle}
            </p>
          </div>
          <div className="rt-carousel-controls" data-reveal>
            <button type="button" className="rt-carousel-btn" onClick={() => scroll(-1)} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <button type="button" className="rt-carousel-btn" onClick={() => scroll(1)} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="rt-carousel-track" ref={trackRef} data-reveal>
          {flagshipWork.map((item) => (
            <article key={item.title} className="rt-project-card">
              <div className="rt-project-badge">{item.category}</div>
              <h3 className="rt-project-title">{item.title}</h3>
              <p className="rt-project-impact">{item.impact}</p>
              <ul className="rt-project-wins">
                {item.wins.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              {item.liveUrl ? (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rt-project-live"
                >
                  <ExternalLink size={14} />
                  {item.liveLabel ?? 'See it live'}
                  <ArrowRight size={14} />
                </a>
              ) : null}
            </article>
          ))}
        </div>

        <div className="rt-work-more" data-reveal>
          <h3 className="rt-work-more-title">Also shipped</h3>
          <div className="rt-work-more-grid">
            {workMore.map((cat) => (
              <div key={cat.label} className="rt-work-more-col">
                <h4>{cat.label}</h4>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <span className="rt-work-more-name">{item.name}</span>
                      <span>{item.flex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
