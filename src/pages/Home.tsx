import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Features from '../components/Features'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const stats = [
  { value: '1.000', suffix: 'GW', label: 'Capacidade global instalada' },
  { value: '1,6', suffix: 'bi', label: 'Toneladas de CO₂ evitadas/ano' },
  { value: '5', suffix: 'M', label: 'Empregos gerados no setor' },
  { value: '20', suffix: '%', label: 'Participação na matriz global' },
]

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 3v3m0 0a4 4 0 0 1 4 4m-4-4a4 4 0 0 0-4 4m4 0v12" strokeLinecap="round"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Como funciona',
    desc: 'O vento gira as pás da turbina, que acionam um gerador. A energia cinética é convertida em eletricidade sem emissão de poluentes.',
    to: '/how-works',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tipos de turbinas',
    desc: 'Turbinas onshore (em terra) e offshore (no mar). As offshore capturam ventos mais fortes e constantes, com maior capacidade de geração.',
    to: '/types',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Vantagens',
    desc: 'Fonte inesgotável, não polui, baixo custo operacional, gera empregos verdes e reduz dependência de combustíveis fósseis.',
    to: '/benefits',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8m-4-4v4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Desafios',
    desc: 'Intermitência do vento, impacto visual e sonoro, necessidade de áreas extensas e investimento inicial elevado.',
    to: '/challenges',
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        badge="Energia renovável"
        title={<>O que é energia<br /><span className="gradient-text">eólica?</span></>}
        subtitle="Energia eólica é a eletricidade gerada a partir da força dos ventos. Por meio de aerogeradores (turbinas eólicas), a energia cinética do vento é convertida em energia elétrica limpa e renovável."
        cta={
          <>
            <a href="#topicos" className="btn-primary">Entender como funciona</a>
            <a href="#dados" className="btn-outline">Ver dados mundiais</a>
          </>
        }
      />

      <section className="hero-logos">
        <p>Presente em mais de 90 países</p>
        <div className="logos-row">
          {['China', 'EUA', 'Alemanha', 'Índia', 'Brasil'].map((name) => (
            <span key={name} className="logo-chip">{name}</span>
          ))}
        </div>
      </section>

      <Stats
        badge="Impacto global"
        title="Energia eólica no mundo em números"
        stats={stats}
      />

      <Features
        badge="Tópicos"
        title="Entenda tudo sobre energia eólica"
        features={features}
      />

      <CTA
        badge="Aprofunde-se"
        title="A energia do futuro sopra nos ventos"
        subtitle="A energia eólica é uma das fontes que mais cresce no mundo. Quer saber mais sobre como ela funciona na prática?"
        button={
          <a href="https://pt.wikipedia.org/wiki/Energia_e%C3%B3lica" target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
            Ler artigo completo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        }
      />

      <Footer />
    </>
  )
}
