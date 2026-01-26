import { useEffect, useState } from 'react'
import '../App.css'
import '../animations.css'
import './Aluno.css'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { subscribeAluno } from '../api/action_aluno'
import bolsa from '../assets/imagens/bolsa.png'
import trilhas2 from '../assets/pages/trilhas2.png'
import Logo from '../assets/inovaskill/LogoInova.svg'
import icon1 from '../assets/icones/image 391.svg'
import icon2 from '../assets/icones/image 392.svg'
import icon3 from '../assets/icones/image 393.svg'
import icon4 from '../assets/icones/image 394.svg'
import icon5 from '../assets/icones/image 395.svg'
import footer from '../assets/pages/footer.png'

const digitsOnly = (value = '') => value.replace(/\D+/g, '')

const isValidEmail = (email = '') => /.+@.+\..+/.test(email.trim().toLowerCase())

const isValidPhone = (phone = '') => {
  const digits = digitsOnly(phone)
  return digits.length >= 10 && digits.length <= 12
}

const isOnlyDigits = (value = '') => /^\d+$/.test(value.trim())

const isValidCPF = (value = '') => {
  const cpf = digitsOnly(value)
  if (cpf.length !== 11) return false
  if (/^(\d)\1+$/.test(cpf)) return false

  const calcDigit = (base, factor) => {
    let sum = 0
    for (let i = 0; i < base.length; i += 1) {
      sum += Number(base.charAt(i)) * (factor - i)
    }
    const result = (sum * 10) % 11
    return result === 10 ? 0 : result
  }

  const digit1 = calcDigit(cpf.slice(0, 9), 10)
  const digit2 = calcDigit(cpf.slice(0, 10), 11)
  return cpf === cpf.slice(0, 9) + String(digit1) + String(digit2)
}

const sanitizeAluno = (data) => ({
  nome: data.nome.trim(),
  email: data.email.trim(),
  telefone: data.telefone.trim(),
  instituicao: data.instituicao.trim(),
  curso: data.curso.trim(),
  termo: data.termo.trim(),
  cidade: data.cidade.trim(),
  cpf: data.cpf.trim(),
})


