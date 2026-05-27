import { ArrowRight } from 'lucide-react'
import { aboutPull, background, howIWork, sectionCopy, toolsNote } from '../data/profile'
import { getContactEmail, getGithubProfileUrl } from '../config'

export function Meet() {
  const contactEmail = getContactEmail()
  return (
    <section className="rt-meet" id="about">
      <div className="container">
        <div className="section-divider" data-reveal />
        <p className="eyebrow" data-reveal>
          {sectionCopy.about.eyebrow}
        </p>
        <h2 className="section-title" data-reveal>
          {sectionCopy.about.title}
        </h2>
        <p className="section-subtitle" data-reveal>
          {sectionCopy.about.subtitle}
        </p>

        <div className="rt-about-timeline">
          {background.map((b) => (
            <article key={b.phase} className="rt-about-card" data-reveal>
              <span className="rt-about-phase">{b.phase}</span>
              <p>{b.text}</p>
            </article>
          ))}
        </div>

        <p className="rt-about-pull" data-reveal>
          {aboutPull}
        </p>

        <div className="rt-meet-actions" data-reveal>
          <a href={`mailto:${contactEmail}`} className="btn btn-accent">
            Email me <ArrowRight size={15} />
          </a>
          <a href={getGithubProfileUrl()} className="btn btn-outline" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="container rt-how-block">
        <h3 className="rt-how-title" data-reveal>
          How I work
        </h3>
        <ol className="rt-how-steps">
          {howIWork.map((s) => (
            <li key={s.step} data-reveal>
              <span className="rt-how-step-num">{s.step}</span>
              <div>
                <strong>{s.title}</strong>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="rt-tools-note" data-reveal>
          {toolsNote}
        </p>
      </div>
    </section>
  )
}
