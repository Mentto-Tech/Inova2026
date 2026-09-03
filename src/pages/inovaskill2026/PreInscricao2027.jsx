import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Inovaskill2026.css'
import './PreInscricao2027.css'

const GROUP_ID = '197593284253582923'

const isValidEmail = (email = '') => /.+@.+\..+/.test(email.trim().toLowerCase())
const isValidPhone = (phone = '') => phone.replace(/\D/g, '').length >= 10

export default function PreInscricao2027() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    empresa: '',
    tipo: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    if (!isValidEmail(form.email)) {
      setError('Informe um e-mail válido.')
      setLoading(false)
      return
    }

    if (!isValidPhone(form.telefone)) {
      setError('Informe um telefone/WhatsApp com DDD.')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: form.email.trim(),
          fields: {
            name: form.nome.trim(),
            phone: form.telefone.trim(),
            company: form.empresa.trim(),
            tipo: form.tipo,
          },
          groups: [GROUP_ID],
        }),
      })

      const raw = await response.text()
      const data = raw ? JSON.parse(raw) : {}
      if (!response.ok) throw new Error(data.message || 'Erro ao realizar pré-inscrição.')
      setSuccess(true)
      setForm({ nome: '', telefone: '', email: '', empresa: '', tipo: '' })
    } catch (err) {
      setError(err.message || 'Ocorreu um erro ao enviar seus dados. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div style={{ height: '80px' }} />
      <Header />
      <div className="site">
        <section className="pre-inscricao-section">
          <div className="pre-inscricao-container">
            <h2>Pré-inscrição <span className="secondary">InovaSkill 2027</span></h2>
            <p className="inscription-subtitle">
              Demonstre seu interesse e fique por dentro das novidades da próxima edição.
            </p>

            {success ? (
              <div className="pre-inscricao-success">
                <h3>Pré-inscrição realizada!</h3>
                <p>
                  Obrigado pelo seu interesse. Entraremos em contato em breve com mais informações
                  sobre o InovaSkill 2027.
                </p>
                <button className="cta" onClick={() => navigate('/inovaskill2026')}>
                  Voltar à página principal
                </button>
              </div>
            ) : (
              <form className="pre-inscricao-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Seu nome completo:</label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      value={form.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefone">Telefone / WhatsApp:</label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={form.telefone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mail para contato:</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="empresa">Empresa / Instituição:</label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={form.empresa}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Você é:</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="tipo"
                        value="aluno"
                        checked={form.tipo === 'aluno'}
                        onChange={handleChange}
                        required
                      />
                      Aluno
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="tipo"
                        value="empresa"
                        checked={form.tipo === 'empresa'}
                        onChange={handleChange}
                      />
                      Representante de empresa
                    </label>
                  </div>
                </div>

                <div className="lgpd-notice">
                  <p>
                    <strong>Informações sobre seus dados:</strong> Seus dados serão gerenciados pela plataforma MailerLite,
                    nosso operador de comunicações, em conformidade com a LGPD. Os dados serão retidos pelo período de
                    vigência do programa e por até 5 anos após seu encerramento para fins de certificação e obrigações
                    legais. Para exercer seus direitos (acesso, correção ou exclusão), entre em contato pelo e-mail{' '}
                    <a href="mailto:lgpd@mentto.com.br" className="link-termos">lgpd@mentto.com.br</a>.
                  </p>
                </div>

                <div className="form-checkbox">
                  <input type="checkbox" id="termos" name="termos" required />
                  <label htmlFor="termos">
                    Declaro que li e aceito os{' '}
                    <a
                      href="https://mentto.com.br/termos-de-uso-e-politicas-de-privacidade"
                      className="link-termos"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Termos de Uso e Políticas de Privacidade
                    </a>
                  </label>
                </div>

                {success && <p className="success-message">Pré-inscrição realizada com sucesso!</p>}
                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="form-submit pre-inscricao-submit" disabled={loading}>
                  {loading ? 'ENVIANDO...' : 'ENVIAR'}
                </button>
              </form>
            )}
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
