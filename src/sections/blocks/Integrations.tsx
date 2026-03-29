export function Integrations() {
  const rows = [
    ['GitHub', 'Docker', 'AWS', 'Vite'],
    ['React', 'Python', 'Node', 'PostgreSQL'],
    ['WebSockets', 'REST', 'Redis', 'RabbitMQ-style patterns'],
  ]
  return (
    <section id="integrations" className="s-int section">
      <div className="wrap">
        <h2 className="s-h2-center">Tools &amp; patterns in the mix</h2>
        <p className="s-sub-center">Not a badge farm—just what shows up in real repos I’ve shipped.</p>
        <div className="s-int-rows">
          {rows.map((row) => (
            <div key={row.join()} className="s-int-row">
              {row.map((x) => (
                <span key={x} className="s-int-pill">
                  {x}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="s-int-foot">+ whatever your stack needs. I integrate instead of reinventing.</p>
      </div>
    </section>
  )
}
