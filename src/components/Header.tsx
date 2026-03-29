import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { getGithubUrl } from '../config'
import { BrandMark } from './BrandMark'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@rockellstech.com'

const nav = [
  { href: '#pillars', label: 'Product' },
  { href: '#deep', label: 'Approach' },
  { href: '#ships', label: 'Surfaces' },
  { href: '#story', label: 'Background' },
  { href: '#builds', label: 'Code' },
  { href: '#integrations', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const githubUrl = getGithubUrl()
  return (
    <motion.header className="rt-header" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div className="rt-header-glow" aria-hidden />
      <div className="rt-header-inner">
        <a href="#" className="rt-logo">
          <BrandMark />
          <span className="rt-logo-wordmark">
            <span className="rt-logo-primary">Rockell</span>
            <span className="rt-logo-secondary">Tech</span>
          </span>
        </a>

        <nav className="rt-nav-wrap" aria-label="Primary">
          <div className="rt-nav-pill">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href={githubUrl} target="_blank" rel="noreferrer" className="rt-nav-gh">
              GitHub
            </a>
          </div>
        </nav>

        <div className="rt-header-actions">
          <a href={githubUrl} className="rt-btn rt-btn-ghost" target="_blank" rel="noreferrer">
            Repo
          </a>
          <a className="rt-btn rt-btn-solid" href={`mailto:${contactEmail}`}>
            Contact
            <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden />
          </a>
        </div>
      </div>
    </motion.header>
  )
}
