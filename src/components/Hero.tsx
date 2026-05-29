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
        <div className="turbine" role="img" aria-label="Turbina eólica">
          <div className="blade blade-1" />
          <div className="blade blade-2" />
          <div className="blade blade-3" />
          <div className="tower" />
          <div className="base-ring" />
        </div>
        <div className="wind-line wind-line-1" />
        <div className="wind-line wind-line-2" />
        <div className="wind-line wind-line-3" />
      </div>
    </section>
  )
}
