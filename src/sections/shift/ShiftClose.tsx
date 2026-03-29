import { ArrowRight, ExternalLink } from 'lucide-react'
import { getGithubUrl } from '../../config'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@rockellstech.com'
const quotes = [
  { q: 'Jack doesn’t disappear after the kickoff—he stays in the code with you.', a: 'Product lead', o: 'Trading infra' },
  { q: 'Rare mix: can talk to investors Monday and debug prod Tuesday.', a: 'Founder', o: 'Startup' },
  { q: 'Our ML path finally looked like something we could operate, not just train.', a: 'Engineering manager', o: 'Fintech' },
]

export function ShiftClose() {
  const githubUrl = getGithubUrl()
  return (
    <section id="contact" className="s-close section">
      <div className="wrap">
        <h2 className="s-h2-center">Trusted by people who ship under pressure</h2>
        <p className="s-sub-center s-quote-note">Roles anonymized—happy to put real names on for serious conversations.</p>
        <div className="s-quote-grid">
          {quotes.map((x) => (
            <blockquote key={x.q} className="s-quote">
              <p className="s-quote-text">&ldquo;{x.q}&rdquo;</p>
              <footer className="s-quote-meta">
                {x.a} · {x.o}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="s-close-cta">
          <h3 className="s-close-h">Ready to build something that actually ships?</h3>
          <p className="s-close-p">
            Email is fastest. This site is open source on GitHub if you want the layout or to fork it.
          </p>
          <div className="s-close-btns">
            <a className="shift-btn shift-btn-solid shift-btn-lg" href={`mailto:${contactEmail}`}>
              Get in touch
              <ArrowRight size={18} aria-hidden />
            </a>
            <a className="shift-btn shift-btn-outline shift-btn-lg" href={githubUrl} target="_blank" rel="noreferrer">
              Open repository
              <ExternalLink size={17} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
