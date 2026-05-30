import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const challenges = [
  {
    title: 'Intermitência do vento',
    desc: 'O vento não sopra o tempo todo nem com a mesma intensidade. Isso torna a energia eólica uma fonte intermitente, exigindo sistemas de armazenamento ou fontes complementares para garantir suprimento contínuo.',
  },
  {
    title: 'Impacto visual e paisagístico',
    desc: 'Torres de até 120 metros com pás em movimento alteram a paisagem natural. Em regiões turísticas ou de grande valor cênico, a instalação de parques eólicos pode gerar controvérsias estéticas.',
  },
  {
    title: 'Ruído e vibração',
    desc: 'Turbinas eólicas produzem ruído aerodinâmico (das pás cortando o ar) e mecânico (do gerador e engrenagens). Para minimizar o incômodo, recomenda-se uma distância mínima de 400–500 metros de residências.',
  },
  {
    title: 'Impacto sobre a fauna',
    desc: 'Pássaros e morcegos podem colidir com as pás em movimento. Estudos de impacto ambiental e tecnologias como sistemas de detecção e parada automática ajudam a mitigar esse problema.',
  },
  {
    title: 'Custo inicial elevado',
    desc: 'A instalação de uma turbina ou de um parque eólico exige alto investimento inicial, incluindo estudos de viabilidade, licenciamento, infraestrutura e aquisição dos equipamentos.',
  },
  {
    title: 'Limitações geográficas',
    desc: 'Nem todas as regiões têm ventos suficientes para viabilizar a geração econômica de energia eólica. Locais ideais exigem velocidade média acima de 5–6 m/s e baixa turbulência.',
  },
]

export default function Desafios() {
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
          <span className="badge badge-green">Tópico 4</span>
          <h1>Desafios da<br /><span className="gradient-text">energia eólica</span></h1>
        </div>
      </section>

      <section className="topic-content">
        <div className="topic-body">
          <p className="topic-intro">
            Apesar de suas inúmeras vantagens, a energia eólica também enfrenta desafios
            significativos que precisam ser considerados e mitigados.
          </p>

          <div className="challenges-list">
            {challenges.map((c, i) => (
              <div key={c.title} className="challenge-card">
                <span className="challenge-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Soluções em desenvolvimento</h2>
          <p>
            A indústria eólica e centros de pesquisa ao redor do mundo trabalham ativamente
            para superar esses desafios:
          </p>
          <ul className="topic-list">
            <li><strong>Armazenamento de energia:</strong> baterias de larga escala e hidrogênio verde para compensar a intermitência.</li>
            <li><strong>Turbinas mais silenciosas:</strong> novos designs aerodinâmicos e revestimentos que reduzem o ruído das pás.</li>
            <li><strong>Sistemas anticolisão:</strong> radares e câmeras com inteligência artificial que detectam aves e param as turbinas temporariamente.</li>
            <li><strong>Reciclagem de pás:</strong> desenvolvimento de materiais compostos recicláveis e processos para reutilizar pás descartadas.</li>
            <li><strong>Turbinas flutuantes:</strong> tecnologia offshore que permite instalação em águas profundas, ampliando as áreas viáveis.</li>
          </ul>

          <div className="topic-highlight">
            <p>
              A energia eólica já é competitiva com fontes fósseis em muitas regiões.
              Com o avanço tecnológico e políticas adequadas, seus desafios tendem a diminuir,
              consolidando seu papel na matriz energética global.
            </p>
          </div>
        </div>
        <div className="topic-nav-bottom">
          <Link to="/vantagens" className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5m6-6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Anterior
          </Link>
          <Link to="/" className="btn-primary">
            Voltar ao início
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
