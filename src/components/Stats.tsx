interface Stat {
  value: string
  suffix: string
  label: string
}

interface StatsProps {
  badge: string
  title: string
  stats: Stat[]
}

export default function Stats({ badge, title, stats }: StatsProps) {
  return (
    <section className="stats" id="dados">
      <div className="stats-bg" />
      <div className="section-header">
        <span className="badge badge-green">{badge}</span>
        <h2>{title}</h2>
      </div>
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-value">
              {s.value}
              <span className="stat-suffix">{s.suffix}</span>
            </div>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
