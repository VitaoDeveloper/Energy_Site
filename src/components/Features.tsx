import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Feature {
  icon: ReactNode
  title: string
  desc: string
  to: string
}

interface FeaturesProps {
  badge: string
  title: string
  features: Feature[]
}

export default function Features({ badge, title, features }: FeaturesProps) {
  return (
    <section className="features" id="topicos">
      <div className="section-header">
        <span className="badge badge-sky">{badge}</span>
        <h2>{title}</h2>
      </div>
      <div className="features-grid">
        {features.map((f) => (
          <Link key={f.title} to={f.to} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <span className="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
