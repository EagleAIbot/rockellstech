import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { getGithubUrl } from '../config'

export function Header() {
  const githubUrl = getGithubUrl()
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header-inner wrap">
        <a href="#" className="logo">
          <span className="logo-mark">R</span>
          <span className="logo-text">Rockell Tech</span>
        </a>
        <nav className="nav">
          <a href="#story">Background</a>
          <a href="#builds">Work</a>
          <a href="#github">GitHub</a>
          <a href={githubUrl} className="nav-gh" target="_blank" rel="noreferrer">
            <Github size={18} strokeWidth={2} aria-hidden />
            Repo
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