export default function Aluno() {
  const heroRef = useScrollAnimation()
  const datesRef = useScrollAnimation()
  const bolsaRef = useScrollAnimation()
  const trilhasRef = useScrollAnimation()
  const inscriptionRef = useScrollAnimation()

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    instituicao: '',
    curso: '',
    termo: '',
    cidade: '',
    cpf: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    const sanitized = sanitizeAluno(formData)

    if (isOnlyDigits(sanitized.nome)) {
      setError('Nome não pode conter apenas números.')
      setLoading(false)
      return
    }

    if (isOnlyDigits(sanitized.instituicao)) {
      setError('Instituição não pode conter apenas números.')
      setLoading(false)
      return
    }

    if (isOnlyDigits(sanitized.curso)) {
      setError('Curso não pode conter apenas números.')
      setLoading(false)
      return
    }

    if (!isValidEmail(sanitized.email)) {
      setError('Informe um e-mail válido.')
      setLoading(false)
      return
    }

    if (!isValidPhone(sanitized.telefone)) {
      setError('Informe um telefone/WhatsApp com DDD.')
      setLoading(false)
      return
    }

    if (!isValidCPF(sanitized.cpf)) {
      setError('Informe um CPF válido (11 dígitos).')
      setLoading(false)
      return
    }

    try {
      await subscribeAluno(sanitized)
      setSuccess(true)
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        instituicao: '',
        curso: '',
        termo: '',
        cidade: '',
        cpf: '',
      })
    } catch (err) {
      setError(err.message || 'Ocorreu um erro ao enviar seus dados. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="site">
      <section className="aluno-hero animate-fade-in" ref={heroRef}>
        <div className="aluno-hero-left">
          <img src={Logo} alt="logo" className="logo-top" />
          <div className="aluno-video-mobile">
            <div className="aluno-video-frame">
              <iframe
                src="https://www.youtube.com/embed/KS-ayjXlnbM?si=CEg5IVnVwm3496aT"
                title="InovaSkill 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <h1>
            Torne-se um <span className="accent">Agente
            <br /> Protagonista</span> de
            <br /> Transformação!
          </h1>

          <p className="lead">
            Desenvolva competências em <strong>empreendedorismo
            e amplie seu potencial de inovação, na prática!</strong>
          </p>

          <p className="lead">
            Com aplicação prática em transformação digital, usando Data Analytics e IA Generativa para apoiar
            decisões e gerar resultado real.
          </p>

          <a className="cta" href="#inscription">QUERO ME INSCREVER</a>
        </div>

        <div className="aluno-hero-right">
          <div className="aluno-video-frame">
            <iframe
              src="https://www.youtube.com/embed/KS-ayjXlnbM?si=CEg5IVnVwm3496aT"
              title="InovaSkill 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
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

          <a className="cta cta-dates" href="https://exemplo.com/edital" target="_blank" rel="noopener noreferrer">Clique aqui para acessar o edital!</a>
        </div>
      </section>


      <section className="aluno-bolsa animate-fade-in-up" ref={bolsaRef}>
        <div className="aluno-bolsa-container">
          <h2>Bolsa Pesquisa para Alunos</h2>
          <p className="aluno-bolsa-intro">
            Os participantes do <strong>InovaSkill 2026</strong> terão a oportunidade de concorrer a uma <strong>bolsa pesquisa de R$600,00</strong> por mês nos <strong>quatro meses finais do programa.</strong>
          </p>

          <div className="aluno-bolsa-content">
            <div className="aluno-bolsa-left">
              <img src={bolsa} alt="Bolsa Pesquisa" />
            </div>

            <div className="aluno-bolsa-right">
              <h3>Processo de seleção da bolsa de pesquisa:</h3>
              <p>A bolsa será concedida aos alunos que demonstrarem <strong>bom engajamento</strong> ao longo do programa. Isso significa:</p>

              <ul className="aluno-bolsa-list">
                <br/>
                <li><strong>Participação ativa</strong> nos encontros presenciais e online;</li>
                <li><strong>Contribuição efetiva com seu squad</strong> e no desenvolvimento do projeto;</li>
                <li><strong>Comprometimento com as atividades e entregas</strong> do programa.</li>
              </ul>
            </div>
          </div>

          <p className="aluno-bolsa-footer">
            O objetivo da bolsa é apoiar os alunos que realmente se dedicam ao <strong>aprendizado prático e colaborativo dentro do inovaSkill.</strong> Aproveite essa oportunidade para se destacar e fazer parte de uma jornada transformadora!
          </p>
        </div>
      </section>

      <section className='datasbolsatrilha animate-fade-in-up' ref={trilhasRef}>
        <img src={trilhas2} alt="Trilhas" />
      </section>

      <section className="aluno-inscription animate-fade-in-up" ref={inscriptionRef} id="inscription">
        <div className="aluno-inscription-container">
          <h2>Faça sua Pré-Inscrição Abaixo:</h2>
          <p className="inscription-subtitle">Todos os campos são obrigatórios</p>

          <form className="aluno-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Seu nome completo:</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  value={formData.nome}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail para contato:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefone">Telefone/WhatsApp:</label>
                <input 
                  type="tel" 
                  id="telefone" 
                  name="telefone" 
                  value={formData.telefone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="instituicao">Instituição de ensino:</label>
                <input 
                  type="text" 
                  id="instituicao" 
                  name="instituicao" 
                  value={formData.instituicao}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="curso">Curso:</label>
                <input 
                  type="text" 
                  id="curso" 
                  name="curso" 
                  value={formData.curso}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="termo">Termo:</label>
                <input 
                  type="text" 
                  id="termo" 
                  name="termo" 
                  value={formData.termo}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cidade">Cidade:</label>
                <input 
                  type="text" 
                  id="cidade" 
                  name="cidade" 
                  value={formData.cidade}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="cpf">CPF:</label>
                <input 
                  type="text" 
                  id="cpf" 
                  name="cpf" 
                  placeholder="000.000.000-00" 
                  value={formData.cpf}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="cpf-info">
              <h4>Por que pedimos seu CPF?</h4>
              <p>O CPF é solicitado exclusivamente para fins de identificação do participante, formalização da participação no programa e cumprimento de exigências institucionais relacionadas à bolsa e/ou certificação. Os dados serão tratados conforme a Lei Geral de Proteção de Dados (LGPD) e não serão utilizados para fins comerciais.</p>
            </div>

            <div className="form-checkbox">
              <input type="checkbox" id="uso-dados" name="uso-dados" required />
              <label htmlFor="uso-dados">
                Lí e concordo com o uso dos meus dados conforme descrito acima.
              </label>
            </div>

            <div className="form-checkbox">
              <input type="checkbox" id="termos" name="termos" required />
              <label htmlFor="termos">
                Lí e concordo com os <a href="https://mentto.com.br/termos-de-uso-e-politicas-de-privacidade" className="link-termos" target="_blank">termos e Políticas de Privacidade</a>
              </label>
            </div>

            {success && <p className="success-message">Inscrição realizada com sucesso!</p>}
            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="form-submit" disabled={loading}>
              {loading ? 'ENVIANDO...' : 'ENVIAR'}
            </button>
          </form>
        </div>
      </section>

      <section className='footer'>
        <img src={footer} alt="footer" />
      </section>
    </div>
  )
}
