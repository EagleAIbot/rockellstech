import { motion } from 'framer-motion'
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Cpu,
  ExternalLink,
  Github,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Trophy,
} from 'lucide-react'
import { featuredRepos, moreRepos } from '../data/featuredRepos'
import { getGithubProfileUrl } from '../config'

const items = [
  {
    icon: Cpu,
    title: 'Crypto & markets',
    body:
      'Forward curves, prediction and retrain pipelines, analytics APIs, AWS-style deploys, Dynamo/S3/Rabbit-style wiring—the boring stuff that has to work when markets are open.',
    span: 'large',
  },
  {
    icon: Trophy,
    title: 'Sports & betting products',
    body:
      'Dashboards, operator tooling, models around football (cards, shots, team goals), data pulls, and UIs that get used on match week—not a one-off notebook.',
    span: 'medium',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & onboarding',
    body:
      'AML-style screening flows, generated reports, Flask backends, React front ends for regulated onboarding. Built for real accountancy workflows, not a hackathon demo.',
    span: 'medium',
  },
  {
    icon: LayoutDashboard,
    title: 'Trading & ops UIs',
    body:
      'Crypto trading PWAs: sockets, wallets, mirror modes, notifications. Built for people who stare at screens all day.',
    span: 'small',
  },
  {
    icon: BarChart3,
    title: 'Research → production',
    body:
      'Taking experiments from “ran once” to repeatable train/eval, containers, and deploys—with a frontend on top when it matters.',
    span: 'small',
  },
  {
    icon: Activity,
    title: 'Signals & execution',
    body:
      'Regime filters, validation tooling, and logic around when systems act—not just what they print on a chart.',
    span: 'small',
  },
]

export function Builds() {
  const profileUrl = getGithubProfileUrl()

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
          What I&apos;ve actually shipped.
        </motion.h2>
        <p className="lead builds-sub">
          Public repos aren&apos;t garnish—they&apos;re receipts. Below is a curated set with context on{' '}
          <strong className="text-strong">why each one matters</strong>, not just what the folder is called.
        </p>

        <div className="repo-showcase">
          <div className="repo-showcase-head">
            <h3 className="repo-showcase-title">
              <Sparkles size={22} strokeWidth={2} aria-hidden />
              Featured repositories
            </h3>
            <p className="repo-showcase-lead">
              Real links, real deploys where noted. Read the flex lines—then click through and verify the code.
            </p>
          </div>

          <div className="repo-grid">
            {featuredRepos.map((repo, i) => (
              <motion.article
                key={repo.repoUrl}
                className="repo-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <header className="repo-card-top">
                  <span className="repo-card-cat">{repo.category}</span>
                  {repo.liveUrl ? (
                    <span className="repo-card-live" title="Has a public live URL">
                      Live
                    </span>
                  ) : null}
                </header>
                <h4 className="repo-card-name">{repo.title}</h4>
                <p className="repo-card-hook">{repo.hook}</p>
                <ul className="repo-card-flex" aria-label="Why it hits">
                  {repo.flex.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className="repo-card-stack">
                  {repo.stack.map((t) => (
                    <span key={t} className="repo-stack-pill">
                      {t}
                    </span>
                  ))}
                </div>
                <footer className="repo-card-actions">
                  <a className="repo-link repo-link-primary" href={repo.repoUrl} target="_blank" rel="noreferrer">
                    <Github size={17} strokeWidth={2} aria-hidden />
                    View repo
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                  {repo.liveUrl ? (
                    <a className="repo-link repo-link-secondary" href={repo.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} aria-hidden />
                      {repo.liveLabel ?? 'Open live'}
                    </a>
                  ) : null}
                </footer>
              </motion.article>
            ))}
          </div>

          <div className="repo-more">
            <p className="repo-more-label">Also on GitHub</p>
            <ul className="repo-more-list">
              {moreRepos.map((r) => (
                <li key={r.repoUrl}>
                  <a href={r.repoUrl} target="_blank" rel="noreferrer">
                    <span className="repo-more-name">{r.name}</span>
                    <span className="repo-more-note">{r.note}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a className="repo-profile-cta" href={profileUrl} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden />
              See every public repo on profile
              <ArrowUpRight size={17} aria-hidden />
            </a>
          </div>
        </div>

        <motion.h3
          className="builds-bento-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Capability map <span className="builds-bento-muted">(how the work clusters)</span>
        </motion.h3>
        <p className="lead builds-bento-lead">
          Same person across these lanes—models, services, and frontends, often with me wiring the space between research and what users click.
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
      </div>
    </section>
  )
}
