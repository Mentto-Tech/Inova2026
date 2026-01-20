import { useEffect, useState } from 'react'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleStop = () => setIsLoading(false)

    // Simular carregamento ao trocar de rota
    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleStop)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleStop)
    }
  }, [])

  return (
    <div className={`page-loader ${isLoading ? 'active' : ''}`}>
      <div className="loader-spinner"></div>
    </div>
  )
}

export default PageLoader
