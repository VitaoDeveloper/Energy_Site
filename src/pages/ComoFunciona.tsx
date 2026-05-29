import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function ComoFunciona() {
  return (
    <>
      <section className="topic-hero">
        <div className="topic-hero-bg" />
        <Link to="/" className="topic-back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5m6-6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voltar
        </Link>
        <div className="topic-hero-content">
          <span className="badge badge-green">Tópico 1</span>
          <h1>Como funciona a<br /><span className="gradient-text">energia eólica</span></h1>
        </div>
      </section>

      <section className="topic-content">
        <div className="topic-body">
          <h2>O princípio básico</h2>
          <p>
            A energia eólica aproveita a energia cinética dos ventos para gerar eletricidade.
            O processo começa quando o vento move as pás da turbina, que estão conectadas a
            um rotor. O rotor gira um eixo que aciona um gerador elétrico, produzindo energia.
          </p>

          <h2>Etapa a etapa</h2>
          <div className="steps-list">
            {[
              {
                num: '01',
                title: 'Vento move as pás',
                desc: 'O vento incidente faz com que as pás da turbina girem. As pás são projetadas aerodinamicamente para maximizar a captação de energia mesmo com ventos fracos.',
              },
              {
                num: '02',
                title: 'Rotor aciona o eixo',
                desc: 'As pás estão fixadas em um rotor central. A rotação do rotor é transferida para um eixo de baixa velocidade conectado a uma caixa de engrenagens.',
              },
              {
                num: '03',
                title: 'Multiplicação de velocidade',
                desc: 'A caixa de engrenagens (ou gearbox) aumenta a velocidade de rotação do eixo de aproximadamente 30 RPM para até 1.500 RPM, ideal para o gerador.',
              },
              {
                num: '04',
                title: 'Geração de eletricidade',
                desc: 'O eixo de alta velocidade aciona um gerador elétrico, que converte a energia mecânica em energia elétrica por meio de indução eletromagnética.',
              },
              {
                num: '05',
                title: 'Distribuição à rede',
                desc: 'A eletricidade gerada passa por transformadores que elevam a tensão, sendo então injetada na rede elétrica para distribuição a residências e indústrias.',
              },
            ].map((step) => (
              <div key={step.num} className="step-card">
                <span className="step-num">{step.num}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Componentes de uma turbina</h2>
          <p>
            Uma turbina eólica moderna é composta por diversos componentes que trabalham em conjunto:
          </p>
          <ul className="topic-list">
            <li><strong>Pás (blades):</strong> geralmente três, feitas de materiais compostos como fibra de vidro ou carbono, com até 80 metros de comprimento cada.</li>
            <li><strong>Nacele (nacelle):</strong> compartimento no topo da torre que abriga o gerador, a caixa de engrenagens e os sistemas de controle.</li>
            <li><strong>Torre (tower):</strong> estrutura que eleva a nacele e as pás a alturas que variam de 60 a 120 metros, onde os ventos são mais fortes e constantes.</li>
            <li><strong>Anemômetro:</strong> sensor que mede a velocidade do vento e informa o sistema de controle para orientar a turbina.</li>
            <li><strong>Sistema de controle:</strong> computador que gira a nacele na direção do vento e ajusta o ângulo das pás para otimizar a geração.</li>
          </ul>
        </div>
        <div className="topic-nav-bottom">
          <Link to="/" className="btn-outline">Início</Link>
          <Link to="/tipos" className="btn-primary">
            Próximo: Tipos de turbinas
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
