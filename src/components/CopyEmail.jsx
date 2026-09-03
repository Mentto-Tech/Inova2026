import { useState } from 'react'
import './CopyEmail.css'

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      // fallback para browsers sem suporte
      const el = document.createElement('textarea')
      el.value = email
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <button type="button" className="copy-email-btn" onClick={handleClick}>
        {email}
      </button>
      {copied && <span className="copy-toast">E-mail copiado!</span>}
    </>
  )
}
