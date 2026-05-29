import { type ReactNode } from 'react'

interface HeroProps {
  badge: string
  title: ReactNode
  subtitle: string
  cta: ReactNode
}

export default function Hero({ badge, title, subtitle, cta }: HeroProps) {
  return (
    <section className="hero" id="sobre">
      <div className="hero-bg">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
      </div>
      <div className="hero-content">
        <span className="badge">{badge}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-cta">{cta}</div>
      </div>
      <div className="hero-visual">
        <div className="turbine-wrapper">
          <svg viewBox="0 0 200 280" className="turbine-svg" role="img" aria-label="Turbina eólica">
            <defs>
              <linearGradient id="bladeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f6b3a" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="towerGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>

            {/* Ground shadow */}
            <ellipse cx="100" cy="274" rx="40" ry="5" className="shadow-pulse" fill="rgba(0,0,0,0.08)" />

            {/* Tower */}
            <polygon points="94,270 106,270 103,118 97,118" fill="url(#towerGrad)" />
            <rect x="90" y="266" width="20" height="4" rx="1" fill="#64748b" />

            {/* Nacelle */}
            <rect x="88" y="106" width="24" height="14" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Rotor blades */}
            <g transform="translate(100, 112)">
              <g className="rotor">
                <path d="M -5,0 Q -8,-35 -1.5,-85 Q 5,-35 3,0 Z" fill="url(#bladeGrad)" opacity="0.85" />
                <path d="M -5,0 Q -8,-35 -1.5,-85 Q 5,-35 3,0 Z" fill="url(#bladeGrad)" opacity="0.85" transform="rotate(120)" />
                <path d="M -5,0 Q -8,-35 -1.5,-85 Q 5,-35 3,0 Z" fill="url(#bladeGrad)" opacity="0.85" transform="rotate(240)" />
                <circle cx="0" cy="0" r="7" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="3" fill="#64748b" />
                <circle cx="0" cy="0" r="1.5" fill="#475569" />
              </g>
            </g>

            {/* Wind sweeps */}
            <g className="wind-sweeps" aria-hidden="true">
              <path d="M 130,55 Q 160,50 195,55" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeLinecap="round" className="sweep sweep-1" />
              <path d="M 110,150 Q 155,142 200,152" stroke="#38bdf8" strokeWidth="1" fill="none" strokeLinecap="round" className="sweep sweep-2" />
              <path d="M 145,200 Q 175,192 215,202" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeLinecap="round" className="sweep sweep-3" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
