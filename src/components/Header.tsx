import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { getContactEmail, getGithubProfileUrl } from '../config'
import { BrandMark } from './BrandMark'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#track-record', label: 'Track record' },
  { href: '#lanes', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
]

export function Header() {
  const contactEmail = getContactEmail()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const githubUrl = getGithubProfileUrl()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`rt-nav${scrolled ? ' rt-nav--float' : ''}`}>
        <div className="rt-nav-shell">
          <div className="rt-nav-inner">
            <a href="#top" className="rt-nav-logo">
              <BrandMark />
              <span>
                <strong>Jack Rockell</strong>
              </span>
            </a>

            <nav className="rt-nav-links" aria-label="Primary">
              <div className="rt-nav-rail">
                {links.map((l) => (
                  <a key={l.href} href={l.href}>
                    {l.label}
                  </a>
                ))}
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
              <a className="btn btn-accent btn-sm" href={`mailto:${contactEmail}`}>
                Email
              </a>
            </nav>

            <button type="button" className="rt-nav-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={`rt-drawer${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="rt-drawer-overlay" onClick={() => setOpen(false)} />
        <div className="rt-drawer-panel">
          <div className="rt-drawer-head">
            <span className="rt-drawer-brand">
              <BrandMark /> Jack Rockell
            </span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={githubUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            GitHub
          </a>
          <a className="btn btn-accent" href={`mailto:${contactEmail}`} onClick={() => setOpen(false)}>
            Email
          </a>
        </div>
      </div>
    </>
  )
}
