import { type ReactNode } from 'react'

interface CTAProps {
  badge: string
  title: string
  subtitle: string
  button: ReactNode
}

export default function CTA({ badge, title, subtitle, button }: CTAProps) {
  return (
    <section className="cta" id="saiba-mais">
      <div className="cta-bg">
        <div className="cta-glow" />
      </div>
      <div className="cta-content">
        <span className="badge">{badge}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {button}
      </div>
    </section>
  )
}
