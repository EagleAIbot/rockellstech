/** Mirrors Shift “Proud partnerships” strip — your stack */
export function ShiftMarquee() {
  const items = ['Python', 'TypeScript', 'React', 'PyTorch', 'AWS', 'Docker', 'PostgreSQL', 'Real-time data']
  return (
    <section className="s-marquee" aria-label="Stack">
      <div className="s-marquee-inner wrap">
        <p className="s-marquee-label">Stack &amp; systems I ship with</p>
        <div className="s-marquee-row">
          {items.map((t) => (
            <span key={t} className="s-marquee-item">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
