// src/App.tsx

import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import DashboardHome from "./pages/DashboardHome"
// Importe os novos componentes
import DashboardAeronaves from "./pages/DashboardAeronaves"
import DashboardPecas from "./pages/DashboardPecas"
import DashboardFuncionarios from "./pages/DashboardFuncionarios"
import DashboardEtapas from "./pages/DashboardEtapas"
import DashboardTestes from "./pages/DashboardTestes"
import DashboardRelatoriosPage from "./pages/DashboardRelatoriosPage"


// (Remova todos os dados/colunas de AERONAVES, PECAS, etc., daqui, pois eles foram movidos para os wrappers)


function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-home" element={<DashboardHome />} />

        {/* ROTAS AGORA USAM OS COMPONENTES WRAPPER QUE GERENCIAM O ESTADO */}
        <Route 
            path="/dashboard-aeronaves" 
            element={<DashboardAeronaves />}
        />
        
        <Route 
            path="/dashboard-pecas" 
            element={<DashboardPecas />}
        />

        <Route 
            path="/dashboard-funcionarios" 
            element={<DashboardFuncionarios />}
        />
        
        <Route 
            path="/dashboard-etapas" 
            element={<DashboardEtapas />} 
        />
        
        <Route 
            path="/dashboard-testes" 
            element={<DashboardTestes />} 
        />
        
        <Route 
            path="/dashboard-relatorios" 
            element={<DashboardRelatoriosPage />} 
        />
      </Routes>
    </>
  )
}

export default App