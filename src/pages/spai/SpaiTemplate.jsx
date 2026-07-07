import '../inovaskill2026/Inovaskill2026.css'
import './SpaiTemplate.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cityData } from '../../constants/cityData'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import Logo from '../../assets/inovaskill/LogoInova.svg'
import Icon1 from '../../assets/Footerpage1/Vector-3.svg'
import Icon2 from '../../assets/Footerpage1/Vector.svg'
import Icon3 from '../../assets/Footerpage1/Vector-1.svg'
import Icon4 from '../../assets/Footerpage1/Vector-2.svg'
import organizacoes from '../../assets/pages/organizacoesparceiras.png'
import empresasParticipantes from '../../assets/pages/empresasquejaparticiparaminova2026.png'
import brainImg from '../../assets/imagens/brain.png'
import cabecaImg from '../../assets/imagens/cabeca.png'
import cronogramaAracatuba from '../../assets/Cronogramas/cronogramaAracatuba.png'
import icon1 from '../../assets/icones/image 391.svg'
import icon2 from '../../assets/icones/image 392.svg'
import icon3 from '../../assets/icones/image 393.svg'
import icon4 from '../../assets/icones/image 394.svg'
import icon5 from '../../assets/icones/image 395.svg'
import editalPdf from '../../assets/pdf/Edital_InnovaSkill2026.pdf'
import predioIcon from '../../assets/icones/predio.svg'
import chapeuIcon from '../../assets/icones/chapeu.png'

