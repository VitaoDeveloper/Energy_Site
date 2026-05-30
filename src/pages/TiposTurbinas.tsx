import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function TiposTurbinas() {
  return (
    <>
      <Navbar />
      <section className="topic-hero">
        <div className="topic-hero-bg" />
        <Link to="/" className="topic-back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M19 12H5m6-6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voltar
        </Link>
        <div className="topic-hero-content">
          <span className="badge badge-green">Tópico 2</span>
          <h1>Tipos de<br /><span className="gradient-text">turbinas eólicas</span></h1>
        </div>
      </section>

      <section className="topic-content">
        <div className="topic-body">
          <h2>Classificação principal</h2>
          <p>
            As turbinas eólicas podem ser classificadas de diversas formas: pelo eixo de rotação,
            pela localização de instalação, pela potência ou pelo tipo de conexão à rede.
            As duas categorias mais importantes são onshore e offshore.
          </p>

          <div className="compare-grid">
            <div className="compare-card">
              <div className="compare-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Onshore</h3>
              <p>Instaladas em terra firme, geralmente em regiões com ventos constantes como planícies, topos de colinas e litoral.</p>
              <ul className="topic-list">
                <li>Menor custo de instalação e manutenção</li>
                <li>Capacidade típica: 2–5 MW por turbina</li>
                <li>Altura da torre: 60–100 metros</li>
                <li>Vida útil: 20–25 anos</li>
              </ul>
            </div>
            <div className="compare-card">
              <div className="compare-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2" strokeLinecap="round"/>
                  <path d="M12 2v10l8 4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Offshore</h3>
              <p>Instaladas no mar, em plataformas fixas ou flutuantes, onde os ventos são mais fortes, constantes e com menos turbulência.</p>
              <ul className="topic-list">
                <li>Maior capacidade de geração (8–15 MW)</li>
                <li>Ventos mais estáveis e previsíveis</li>
                <li>Custo de instalação mais elevado</li>
                <li>Tecnologia de fundações fixas ou flutuantes</li>
              </ul>
            </div>
          </div>

          <h2>Classificação pelo eixo</h2>
          <p>
            Quanto à orientação do eixo de rotação, as turbinas dividem-se em dois tipos:
          </p>
          <ul className="topic-list">
            <li><strong>Eixo horizontal (HAWT):</strong> o modelo mais comum, com o rotor e o gerador no topo de uma torre, alinhados na direção do vento. Representa mais de 95% das turbinas comerciais.</li>
            <li><strong>Eixo vertical (VAWT):</strong> o rotor gira em torno de um eixo vertical. São menos eficientes, mas funcionam com ventos de qualquer direção e são usadas em áreas urbanas ou de baixa altitude.</li>
          </ul>

          <h2>Classificação por porte</h2>
          <div className="table-wrap">
            <table className="topic-table">
              <thead>
                <tr>
                  <th>Porte</th>
                  <th>Potência</th>
                  <th>Uso típico</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Pequeno</td><td>Até 100 kW</td><td>Residências, fazendas, comunidades isoladas</td></tr>
                <tr><td>Médio</td><td>100 kW – 1 MW</td><td>Comércio, cooperativas, pequenos parques</td></tr>
                <tr><td>Grande</td><td>1 MW – 15 MW</td><td>Parques eólicos comerciais (onshore e offshore)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="topic-nav-bottom">
          <Link to="/como-funciona" className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5m6-6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Anterior
          </Link>
          <Link to="/vantagens" className="btn-primary">
            Próximo: Vantagens
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
