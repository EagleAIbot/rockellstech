import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { getGithubUrl } from '../config'

export function GitHubCTA() {
  const githubUrl = getGithubUrl()
  return (
    <section id="github" className="github-cta section-tight">
      <div className="wrap">
        <motion.div
          className="github-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="github-panel-inner">
            <div className="github-icon-wrap" aria-hidden>
              <Github size={32} strokeWidth={1.75} />
            </div>
            <div className="github-copy">
              <h2 className="headline-lg github-title">Code</h2>
              <p className="muted github-desc">
                This site is open source on GitHub at <strong className="text-strong">EagleAIbot/rockellstech</strong>. Fork it,
                steal the layout, or deploy your own version.
              </p>
            </div>
            <a href={githubUrl} className="btn btn-primary github-btn" target="_blank" rel="noreferrer">
              GitHub
              <ExternalLink size={17} aria-hidden />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
