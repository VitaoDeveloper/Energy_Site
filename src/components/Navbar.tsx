import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const h = (hash: string) => isHome ? hash : '/' + hash

  return (
    <nav className="navbar" aria-label="Navegação principal">
      <div className="nav-inner">
        <a href={h('#')} className="logo">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="15" fill="currentColor"/>
            <path d="M16 4L20 14L16 12L12 14Z" fill="#fff"/>
            <rect x="15" y="12" width="2" height="10" fill="#fff" rx="1"/>
            <path d="M10 24Q16 26 22 24" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
          <span>Energia<span className="logo-accent">Eólica</span></span>
        </a>
        <div className="nav-links">
          <a href={h('#sobre')}>O que é</a>
          <a href={h('#dados')}>Dados</a>
          <a href={h('#topicos')}>Tópicos</a>
          <a href={h('#saiba-mais')} className="btn-nav">Saiba mais</a>
        </div>
      </div>
    </nav>
  )
}
