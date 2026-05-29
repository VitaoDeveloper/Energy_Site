import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <a href="#" className="logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" fill="currentColor"/>
              <path d="M16 4L20 14L16 12L12 14Z" fill="#fff"/>
              <rect x="15" y="12" width="2" height="10" fill="#fff" rx="1"/>
              <path d="M10 24Q16 26 22 24" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
            <span>Energia<span className="logo-accent">Eólica</span></span>
          </a>
          <div className="nav-links">
            <a href="#sobre">O que é</a>
            <a href="#dados">Dados</a>
            <a href="#topicos">Tópicos</a>
            <a href="#saiba-mais" className="btn-nav">Saiba mais</a>
          </div>
        </div>
      </nav>

      <section className="hero" id="sobre">
        <div className="hero-bg">
          <div className="hero-glow hero-glow-1" />
          <div className="hero-glow hero-glow-2" />
        </div>
        <div className="hero-content">
          <span className="badge">Energia renovável</span>
          <h1>
            O que é energia<br />
            <span className="gradient-text">eólica?</span>
          </h1>
          <p>
            Energia eólica é a eletricidade gerada a partir da força dos ventos.
            Por meio de aerogeradores (turbinas eólicas), a energia cinética do vento
            é convertida em energia elétrica limpa e renovável.
          </p>
          <div className="hero-cta">
            <a href="#topicos" className="btn-primary">Entender como funciona</a>
            <a href="#dados" className="btn-outline">Ver dados mundiais</a>
          </div>
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

      <section className="hero-logos">
        <p>Presente em mais de 90 países</p>
        <div className="logos-row">
          {['China', 'EUA', 'Alemanha', 'Índia', 'Brasil'].map((name) => (
            <span key={name} className="logo-chip">{name}</span>
          ))}
        </div>
      </section>

      <section className="stats" id="dados">
        <div className="stats-bg" />
        <div className="section-header">
          <span className="badge badge-green">Impacto global</span>
          <h2>Energia eólica no mundo<br />em números</h2>
        </div>
        <div className="stats-grid">
          {[
            { value: '1.000', suffix: 'GW', label: 'Capacidade global instalada' },
            { value: '1,6', suffix: 'bi', label: 'Toneladas de CO₂ evitadas/ano' },
            { value: '5', suffix: 'M', label: 'Empregos gerados no setor' },
            { value: '20', suffix: '%', label: 'Participação na matriz global' },
          ].map((s) => (
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

      <section className="features" id="topicos">
        <div className="section-header">
          <span className="badge badge-sky">Tópicos</span>
          <h2>Entenda tudo sobre<br />energia eólica</h2>
        </div>
        <div className="features-grid">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v3m0 0a4 4 0 0 1 4 4m-4-4a4 4 0 0 0-4 4m4 0v12" strokeLinecap="round"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              ),
              title: 'Como funciona',
              desc: 'O vento gira as pás da turbina, que acionam um gerador. A energia cinética é convertida em eletricidade sem emissão de poluentes.',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Tipos de turbinas',
              desc: 'Turbinas onshore (em terra) e offshore (no mar). As offshore capturam ventos mais fortes e constantes, com maior capacidade de geração.',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Vantagens',
              desc: 'Fonte inesgotável, não polui, baixo custo operacional, gera empregos verdes e reduz dependência de combustíveis fósseis.',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8m-4-4v4" strokeLinecap="round"/>
                </svg>
              ),
              title: 'Desafios',
              desc: 'Intermitência do vento, impacto visual e sonoro, necessidade de áreas extensas e investimento inicial elevado.',
            },
          ].map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta" id="saiba-mais">
        <div className="cta-bg">
          <div className="cta-glow" />
        </div>
        <div className="cta-content">
          <span className="badge">Aprofunde-se</span>
          <h2>A energia do futuro<br />sopra nos ventos</h2>
          <p>
            A energia eólica é uma das fontes que mais cresce no mundo.
            Quer saber mais sobre como ela funciona na prática?
          </p>
          <a href="https://pt.wikipedia.org/wiki/Energia_e%C3%B3lica" target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
            Ler artigo completo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#" className="logo">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" fill="currentColor"/>
                <path d="M16 4L20 14L16 12L12 14Z" fill="#fff"/>
                <rect x="15" y="12" width="2" height="10" fill="#fff" rx="1"/>
                <path d="M10 24Q16 26 22 24" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
              <span>Energia<span className="logo-accent">Eólica</span></span>
            </a>
            <p>Um site informativo sobre energia eólica — a força dos ventos a serviço da humanidade.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Conteúdo</h4>
              <a href="#sobre">O que é</a>
              <a href="#dados">Dados mundiais</a>
              <a href="#topicos">Tópicos</a>
            </div>
            <div>
              <h4>Navegue</h4>
              <a href="#topicos">Como funciona</a>
              <a href="#topicos">Tipos de turbinas</a>
              <a href="#topicos">Vantagens</a>
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
    </>
  )
}

export default App
