import { ArrowDown } from 'lucide-react'
import { BREAK_VIDEO } from '../media/videos'
import { sectionCopy } from '../data/profile'

export function VideoBreak() {
  const lines = sectionCopy.videoBreak.heading.split('\n')

  return (
    <section className="rt-video-break" aria-label="Career highlight">
      <div className="rt-video-break__media">
        <video autoPlay muted loop playsInline preload="none" className="rt-video-break__vid">
          <source src={BREAK_VIDEO} type="video/mp4" />
        </video>
        <div className="rt-video-break__overlay" aria-hidden />
      </div>
      <div className="container rt-video-break__content">
        <h2 className="rt-video-break__heading" data-reveal>
          {lines[0]}
          <br />
          <em>{lines[1]}</em>
        </h2>
        <p className="rt-video-break__sub" data-reveal>
          {sectionCopy.videoBreak.sub}
        </p>
      </div>
      <div className="rt-video-break__hint" aria-hidden>
        <ArrowDown size={18} />
      </div>
    </section>
  )
}
