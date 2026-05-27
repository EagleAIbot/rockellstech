import { ArrowDown } from 'lucide-react'
import { HERO_VIDEO, HERO_VIDEO_FALLBACK } from '../media/videos'
import { heroBio, heroStats } from '../data/profile'
import { getContactEmail } from '../config'

export function Hero() {
  const contactEmail = getContactEmail()
  return (
    <section className="rt-hero rt-hero--bio" id="top">
      <div className="rt-hero-video" aria-hidden>
        <video autoPlay muted loop playsInline preload="auto" className="rt-hero-video__vid">
          <source src={HERO_VIDEO} type="video/mp4" />
          <source src={HERO_VIDEO_FALLBACK} type="video/mp4" />
        </video>
        <div className="rt-hero-video__overlay" />
      </div>
      <div className="rt-hero-grain" aria-hidden />

      <div className="container rt-hero-bio-grid">
        <div className="rt-hero-portrait rt-ani-1">
          <div className="rt-hero-portrait-ring" aria-hidden />
          <img src="/hero.png" alt="Jack Rockell" width={799} height={800} className="rt-hero-portrait-img" />
        </div>

        <div className="rt-hero-story">
          <p className="rt-hero-role rt-ani-2">{heroBio.role}</p>
          <h1 className="rt-hero-name rt-ani-2">{heroBio.name}</h1>
          <p className="rt-hero-headline rt-ani-3">{heroBio.headline}</p>
          <p className="rt-hero-subhead rt-ani-3">{heroBio.subhead}</p>
          <p className="rt-hero-lede rt-ani-4">{heroBio.lede}</p>
          <p className="rt-hero-aside rt-ani-4">{heroBio.aside}</p>

          <ul className="rt-hero-stats rt-ani-5" aria-label="Career highlights">
            {heroStats.map((s) => (
              <li key={s.label} className="rt-hero-stat">
                <span className="rt-hero-stat__num">{s.num}</span>
                <span className="rt-hero-stat__label">{s.label}</span>
              </li>
            ))}
          </ul>

          <div className="rt-hero-actions rt-ani-5">
            <a className="btn btn-primary" href="#work">
              See what I&apos;ve built
            </a>
            <a className="btn btn-secondary" href={`mailto:${contactEmail}`}>
              Email me
            </a>
          </div>
        </div>
      </div>

      <a href="#work" className="rt-hero-scroll" aria-label="Scroll to work">
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
