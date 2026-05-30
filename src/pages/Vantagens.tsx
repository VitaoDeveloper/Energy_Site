import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const benefits = [
  {
    title: 'Fonte renovável e inesgotável',
    desc: 'O vento é um recurso natural abundante e renovável. Diferente dos combustíveis fósseis, nunca se esgota e está disponível em praticamente todas as regiões do planeta.',
    color: '#0f6b3a',
  },
  {
    title: 'Zero emissões de poluentes',
    desc: 'Durante a operação, as turbinas eólicas não emitem CO₂, óxidos de nitrogênio, enxofre ou qualquer outro poluente atmosférico. Cada kWh eólico evita a queima de combustíveis fósseis.',
    color: '#0284c7',
  },
  {
    title: 'Baixo custo operacional',
    desc: 'Após instalada, uma turbina eólica tem custos operacionais muito baixos. O "combustível" (o vento) é gratuito, e a manutenção é relativamente simples e previsível.',
    color: '#16a34a',
  },
  {
    title: 'Geração de empregos verdes',
    desc: 'O setor eólico gera milhões de empregos ao redor do mundo, desde a fabricação e instalação até operação e manutenção — muitos deles em regiões remotas.',
    color: '#ca8a04',
  },
  {
    title: 'Independência energética',
    desc: 'Países com potencial eólico podem reduzir sua dependência de combustíveis fósseis importados, fortalecendo sua segurança energética e balança comercial.',
    color: '#7c3aed',
  },
  {
    title: 'Compatível com outros usos do solo',
    desc: 'Parques eólicos ocupam pouco espaço físico. O terreno ao redor das turbinas pode ser usado para agricultura, pecuária ou preservação ambiental simultaneamente.',
    color: '#0891b2',
  },
]

export default function Vantagens() {
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
          <span className="badge badge-green">Tópico 3</span>
          <h1>Vantagens da<br /><span className="gradient-text">energia eólica</span></h1>
        </div>
      </section>

      <section className="topic-content">
        <div className="topic-body">
          <p className="topic-intro">
            A energia eólica é uma das fontes de energia que mais cresce no mundo — e por boas razões.
            Seus benefícios vão muito além da geração de eletricidade.
          </p>

          <div className="benefits-grid">
            {benefits.map((b) => (
              <div key={b.title} className="benefit-card">
                <div className="benefit-dot" style={{ background: b.color }} />
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>

          <h2>Comparação com outras fontes</h2>
          <div className="table-wrap">
            <table className="topic-table">
              <thead>
                <tr>
                  <th>Fonte</th>
                  <th>Emissão de CO₂</th>
                  <th>Custo (US$/MWh)</th>
                  <th>Renovável</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Eólica</td><td>~0 g/kWh</td><td>30–60</td><td>Sim</td></tr>
                <tr><td>Solar</td><td>~0 g/kWh</td><td>25–50</td><td>Sim</td></tr>
                <tr><td>Hidrelétrica</td><td>~0 g/kWh</td><td>40–80</td><td>Sim</td></tr>
                <tr><td>Gás Natural</td><td>~490 g/kWh</td><td>40–80</td><td>Não</td></tr>
                <tr><td>Carvão</td><td>~820 g/kWh</td><td>60–130</td><td>Não</td></tr>
                <tr><td>Nuclear</td><td>~0 g/kWh</td><td>100–180</td><td>Não</td></tr>
              </tbody>
            </table>
          </div>
          <p className="caption">Fonte: IRENA / Lazard 2025</p>
        </div>
        <div className="topic-nav-bottom">
          <Link to="/tipos" className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5m6-6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Anterior
          </Link>
          <Link to="/desafios" className="btn-primary">
            Próximo: Desafios
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
