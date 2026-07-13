import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import './pages/inovaskill2026/Inovaskill2026.css'
import Logo from './assets/inovaskill/LogoInova.svg'
import cabecaImg from './assets/imagens/cabeca.png'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import useScrollAnimation from './hooks/useScrollAnimation'
import Icon1 from './assets/Footerpage1/Vector-3Branco.svg'
import Icon2 from './assets/Footerpage1/VectorBranco.svg'
import Icon3 from './assets/Footerpage1/Vector-1Branco.svg'
import Icon4 from './assets/Footerpage1/Vector-2Branco.svg'
import organizacoes from './assets/pages/organizacoesparceiras.png'
import empresasParticipantes from './assets/pages/empresasquejaparticiparaminova2026.png'
import brainImg from './assets/imagens/brain.png'
import img2023 from './assets/imagens/2023.jpeg'
import img2024 from './assets/imagens/2024.jpg'
import img2025 from './assets/imagens/2025.jpg'
// import citapLogo from './assets/inovaskill/citap.png' (Now in Footer component)

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useScrollAnimation()
  const featuresRef = useScrollAnimation()
  const statsRef = useScrollAnimation()
  const pastCompaniesRef = useScrollAnimation()
  const howItWorksRef = useScrollAnimation()
  const organizacoesRef = useScrollAnimation()
  const objectivesRef = useScrollAnimation()
  const editionsRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <div className="home-wrapper">
      <Header />
      <br />
      <div className="site-content">
        {/* <section className="hero animate-fade-in" ref={heroRef}>
          <div className="hero-left">
            <h1>
              Inovação Aberta que Conecta <span className="accent">Empresas</span>,
              <br /> <span className="accent">Universidades</span> e <span className="accent">Talentos</span>
            </h1>
            <p className="lead">
              Programa de inovação aberta que <strong>conecta empresas, academias e talentos para
                desenvolver soluções tecnológicas e de negócio </strong> voltadas a desafios reais do mercado.
            </p>
            <button
              className="cta"
              onClick={() => editionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba mais
            </button>
          </div>
          <div className="hero-right">
            <div className="video-frame">
              <img src={cabecaImg} alt="Inovação" />
            </div>
          </div>
        </section> */}

        <section
          className="hero-section"
          ref={heroRef}
          style={{
            backgroundImage: `linear-gradient(rgba(1, 6, 36, 0.8), rgba(1, 6, 36, 0.8)), url(${img2025})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="hero-content animate-fade-in-up">
            <h1 className="hero-title-modern">
              <br />
              Inovação Aberta que<br />
              Conecta <span className="text-gradient">Empresas,</span><br />
              <span className="text-gradient">Universidades e Talentos</span>
            </h1>

            <p className="hero-subtitle">O Programa InovaSkill habilita empresas e pesquisadores a transformarem desafios de negócios e pesquisa científica em soluções tecnológicas inovadoras.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => editionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça as edições anteriores
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="features-modern" ref={featuresRef}>
          <div className="features-grid-modern animate-fade-in-up">
            <div className="feature-card">
              <div className="feature-icon-wrapper blue-glow">
                <img src={Icon1} alt="Programa híbrido" />
              </div>
              <h3>InovaSkill para Empresas</h3>
              <p>Capacitação de empresas em intraempreendedorismo e metodologias de inovação, apoiando o desenvolvimento de projetos tecnológicos com potencial de geração de spin-offs.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper cyan-glow">
                <img src={Icon3} alt="Material personalizado" />
              </div>
              <h3>InovaSkill para Pesquisadores</h3>
              <p>Instrumentalização de metodologias de  inovação a partir de pesquisas aplicadas, fomentando e apoiando  projetos com potencial de geração de empreendimentos de base científica e tecnológica (deep techs).</p>
            </div>

            {/* <div className="feature-card highlight-card">
              <div className="feature-icon-wrapper green-glow">
                <img src={Icon4} alt="Gratuito" />
              </div>
              <h3>100% Gratuito</h3>
              <p>Acesso totalmente livre para os alunos</p>
            </div> */}
          </div>
        </section>

        <section className="stats-modern" ref={statsRef}>
          <div className="stats-container-modern animate-fade-in-up">
            <div className="glass-panel">
              <div className="stat-box">
                <h4 className="counter">+30</h4>
                <p>Empresas já participaram</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-box">
                <h4 className="counter">+350</h4>
                <p>Participantes Impactados</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-box">
                <h4 className="counter">+500</h4>
                <p>Horas de mentoria e tutoria realizadas</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-box">
                <h4 className="counter">40%</h4>
                <p>Dos alunos participantes já contratados</p>
              </div>
            </div>
          </div>
        </section>

        <section className="objectives-section animate-fade-in-up" ref={objectivesRef}>
          <div className="section-header">
            <h2>Objetivos do Programa</h2>
          </div>
          <div className="objectives-grid">
            <div className="objective-card">
              <div className="objective-card-header">
                <div className="objective-icon-box blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h4>Spinoffs</h4>
              </div>
              <p>Gerar Spinoffs acadêmicas e corporativas.</p>
            </div>

            <div className="objective-card">
              <div className="objective-card-header">
                <div className="objective-icon-box cyan">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </div>
                <h4>Encurtar Gap Academia/Mercado</h4>
              </div>
              <p>Encurtar o gap entre academia e mercado</p>
            </div>

            <div className="objective-card">
              <div className="objective-card-header">
                <div className="objective-icon-box purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  </svg>
                </div>
                <h4>Cultura de Inovação</h4>
              </div>
              <p>Estimular uma cultura de inovação dentro das empresas participantes</p>
            </div>

            <div className="objective-card">
              <div className="objective-card-header">
                <div className="objective-icon-box green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h4>Desenvolvimento</h4>
              </div>
              <p>Desenvolver competências em inovação e intraempreendedorismo</p>
            </div>

            <div className="objective-card">
              <div className="objective-card-header">
                <div className="objective-icon-box cyan">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h4>Projetos Inovadores</h4>
              </div>
              <p>Apoio na ideação, concepção, prototipação e desenvolvimento de projetos de inovação</p>
            </div>
          </div>
        </section>

        <section className="partners-section animate-fade-in-up" ref={pastCompaniesRef}>
          <div className="section-header">
            <h2>Ecossistema de Inovação</h2>
            <p>O Programa InovaSkill conecta atores de hélice quádrupla no apoio à inovação</p>
          </div>

          <div className="partners-track">
            <div className="partner-card" ref={organizacoesRef}>
              <h3 className="partner-title">Organizações Parceiras</h3>
              <img src={organizacoes} alt="Organizações Parceiras" />
            </div>
          </div>
        </section>

        <section className="info-section animate-fade-in-up" ref={howItWorksRef}>
          <div className="info-layout">
            <div className="info-image-wrapper glass-card floating">
              <img src={brainImg} alt="Como vai funcionar" className="cover-img" />
            </div>
            <div className="info-text">
              <h2>Como Funciona o Programa</h2>
              <p className="lead-text">O programa é estruturado para maximizar sua imersão e aprendizado.</p>
              <ul className="modern-list">
                <li><span className="check">✓</span> <span>Conteúdos dinâmicos e atualizados</span></li>
                <li><span className="check">✓</span> <span>Webinars exclusivos com cases reais</span></li>
                <li><span className="check">✓</span> <span>Atividades focadas na prática do mercado</span></li>
                <li><span className="check">✓</span> <span>Suporte contínuo de especialistas</span></li>
                <li><span className="check">✓</span> <span>Mentoria direta durante os projetos</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="editions-section animate-fade-in-up" ref={editionsRef}>
          <div className="section-header">
            <h2>Edições Anteriores</h2>
            <p>Edições que transformaram o ecossistema de inovação da região da Alta Paulista</p>
          </div>

          <div className="editions-timeline">

            {/* 2025 */}
            <div className="edition-row">
              <div className="edition-year-col">
                <div className="edition-year-badge blue">2025</div>
                <div className="edition-line"></div>
              </div>
              <div className="edition-body glow-card-blue">
                <div className="edition-header-row">
                  <div>
                    <span className="edition-tag">3ª Edição</span>
                    <h3>Bolsas, Empregabilidade e Apoio do Estado</h3>
                  </div>
                  <a href="https://fsnt.org.br/2025/12/programa-inovaskill-2025-garante-bolsas-e-contratacao-para-alunos-da-fatec-pompeia/" target="_blank" rel="noreferrer" className="edition-link-btn">Ver matéria →</a>
                </div>
                <img src={img2025} alt="InovaSkill 2025" className="edition-img" />
                <p className="edition-description">
                  Em parceria com a <strong>Adipa</strong> e o <strong>Programa SP Produz</strong> da Secretaria de Desenvolvimento Econômico de São Paulo, a terceira edição subsidiou a participação de empresas e concedeu <strong>bolsas de pesquisa e inovação</strong> para alunos dos cursos de Tecnologia em Sistemas Inteligentes, Big Data no Agronegócio e Mecanização em Agricultura de Precisão.
                </p>
                <div className="edition-stats-row">
                  <div className="edition-stat">
                    <span className="e-num">+20</span>
                    <span className="e-label">Empresas participantes</span>
                  </div>
                  <div className="edition-stat">
                    <span className="e-num">+40</span>
                    <span className="e-label">Alunos participantes</span>
                  </div>
                  <div className="edition-stat">
                    <span className="e-num">50%</span>
                    <span className="e-label">Dos alunos já contratados</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2024 */}
            <div className="edition-row">
              <div className="edition-year-col">
                <div className="edition-year-badge cyan">2024</div>
                <div className="edition-line"></div>
              </div>
              <div className="edition-body glow-card-cyan">
                <div className="edition-header-row">
                  <div>
                    <span className="edition-tag cyan-tag">2ª Edição</span>
                    <h3>Escalando a Inovação Aberta</h3>
                  </div>
                  <a href="https://fsnt.org.br/2024/04/__trashed-2/" target="_blank" rel="noreferrer" className="edition-link-btn cyan-btn">Ver matéria →</a>
                </div>
                <img src={img2024} alt="InovaSkill 2024" className="edition-img" />
                <p className="edition-description">
                  A segunda edição trouxe o conceito de <strong>ambidestria organizacional</strong> com palestras do CEO da Bluefields Aceleradora, Paulo Humaitá, do Parque Tecnológico de São José dos Campos. Os times foram orientados a identificar oportunidades e desenvolver soluções disruptivas, culminando no <strong>InovaSkill Pitch Day</strong> diante de investidores e grandes empresas.
                </p>
                <div className="edition-stats-row">
                  <div className="edition-stat">
                    <span className="e-num">+10</span>
                    <span className="e-label">Empresas participantes</span>
                  </div>
                  <div className="edition-stat">
                    <span className="e-num">+40</span>
                    <span className="e-label">Alunos participantes</span>
                  </div>
                  <div className="edition-stat">
                    <span className="e-num">+100</span>
                    <span className="e-label">Participantes no Pitch Day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="edition-row last-row">
              <div className="edition-year-col">
                <div className="edition-year-badge purple">2023</div>
              </div>
              <div className="edition-body glow-card-purple">
                <div className="edition-header-row">
                  <div>
                    <span className="edition-tag purple-tag">1ª Edição</span>
                    <h3>A Origem do Impacto</h3>
                  </div>
                  <a href="https://fsnt.org.br/2023/04/primeiro-encontro-do-programa-inova-skill-2023/" target="_blank" rel="noreferrer" className="edition-link-btn purple-btn">Ver matéria →</a>
                </div>
                <img src={img2023} alt="InovaSkill 2023" className="edition-img" />
                <p className="edition-description">
                  O programa nasceu com o objetivo de desenvolver <strong>competências em empreendedorismo e inovação</strong> nos alunos do ecossistema FSNT — Fatec, Senai e Colégio Shunji Nishimura — em parceria com o <strong>Grupo Jacto</strong>. O primeiro encontro trouxe Vitor Ferreira, head de inovação do Startup Leiria/Portugal, com um conteúdo exclusivo sobre Criatividade e Inovação.
                </p>
                <div className="edition-stats-row">
                  <div className="edition-stat">
                    <span className="e-num">3</span>
                    <span className="e-label">Instituições acadêmicas</span>
                  </div>
                  <div className="edition-stat">
                    <span className="e-num">2023</span>
                    <span className="e-label">Primeira edição do programa</span>
                  </div>
                  <div className="edition-stat">
                    <span className="e-num">100%</span>
                    <span className="e-label">Gratuito para Alunos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer showCitap={true} />
    </div>
  )
}
