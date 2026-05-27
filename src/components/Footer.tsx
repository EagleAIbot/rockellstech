import { getContactEmail, getGithubUrl } from '../config'

export function Footer() {
  const contactEmail = getContactEmail()
  const githubUrl = getGithubUrl()
  const year = new Date().getFullYear()

  return (
    <footer className="rt-footer">
      <div className="container rt-footer-inner">
        <div className="rt-footer-brand">
          <span className="rt-footer-mark">JR</span>
          <div>
            <strong>Jack Rockell</strong>
            <span>Portfolio · rockellstech.com</span>
          </div>
        </div>
        <div className="rt-footer-links">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  )
}
