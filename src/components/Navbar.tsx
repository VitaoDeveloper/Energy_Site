import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="15" fill="currentColor"/>
            <path d="M16 4L20 14L16 12L12 14Z" fill="#fff"/>
            <rect x="15" y="12" width="2" height="10" fill="#fff" rx="1"/>
            <path d="M10 24Q16 26 22 24" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
          <span>Energia<span className="logo-accent">Eólica</span></span>
        </Link>
        <div className="nav-links">
          {isHome ? (
            <>
              <a href="#sobre">O que é</a>
              <a href="#dados">Dados</a>
              <a href="#topicos">Tópicos</a>
              <a href="#saiba-mais" className="btn-nav">Saiba mais</a>
            </>
          ) : (
            <>
              <Link to="/">Início</Link>
              <Link to="/como-funciona">Como funciona</Link>
              <Link to="/tipos">Tipos</Link>
              <Link to="/" className="btn-nav">Voltar</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
