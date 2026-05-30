import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="15" fill="currentColor"/>
              <path d="M16 4L20 14L16 12L12 14Z" fill="#fff"/>
              <rect x="15" y="12" width="2" height="10" fill="#fff" rx="1"/>
              <path d="M10 24Q16 26 22 24" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
            <span>Energia<span className="logo-accent">Eólica</span></span>
          </Link>
          <p>Um site informativo sobre energia eólica — a força dos ventos a serviço da humanidade.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Conteúdo</h4>
            <a href="/#sobre">O que é</a>
            <a href="/#dados">Dados mundiais</a>
            <a href="/#topicos">Tópicos</a>
          </div>
          <div>
            <h4>Navegue</h4>
            <Link to="/how-works">Como funciona</Link>
            <Link to="/types">Tipos de turbinas</Link>
            <Link to="/benefits">Vantagens</Link>
            <Link to="/challenges">Desafios</Link>
          </div>
          <div>
            <h4>Fontes</h4>
            <a href="https://pt.wikipedia.org/wiki/Energia_e%C3%B3lica" target="_blank" rel="noopener noreferrer">Wikipedia</a>
            <a href="https://www.irena.org/Energy-Transition/Technology/Wind-energy" target="_blank" rel="noopener noreferrer">IRENA</a>
            <a href="https://gwec.net/" target="_blank" rel="noopener noreferrer">GWEC</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Conteúdo educacional — 2026</p>
      </div>
    </footer>
  )
}