export default function SpaiTemplate({ city }) {
  const heroRef = useScrollAnimation()
  const featuresRef = useScrollAnimation()
  const statsRef = useScrollAnimation()
  const pastCompaniesRef = useScrollAnimation()
  const datesRef = useScrollAnimation()
  const howItWorksRef = useScrollAnimation()
  const organizacoesRef = useScrollAnimation()
  const inscriptionRef = useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div style={{ height: '80px' }}></div>
      <Header />
      <div className="site">
        <section className="hero animate-fade-in" ref={heroRef}>
          <div className="hero-left">

            <div className="logo-city-container">
              <img src={Logo} alt="logo" className="logo-top" />
              <span className="hyphen-separator-home">-</span>
              <span className="city-name">
                {cityData[city] && (
                  <img
                    src={cityData[city].logo}
                    alt={cityData[city].organizer}
                    className={`organizer-logo-hero ${city === 'Bauru' ? 'bauru-logo' : ''}`}
                    style={{ height: cityData[city].logoHeight || '35px' }}
                  />
                )}
              </span>
            </div>
            <h1 className='h1-title'>
              Inovação Aberta que Conecta <span className="accent">Empresas</span>,
              <br /> <span className="accent">Academia</span> e <span className="accent">Talentos</span>
            </h1>

            <p className="lead">
              Programa de inovação aberta que <strong>conecta empresas, academias e talentos para
                desenvolver soluções tecnológicas e de negócio </strong> voltadas a desafios reais do mercado.
            </p>

            <a className="cta" href="#history">Saiba mais</a>
          </div>

          <div className="hero-right">
            <div className="video-frame">
              <img src={cabecaImg} alt="Inovação" />
            </div>
          </div>
        </section>

        <section className="features animate-fade-in-up" ref={featuresRef} aria-label="destaques">
          <div className="features-grid">
            <div className="feature-item">
              <img src={Icon1} alt="Evento híbrido" className="feature-icon" />
              <div>
                <div className="feature-title">Evento híbrido</div>
              </div>
            </div>

            <div className="feature-item">
              <img src={Icon2} alt="Duração de 6 meses" className="feature-icon" />
              <div>
                <div className="feature-title">Duração de 6 meses</div>
              </div>
            </div>

            <div className="feature-item">
              <img src={Icon3} alt="Material personalizado" className="feature-icon" />
              <div>
                <div className="feature-title">Material personalizado</div>
              </div>
            </div>

            <div className="feature-item-gratis">
              <img src={Icon4} alt="Gratuito" className="feature-icon" />
              <div>
                <div className="feature-title">100% gratuito</div>
                <div className="feature-title">para alunos</div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats animate-fade-in-up" ref={statsRef}>
          <div className="stats-container">
            <p className="stats-intro">
              <strong>Programa de inovação aberta que conecta empresas e estudantes para <span className="accent">desenvolver
                soluções tecnológicas e de negócio</span> voltadas a <span className="accent">desafios reais do mercado</span></strong>
            </p>

            {/*
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">30</div>
                <div className="stat-label">Empresas<br />Já participaram</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">+350</div>
                <div className="stat-label">Participantes impactados</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">+500</div>
                <div className="stat-label">Horas de mentorias<br />e acompanhamentos<br />realizadas</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">42</div>
                <div className="stat-label">Projetos Inovadores<br />desenvolvidos</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">40%</div>
                <div className="stat-label">Dos alunos participantes<br />já contratados</div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="important-dates animate-fade-in-up" ref={datesRef}>
          <div className="important-dates-container">
            {city === 'Araçatuba' ? (
              <>
                <h2>Datas Importantes</h2>
                <div className="cronograma-container">
                  <img src={cronogramaAracatuba} alt="Cronograma Araçatuba" className="cronograma-image" />
                </div>
                <a className="cta cta-dates" href={editalPdf} download="Edital_InnovaSkill2026.pdf">Clique aqui para acessar o edital</a>
              </>
            ) : (
              <>
                <h2>Datas Importantes! (em breve)</h2>
                <a className="cta cta-dates" href={editalPdf} download="Edital_InnovaSkill2026.pdf">Clique aqui para acessar o edital! (em breve)</a>
              </>
            )}
          </div>
        </section>

        <section className="how-it-works animate-fade-in-up" ref={howItWorksRef} id="history">
          <div className="how-it-works-container">
            <div className="how-it-works-image">
              <img src={brainImg} alt="Como vai funcionar" />
            </div>
            <div className="how-it-works-content">
              <h2>Como vai Funcionar:</h2>
              <ul className="how-it-works-list">
                <li>Duração de 6 meses;</li>
                <li>Conteúdos dinâmicos;</li>
                <li>Webinars com cases de sucesso;</li>
                <li>Atividades práticas;</li>
                <li>Suporte especializado durante todo o programa;</li>
                <li>Desenvolvimento de projetos de empreendedorismo ou inovação aberta;</li>
                <li>Mentoria durante o desenvolvimento do projeto;</li>
                <li>Material de apoio e complementar.</li>
              </ul>
              {/* <a className="cta" href="#inscription">QUERO FAZER PARTE</a> */}
              <a className="cta" href="#inscription">Saiba mais</a>
            </div>
          </div>
        </section>

        {/* <section className='organizacoes animate-fade-in-up' ref={organizacoesRef}>
          <div className="organizacoes-container">
            <h2 className="organizacoes-title">Parceiros do Programa (em breve)</h2> */}
        {/* <img src={organizacoes} alt="Organizações Parceiras" className="organizacoes-image" /> */}
        {/* </div>
        </section> */}

        <section className="inscription animate-fade-in-up" ref={inscriptionRef} id="inscription">
          <div className="inscription-container">
            <h2>Entenda um pouco mais sobre essa iniciativa ({city})</h2>
            <p className="inscription-subtitle">Saiba mais sobre a estrutura dos times do programa</p>

            <div className="inscription-cards">
              <Link to={`/spai-${city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/empresa`} className="inscription-card card-empresa">
                <h3>EMPRESA</h3>
                <img src={predioIcon} alt="Empresa" className="card-icon" />
                <span className="card-button">CLIQUE AQUI</span>
              </Link>

              <Link to={`/spai-${city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/aluno`} className="inscription-card card-aluno">
                <h3>ALUNO</h3>
                <img src={chapeuIcon} alt="Aluno" className="card-icon" />
                <span className="card-button">CLIQUE AQUI</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer
          organizerLogo={cityData[city]?.logo}
        />
      </div >
    </>
  )
}
