import { motion } from 'framer-motion'
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Cpu,
  ExternalLink,
  LayoutDashboard,
  ShieldCheck,
  Trophy,
} from 'lucide-react'
import { featuredRepos, moreRepos } from '../data/featuredRepos'

const items = [
  {
    icon: Cpu,
    title: 'Crypto & markets',
    body:
      'Forward curves, retrain paths, analytics APIs, AWS-shaped plumbing built for hours when markets are open.',
    span: 'large',
  },
  {
    icon: Trophy,
    title: 'Sports & betting',
    body:
      'Dashboards and models around fixtures and operators used on match week, not shelved after a demo.',
    span: 'medium',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & onboarding',
    body:
      'Screening flows, reports, Flask and React surfaces aligned with how regulated onboarding actually runs.',
    span: 'medium',
  },
  {
    icon: LayoutDashboard,
    title: 'Trading & ops UIs',
    body:
      'PWAs with sockets, wallets, and mirror modes built for people who live in the product.',
    span: 'small',
  },
  {
    icon: BarChart3,
    title: 'Research → production',
    body:
      'Repeatable train and eval, containers, deploys plus a frontend when the loop needs a face.',
    span: 'small',
  },
  {
    icon: Activity,
    title: 'Signals & execution',
    body:
      'Filters and validation around when systems act not only what they plot.',
    span: 'small',
  },
]

export function Builds() {
  return (
    <section id="builds" className="builds section">
      <div className="wrap">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          Work
        </motion.p>
        <motion.h2
          className="headline-lg builds-head"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Shipping lanes
        </motion.h2>
        <p className="lead builds-sub">
          Where the work clusters models, services, and UI. Same thread from spec to production.
        </p>

        <div className="bento">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              className={`bento-card bento-${item.span}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <div className="bento-icon">
                <item.icon size={22} strokeWidth={2} aria-hidden />
              </div>
              <h3 className="bento-title">{item.title}</h3>
              <p className="muted bento-body">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <div className="work-ledger">
          <div className="work-ledger-head">
            <h3 className="work-ledger-title">What shipped</h3>
            <p className="work-ledger-lead">What shipped.</p>
          </div>

          <ul className="work-ledger-list">
            {featuredRepos.map((repo, i) => (
              <motion.li
                key={repo.title}
                className="work-ledger-row"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.2) }}
              >
                <div className="work-ledger-main">
                  <div className="work-ledger-meta">
                    <span className="work-ledger-cat">{repo.category}</span>
                    {repo.liveUrl ? <span className="work-ledger-live">Live</span> : null}
                  </div>
                  <span className="work-ledger-name">{repo.title}</span>
                  <p className="work-ledger-hook">{repo.impact}</p>
                  <ul className="work-ledger-points">
                    {repo.wins.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </div>
                <div className="work-ledger-actions">
                  {repo.liveUrl ? (
                    <a className="work-ledger-link" href={repo.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink size={15} aria-hidden />
                      {repo.liveLabel ?? 'Open'}
                      <ArrowUpRight size={15} aria-hidden />
                    </a>
                  ) : null}
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="work-ledger-more">
            <span className="work-ledger-more-label">More</span>
            <div className="work-ledger-more-links">
              {moreRepos.map((r) => (
                <span key={r.name} className="work-ledger-more-item">
                  {r.name}
                  <span className="work-ledger-more-note">{r.note}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
