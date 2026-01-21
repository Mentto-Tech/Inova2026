import { useEffect } from 'react'
import footer from '../assets/pages/footer.png'
import Logo from '../assets/inovaskill/LogoInova.svg'
import trilhas2 from '../assets/pages/trilhas2.png'
import '../animations.css'
import './Empresa.css'
import useScrollAnimation from '../hooks/useScrollAnimation'
import imagemCentro from '../assets/imagens/imagemCentro.png'

export default function Empresa() {
  const heroRef = useScrollAnimation()
  const inscriptionRef = useScrollAnimation()
  const trilhasRef = useScrollAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="empresa-hero animate-fade-in" ref={heroRef}>
        <div className="empresa-hero-left">
          <img src={Logo} alt="logo" className="logo-top" />
          <h1>
            Eleve a <span className="accent">Inovação</span> e
            <br /> <span className="accent">Competitividade</span> da
            <br /> Sua Empresa
          </h1>

          <p className="lead">
            Prepare sua equipe para <strong>pensar e agir de forma mais empreendedora, aumentando a capacidade
            de inovação</strong> no dia a dia do negócio.
          </p>

          <p className="lead">
            Com aplicação prática em transformação digital, usando Data Analytics e IA Generativa para apoiar
            decisões e gerar resultado real.
          </p>

          <a className="cta" href="/empresa#inscription">QUERO INSCREVER MINHA EMPRESA</a>
        </div>

        <div className="empresa-hero-right">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/xasiaxZXrfw?si=4f-yYaqOhywpvhee" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      <section className="inovacao-aberta animate-fade-in-up">
        <div className="inovacao-container">
          <h2>Programa de Inovação Aberta</h2>
          <p className="inovacao-subtitle">Uma jornada que <strong>conecta problemas reais a soluções tecnológicas validadas.</strong></p>

          <img src={imagemCentro} alt="Jornada de Inovação" className="inovacao-image" />

          <p className="inovacao-text">
            O InovaSkill conduz os participantes da <strong>identificação do problema até a validação da solução</strong>, transformando ideias em MVPs testados em contextos reais. Todo o cronograma representa essa jornada, com atividades, mentorias e entregas focadas em <strong>validar o que realmente gera valor.</strong>
          </p>

          <p className="inovacao-text">
            A partir daí, os projetos podem <strong>seguir novos caminhos</strong>, como aceleração, institucionalização, investimento ou outras trilhas de crescimento. Essas etapas são <strong>possibilidades futuras, fora do escopo principal do InovaSkill.</strong>
          </p>
        </div>
      </section>

      <section className='datasbolsatrilha animate-fade-in-up' ref={trilhasRef}>
        <img src={trilhas2} alt="Trilhas" />
      </section>

      <section className="empresa-inscription animate-fade-in-up" ref={inscriptionRef} id="inscription">
        <div className="empresa-inscription-container">
          <h2>Inscreva sua Empresa Abaixo:</h2>
          <p className="inscription-subtitle">Todos os campos são obrigatórios</p>

          <form className="empresa-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Seu nome completo:</label>
                <input type="text" id="nome" name="nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail para contato:</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefone">Telefone/WhatsApp:</label>
                <input type="tel" id="telefone" name="telefone" required />
              </div>
              <div className="form-group">
                <label htmlFor="cargo">Cargo:</label>
                <input type="text" id="cargo" name="cargo" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="empresa">Nome da empresa:</label>
                <input type="text" id="empresa" name="empresa" required />
              </div>
              <div className="form-group">
                <label htmlFor="ramo">Ramo de atuação da empresa:</label>
                <input type="text" id="ramo" name="ramo" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cnpj">CNPJ:</label>
                <input type="text" id="cnpj" name="cnpj" required />
              </div>
              <div className="form-group">
                <label htmlFor="porte">Porte da empresa:</label>
                <select id="porte" name="porte" required>
                  <option value="">Selecione</option>
                  <option value="micro">Microempresa</option>
                  <option value="pequena">Pequena Empresa</option>
                  <option value="media">Média Empresa</option>
                  <option value="grande">Grande Empresa</option>
                </select>
              </div>
            </div>

            <div className="form-row form-row-single">
              <div className="form-group">
                <label htmlFor="associada">Associada a:</label>
                <select id="associada" name="associada" required>
                  <option value="">Selecione</option>
                  <option value="CIESP">CIESP</option>
                  <option value="ADIPA">ADIPA</option>
                  <option value="Nenhum">Nenhum</option>
                </select>
              </div>
            </div>

            <div className="form-checkbox-empresa">
              <input type="checkbox" id="termos" name="termos" required />
              <label htmlFor="termos">
                Declaro que li e aceito os <a href="#" className="link-termos">Termos de Uso e Políticas de Privacidade</a>
              </label>
            </div>

            <button type="submit" className="form-submit">ENVIAR</button>
          </form>
        </div>
      </section>

      <section className='footer'>
        <img src={footer} alt="footer" />
      </section>
    </>
  )
}