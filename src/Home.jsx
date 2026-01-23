import './App.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from './hooks/useScrollAnimation'
import Logo from './assets/inovaskill/LogoInova.svg'
import Icon1 from './assets/Footerpage1/Vector-3.svg'
import Icon2 from './assets/Footerpage1/Vector.svg'
import Icon3 from './assets/Footerpage1/Vector-1.svg'
import Icon4 from './assets/Footerpage1/Vector-2.svg'
import organizacoes from './assets/pages/organizacoesparceiras.png'
import footer from './assets/pages/footer.png'
import brainImg from './assets/imagens/brain.png'
import cabecaImg from './assets/imagens/cabeca.png'
import icon1 from './assets/icones/image 391.svg'
import icon2 from './assets/icones/image 392.svg'
import icon3 from './assets/icones/image 393.svg'
import icon4 from './assets/icones/image 394.svg'
import icon5 from './assets/icones/image 395.svg'
import predioIcon from './assets/icones/predio.svg'
import chapeuIcon from './assets/icones/chapeu.png'
import editalPdf from './assets/pdf/Edital_InnovaSkill2026.pdf'

export default function Home() {
  const heroRef = useScrollAnimation()
  const featuresRef = useScrollAnimation()
  const statsRef = useScrollAnimation()
  const datesRef = useScrollAnimation()
  const howItWorksRef = useScrollAnimation()
  const organizacoesRef = useScrollAnimation()
  const inscriptionRef = useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="site">
      <section className="hero animate-fade-in" ref={heroRef}>
        <div className="hero-left">
          <img src={Logo} alt="logo" className="logo-top" />
          <h1>
            Inovação Aberta que Conecta <span className="accent">Empresas</span>,
            <br /> <span className="accent">Universidades</span> e <span className="accent">Talentos</span>
          </h1>

          <p className="lead">
            Programa de inovação aberta que <strong>conecta empresas e estudantes para
            desenvolver soluções tecnológicas e de negócio </strong> voltadas a desafios reais do mercado.
          </p>

          <a className="cta" href="#inscription">QUERO FAZER PARTE</a>
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
              <div className="feature-sub">Atividades presenciais e on-line</div>
            </div>
          </div>

          <div className="feature-item">
            <img src={Icon2} alt="Duração de 6 meses" className="feature-icon" />
            <div>
              <div className="feature-title">Duração de 6 meses</div>
              <div className="feature-sub">De abril à </div>
              <div className="feature-sub">outubro de 2026</div>
            </div>
          </div>

          <div className="feature-item">
            <img src={Icon3} alt="Material personalizado" className="feature-icon" />
            <div>
              <div className="feature-title">Material personalizado</div>
              <div className="feature-sub">Material de apoio e</div>
              <div className="feature-sub">complementar gratuito</div>
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

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">30</div>
              <div className="stat-label">Empresas<br />Participantes</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">+350</div>
              <div className="stat-label">Participantes</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">+500</div>
              <div className="stat-label">Horas de<br />acompanhamento e<br />mentorias na última<br />edição</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">42</div>
              <div className="stat-label">Projetos<br />Inovadores</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">40%</div>
              <div className="stat-label">Alunos<br />contratados</div>
            </div>
          </div>
        </div>
      </section>

      <section className="important-dates animate-fade-in-up" ref={datesRef}>
        <div className="important-dates-container">
          <h2>Datas Importantes!</h2>
          <div className="dates-grid">
            <div className="date-item">
              <img src={icon1} alt="Período de inscrições" className="date-icon" />
              <div className="date-label">23/02 a 23/03</div>
              <div className="date-title">Período de inscrições</div>
            </div>

            <div className="date-item">
              <img src={icon2} alt="Período de análise" className="date-icon" />
              <div className="date-label">23/03 a 24/03</div>
              <div className="date-title">Período de análise das inscrições</div>
            </div>

            <div className="date-item">
              <img src={icon3} alt="Divulgação dos candidatos" className="date-icon" />
              <div className="date-label">25/03</div>
              <div className="date-title">Divulgação dos candidatos selecionados</div>
            </div>

            <div className="date-item">
              <img src={icon4} alt="Prazo final" className="date-icon" />
              <div className="date-label">27/03</div>
              <div className="date-title">Prazo final para confirmação do interesse no programa</div>
            </div>

            <div className="date-item">
              <img src={icon5} alt="Evento kick-off" className="date-icon" />
              <div className="date-label">28/03</div>
              <div className="date-title">Evento kick-off do programa</div>
            </div>
          </div>

          <a className="cta cta-dates" href={editalPdf} download="Edital_InnovaSkill2026.pdf">Clique aqui para acessar o edital!</a>
        </div>
      </section>

      <section className="how-it-works animate-fade-in-up" ref={howItWorksRef}>
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
              <li>Suporte do time de especialistas Mentt;</li>
              <li>Desenvolvimento de projetos de empreendedorismo ou inovação aberta;</li>
              <li>Mentoria durante o desenvolvimento do projeto;</li>
              <li>Material de apoio e complementar.</li>
            </ul>
            <a className="cta" href="#inscription">QUERO FAZER PARTE</a>
          </div>
        </div>
      </section>

      <section className='organizacoes animate-fade-in-up' ref={organizacoesRef}>
        <img src={organizacoes} alt="Organizações Parceiras" />
      </section>

      <section className="inscription animate-fade-in-up" ref={inscriptionRef} id="inscription">
        <div className="inscription-container">
          <h2>Inscrição para a Edição 2026</h2>
          <p className="inscription-subtitle">Escolha a baixo qual vai ser seu time durante essa jornada</p>

          <div className="inscription-cards">
            <Link to="/empresa" className="inscription-card card-empresa">
              <div className="card-label">Quero inscrever minha empresa</div>
              <h3>EMPRESA</h3>
              <img src={predioIcon} alt="Empresa" className="card-icon" />
              <span className="card-button">CLIQUE AQUI</span>
            </Link>

            <Link to="/aluno" className="inscription-card card-aluno">
              <div className="card-label">Quero me inscrever como</div>
              <h3>ALUNO</h3>
              <img src={chapeuIcon} alt="Aluno" className="card-icon" />
              <span className="card-button">CLIQUE AQUI</span>
            </Link>
          </div>
        </div>
      </section>

      <section className='footer'>
        <img src={footer} alt="Footer" />
      </section>

    </div>
  )
}
