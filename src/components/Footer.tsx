import { getGithubUrl } from '../config'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@rockellstech.com'

export function Footer() {
  const githubUrl = getGithubUrl()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <span className="logo-mark">R</span>
          <span>Rockell Tech · Jack Rockell</span>
        </div>
        <div className="footer-links">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="footer-copy">© {year} rockellstech.com</span>
        </div>
      </div>
    </footer>
  )
}
