import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { getGithubUrl } from '../config'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@rockellstech.com'

export function Header() {
  const githubUrl = getGithubUrl()
  return (
    <motion.header
      className="shift-header"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="shift-header-inner">
        <a href="#" className="shift-logo">
          <span className="shift-logo-mark" aria-hidden>
            R
          </span>
          <span className="shift-logo-text">Rockell Tech</span>
        </a>

        <nav className="shift-nav" aria-label="Primary">
          <a href="#pillars">Capabilities</a>
          <a href="#deep">Detail</a>
          <a href="#ships">Surfaces</a>
          <a href="#story">Background</a>
          <a href="#builds">Work</a>
          <a href="#integrations">Stack</a>
          <a href="#contact">Contact</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>

        <div className="shift-header-actions">
          <a href={githubUrl} className="shift-btn shift-btn-ghost" target="_blank" rel="noreferrer">
            View repo
          </a>
          <a className="shift-btn shift-btn-solid" href={`mailto:${contactEmail}`}>
            Get in touch
            <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden />
          </a>
        </div>
      </div>
    </motion.header>
  )
}
