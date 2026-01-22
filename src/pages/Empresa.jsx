import { useEffect, useState } from 'react'
import footer from '../assets/pages/footer.png'
import Logo from '../assets/inovaskill/LogoInova.svg'
import trilhas2 from '../assets/pages/trilhas2.png'
import '../animations.css'
import './Empresa.css'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { subscribeEmpresa } from '../api/action_empresa'
import imagemCentro from '../assets/imagens/imagemCentro.png'

const digitsOnly = (value = '') => value.replace(/\D+/g, '')

const isValidEmail = (email = '') => /.+@.+\..+/.test(email.trim().toLowerCase())

const isValidPhone = (phone = '') => {
  const digits = digitsOnly(phone)
  return digits.length >= 10 && digits.length <= 12
}

const isOnlyDigits = (value = '') => /^\d+$/.test(value.trim())

const sanitizeEmpresa = (data) => ({
  nome: data.nome.trim(),
  email: data.email.trim(),
  telefone: data.telefone.trim(),
  cargo: data.cargo.trim(),
  empresa: data.empresa.trim(),
  ramo: data.ramo.trim(),
  cidade: data.cidade.trim(),
  porte: data.porte.trim(),
  associada: data.associada.trim(),
})

export default function Empresa() {
  const heroRef = useScrollAnimation()
  const inscriptionRef = useScrollAnimation()
  const trilhasRef = useScrollAnimation()

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
    empresa: '',
    ramo: '',
    cidade: '',
    porte: '',
    associada: '',
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

    const sanitized = sanitizeEmpresa(formData)

    if (isOnlyDigits(sanitized.nome)) {
      setError('Nome não pode conter apenas números.')
      setLoading(false)
      return
    }

    if (isOnlyDigits(sanitized.cargo)) {
      setError('Cargo não pode conter apenas números.')
      setLoading(false)
      return
    }

    if (isOnlyDigits(sanitized.empresa)) {
      setError('Nome da empresa não pode conter apenas números.')
      setLoading(false)
      return
    }

    if (isOnlyDigits(sanitized.ramo)) {
      setError('Ramo de atuação não pode conter apenas números.')
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

    if (!sanitized.cidade) {
      setError('Informe a cidade.')
      setLoading(false)
      return
    }

    if (!sanitized.porte) {
      setError('Selecione o porte da empresa.')
      setLoading(false)
      return
    }

    if (!sanitized.associada) {
      setError('Selecione a associação.')
      setLoading(false)
      return
    }

    try {
      await subscribeEmpresa(sanitized)
      setSuccess(true)
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        cargo: '',
        empresa: '',
        ramo: '',
        cidade: '',
        porte: '',
        associada: '',
      })
    } catch (err) {
      setError(err.message || 'Ocorreu um erro ao enviar os dados da empresa. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

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

          <a className="cta" href="/empresa#inscription">Pré-inscrição</a>
        </div>

        <div className="empresa-hero-right">
          <iframe width="500px" height="300" src="https://www.youtube.com/embed/xasiaxZXrfw?si=4f-yYaqOhywpvhee" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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

      <section className='datasbolsatrilha animate-fade-in-up trilhas' ref={trilhasRef}>
        <img src={trilhas2} alt="Trilhas" />
      </section>

      <section className="empresa-inscription animate-fade-in-up" ref={inscriptionRef} id="inscription">
        <div className="empresa-inscription-container">
          <h2>Inscreva sua Empresa Abaixo:</h2>
          <p className="inscription-subtitle">Todos os campos são obrigatórios</p>

          <form className="empresa-form" onSubmit={handleSubmit}>
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
                <label htmlFor="cargo">Cargo:</label>
                <input 
                  type="text" 
                  id="cargo" 
                  name="cargo" 
                  value={formData.cargo}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="empresa">Nome da empresa:</label>
                <input 
                  type="text" 
                  id="empresa" 
                  name="empresa" 
                  value={formData.empresa}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="ramo">Ramo de atuação da empresa:</label>
                <input 
                  type="text" 
                  id="ramo" 
                  name="ramo" 
                  value={formData.ramo}
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
                <label htmlFor="porte">Porte da empresa:</label>
                <select 
                  id="porte" 
                  name="porte" 
                  value={formData.porte}
                  onChange={handleChange}
                  required
                >
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
                <select 
                  id="associada" 
                  name="associada" 
                  value={formData.associada}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="CIESP">CIESP</option>
                  <option value="ADIPA">ADIPA</option>
                  <option value="ADIPA">ASSERTI</option>
                  <option value="Nenhum">Nenhum</option>
                </select>
              </div>
            </div>

            <div className="form-checkbox-empresa">
              <input type="checkbox" id="termos" name="termos" required />
              <label htmlFor="termos">
                Declaro que li e aceito os <a href="https://mentto.com.br/termos-de-uso-e-politicas-de-privacidade" className="link-termos" target="_blank">Termos de Uso e Políticas de Privacidade</a>
              </label>
            </div>

            {success && <p className="success-message">Inscrição da empresa realizada com sucesso!</p>}
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
    </>
  )
}