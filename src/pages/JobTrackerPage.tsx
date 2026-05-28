import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Copy, Check, Lock, LogOut } from 'lucide-react'
import { trackerJobs, trackerProfile, trackerUpdated } from '../data/trackerJobs'
import {
  positioningLine,
  universalWhyMe,
  roleBlurbs,
  workExperience,
  skillsList,
  searchTerms,
  greenhouseAnswers,
} from '../data/trackerContent'
import { isTrackerConfigured, isTrackerUnlocked, lockTracker, unlockTracker } from '../lib/trackerAuth'
import '../styles/job-tracker.css'

function CopyBtn({ text, label }: { text: string; label: string }) {
  const [ok, setOk] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setOk(true)
    setTimeout(() => setOk(false), 2000)
  }
  return (
    <button type="button" className="jt-copy" onClick={copy} title={`Copy ${label}`}>
      {ok ? <Check size={14} /> : <Copy size={14} />}
      <span>{ok ? 'Copied' : label}</span>
    </button>
  )
}

function LoginGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    const ok = await unlockTracker(password)
    setBusy(false)
    if (ok) onUnlock()
    else setError('Wrong password')
  }

  if (!isTrackerConfigured()) {
    return (
      <div className="jt-gate">
        <Lock size={32} />
        <h1>Apply tracker</h1>
        <p className="jt-muted">Not configured for production yet. Set <code>VITE_TRACKER_PASSWORD_HASH</code> in GitHub Actions secrets and redeploy.</p>
        <Link to="/" className="jt-back">
          ← Portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="jt-gate">
      <Lock size={32} />
      <h1>Apply tracker</h1>
      <p className="jt-muted">Private — password required</p>
      <form onSubmit={submit} className="jt-login-form">
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="jt-input"
        />
        <button type="submit" className="btn btn-primary" disabled={busy || !password}>
          {busy ? 'Checking…' : 'Unlock'}
        </button>
      </form>
      {error ? <p className="jt-error">{error}</p> : null}
      <Link to="/" className="jt-back">
        ← Portfolio
      </Link>
    </div>
  )
}

export function JobTrackerPage() {
  const [unlocked, setUnlocked] = useState(isTrackerUnlocked)
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    document.title = 'Apply tracker · Jack Rockell'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => {
      document.title = 'Jack Rockell · Builder'
      meta.remove()
    }
  }, [])

  if (!unlocked) {
    return (
      <div className="jt-page">
        <LoginGate onUnlock={() => setUnlocked(true)} />
      </div>
    )
  }

  const activeJobs = trackerJobs.filter((j) => j.status !== 'skip')

  return (
    <div className="jt-page">
      <header className="jt-header">
        <div>
          <p className="jt-eyebrow">Private · {trackerUpdated}</p>
          <h1>Apply tracker</h1>
          <p className="jt-muted jt-positioning">{positioningLine}</p>
          <p className="jt-muted">
            {trackerProfile.email} · Default salary £{trackerProfile.salaryGbp}
          </p>
        </div>
        <div className="jt-header-actions">
          <Link to="/" className="btn btn-outline">
            Portfolio
          </Link>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              lockTracker()
              setUnlocked(false)
            }}
          >
            <LogOut size={16} />
            Lock
          </button>
        </div>
      </header>

      <section className="jt-panel">
        <h2>Your lane</h2>
        <p className="jt-lane-note">
          Forward Deployed · Applied AI · AI Product — not ML research or crypto-only.
        </p>
        <details className="jt-details">
          <summary>LinkedIn / Indeed search terms</summary>
          <p className="jt-search-terms">{searchTerms.join(' · ')}</p>
        </details>
      </section>

      <section className="jt-panel">
        <h2>Quick copy</h2>
        <div className="jt-copy-row">
          <CopyBtn text={universalWhyMe} label="Why me" />
          <CopyBtn text={skillsList} label="Skills" />
        </div>
        <details className="jt-details">
          <summary>Work experience (3 roles)</summary>
          <ul className="jt-work-list">
            {workExperience.map((w) => (
              <li key={w.company}>
                <strong>{w.title}</strong> @ {w.company} · {w.from}
                {w.current ? ' – Present' : ` – ${w.to}`}
              </li>
            ))}
          </ul>
          <CopyBtn
            text={workExperience
              .map(
                (w) =>
                  `${w.title}\n${w.company}\nFrom: ${w.from}\nTo: ${w.current ? 'Present' : w.to}\nCurrent: ${w.current ? 'Yes' : 'No'}`,
              )
              .join('\n\n')}
            label="All roles"
          />
        </details>
        <details className="jt-details">
          <summary>Greenhouse (Prolific P01)</summary>
          <dl className="jt-kv">
            <dt>Salary GBP</dt>
            <dd>{greenhouseAnswers.salaryGbp}</dd>
            <dt>Right to work UK</dt>
            <dd>{greenhouseAnswers.rightToWorkUk}</dd>
            <dt>Sponsorship</dt>
            <dd>{greenhouseAnswers.sponsorship}</dd>
            <dt>Based in UK</dt>
            <dd>{greenhouseAnswers.basedInUk}</dd>
          </dl>
        </details>
      </section>

      <section className="jt-jobs">
        <h2>Roles to apply ({activeJobs.length})</h2>
        <p className="jt-muted">Click Apply opens the company site in a new tab. Expand for cover blurb.</p>

        {activeJobs.map((job) => {
          const blurb = roleBlurbs[job.id]
          const expanded = openId === job.id
          return (
            <article key={job.id} className={`jt-card jt-card--${job.status}`}>
              <div className="jt-card-top">
                <div>
                  <span className="jt-id">{job.id}</span>
                  <span className="jt-fit">{job.fit}/10</span>
                  <span className={`jt-status jt-status--${job.status}`}>{job.status}</span>
                  <h3>{job.company}</h3>
                  <p className="jt-role">{job.title}</p>
                  <p className="jt-meta">
                    {job.remote} · {job.salary}
                  </p>
                </div>
                <a
                  href={job.applyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary jt-apply-btn"
                >
                  Apply
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="jt-notes">{job.notes}</p>
              {blurb ? (
                <>
                  <button
                    type="button"
                    className="jt-toggle"
                    onClick={() => setOpenId(expanded ? null : job.id)}
                  >
                    {expanded ? 'Hide cover blurb' : 'Show cover blurb'}
                  </button>
                  {expanded ? (
                    <div className="jt-blurb">
                      <p>{blurb}</p>
                      <CopyBtn text={blurb} label="Cover blurb" />
                    </div>
                  ) : null}
                </>
              ) : null}
            </article>
          )
        })}
      </section>

      <footer className="jt-footer">
        <p className="jt-muted">
          Update roles in <code>job-search/jobs.json</code> then redeploy. Not linked from the public site.
        </p>
      </footer>
    </div>
  )
}
