import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './animations.css'
import Home from './Home.jsx'
import Aluno from './pages/Aluno.jsx'
import Empresa from './pages/Empresa.jsx'
import PageLoader from './components/PageLoader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PageLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aluno" element={<Aluno />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
