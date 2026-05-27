import {
  careerHighlights,
  experience,
  projectHighlights,
  resumeMeta,
  resumeSummary,
  skillGroups,
} from '../data/resume'

export function ResumePreview() {
  return (
    <article className="rt-resume-doc" aria-label="Jack Rockell resume">
      <div className="rt-resume-doc__bar" aria-hidden />
      <header className="rt-resume-doc__header">
        <div className="rt-resume-doc__head-text">
          <h3 className="rt-resume-doc__name">{resumeMeta.name}</h3>
          <p className="rt-resume-doc__title">{resumeMeta.title}</p>
          <p className="rt-resume-doc__contact">
            <a href={`mailto:${resumeMeta.email}`}>{resumeMeta.email}</a>
            <span> · </span>
            {resumeMeta.location}
          </p>
          <p className="rt-resume-doc__contact">
            <a href={resumeMeta.website} target="_blank" rel="noreferrer">
              rockellstech.com
            </a>
            <span> · </span>
            <a href={resumeMeta.github} target="_blank" rel="noreferrer">
              github.com/EagleAIbot
            </a>
          </p>
        </div>
        <img src="/hero.png" alt="" className="rt-resume-doc__photo" width={88} height={88} />
      </header>

      <section>
        <h4 className="rt-resume-doc__section">Professional summary</h4>
        <p className="rt-resume-doc__body">{resumeSummary}</p>
      </section>

      <section>
        <h4 className="rt-resume-doc__section">Key highlights</h4>
        <ul className="rt-resume-doc__highlights">
          {careerHighlights.map((h) => (
            <li key={h.slice(0, 40)}>{h}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4 className="rt-resume-doc__section">Technical skills</h4>
        <dl className="rt-resume-doc__skills">
          {skillGroups.map((g) => (
            <div key={g.label} className="rt-resume-doc__skill-row">
              <dt>{g.label}</dt>
              <dd>{g.skills.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h4 className="rt-resume-doc__section">Work experience</h4>
        {experience.map((job) => (
          <div key={job.company + job.dates} className="rt-resume-doc__job">
            <div className="rt-resume-doc__job-head">
              <strong>{job.company}</strong>
              <span>{job.dates}</span>
            </div>
            <p className="rt-resume-doc__role">{job.role}</p>
            <ul>
              {job.bullets.map((b) => (
                <li key={b.slice(0, 48)}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h4 className="rt-resume-doc__section">Selected projects</h4>
        <ul className="rt-resume-doc__projects">
          {projectHighlights.map((p) => (
            <li key={p.slice(0, 40)}>{p}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}
