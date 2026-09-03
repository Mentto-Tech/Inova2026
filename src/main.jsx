import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './pages/inovaskill2026/animations.css'
import HomeNovo from './Home.jsx'
import HomeInovaSkill2026 from './pages/inovaskill2026/Home.jsx'
import Aluno from './pages/inovaskill2026/Aluno.jsx'
import Empresa from './pages/inovaskill2026/Empresa.jsx'
import PreInscricao2027 from './pages/inovaskill2026/PreInscricao2027.jsx'
import Aracatuba from './pages/spai/Aracatuba.jsx'
import Bauru from './pages/spai/Bauru.jsx'
// import Famema from './pages/spai/Famema.jsx'
import Assis from './pages/spai/Assis.jsx'
import SpaiAlunoTemplate from './pages/spai/SpaiAlunoTemplate.jsx'
import SpaiEmpresaTemplate from './pages/spai/SpaiEmpresaTemplate.jsx'
import SpaiPesquisadorTemplate from './pages/spai/SpaiPesquisadorTemplate.jsx'
import PageLoader from './components/PageLoader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PageLoader />
      <Routes>
        <Route path="/" element={<HomeNovo />} />
        <Route path="/inovaskill2026" element={<HomeInovaSkill2026 />} />
        <Route path="/inovaskill2026/aluno" element={<Aluno />} />
        <Route path="/inovaskill2026/empresa" element={<Empresa />} />
        <Route path="/inovaskill2026/pre-inscricao-2027" element={<PreInscricao2027 />} />

        <Route path="/spai-aracatuba" element={<Aracatuba />} />
        <Route path="/spai-aracatuba/aluno" element={<SpaiAlunoTemplate city="Araçatuba" groupId="191263880560772146" />} />
        <Route path="/spai-aracatuba/empresa" element={<SpaiEmpresaTemplate city="Araçatuba" groupId="191263763799738266" />} />

        <Route path="/spai-bauru" element={<Bauru />} />
        <Route path="/spai-bauru/aluno" element={<SpaiAlunoTemplate city="Bauru" groupId="191264125301556842" />} />
        <Route path="/spai-bauru/empresa" element={<SpaiEmpresaTemplate city="Bauru" groupId="191264210036983690" />} />
        <Route path="/spai-bauru/pesquisador" element={<SpaiPesquisadorTemplate city="Bauru" groupId="193260399107245905" />} />

        {/* <Route path="/spai-famema" element={<Famema />} /> */}
        {/* <Route path="/spai-famema/aluno" element={<SpaiAlunoTemplate city="Famema" />} /> */}
        {/* <Route path="/spai-famema/empresa" element={<SpaiEmpresaTemplate city="Famema" />} /> */}

        <Route path="/spai-assis" element={<Assis />} />
        <Route path="/spai-assis/aluno" element={<SpaiAlunoTemplate city="Assis" groupId="191264057608635464" />} />
        <Route path="/spai-assis/empresa" element={<SpaiEmpresaTemplate city="Assis" groupId="191263980090557958" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
