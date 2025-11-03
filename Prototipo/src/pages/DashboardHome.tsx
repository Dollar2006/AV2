// src/pages/DashboardHome.tsx (Atualizado)

import { useNavigate } from 'react-router-dom';
import SideNavbar from "../components/SideNavbar";
import Title from "../components/Title";
import DashboardCard from "../components/DashboardCard"; // 1. Importe o novo Card
import '../styles/DashboardHome.css'

// 2. Importe os Ícones PNG (Assuma que estão na pasta assets/icons/)
import iconAeronaves from '../assets/icon-plane.png';
import iconPecas from '../assets/icon-peca.png';
import iconFuncionarios from '../assets/icon-funcionário.png';
import iconEtapa from '../assets/icon-etapa.png'
import iconTeste from '../assets/icon-teste.png'
import iconRelatorio from '../assets/icon-relatorio.png'
// ... e assim por diante para todos os seus ícones.

// 3. Defina os Dados dos Cards
const CARD_DATA = [
    { 
        title: "Aeronaves", 
        description: "Gerenciar aeronaves", 
        iconUrl: iconAeronaves, 
        path: "/dashboard-aeronaves",
        iconColor: "#427fff" // Azul
    },
    { 
        title: "Peças", 
        description: "Gerenciar peças", 
        iconUrl: iconPecas, 
        path: "/dashboard-pecas",
        iconColor: "#39b943" // Verde
    },
    { 
        title: "Funcionários", 
        description: "Gerenciar funcionários", 
        iconUrl: iconFuncionarios, 
        path: "/dashboard-funcionarios",
        iconColor: "#9b45ff" // Roxo
    },
    { 
        title: "Etapas", 
        description: "Gerenciar etapas de produção", 
        iconUrl: iconEtapa, 
        path: "/dashboard-etapas",
        iconColor: "#ff7f42" // Laranja
    },
    { 
        title: "Testes", 
        description: "Gerenciar Testes", 
        iconUrl: iconTeste, 
        path: "/dashboard-testes",
        iconColor: "#ff459b" // Rosa
    },
    { 
        title: "Relatórios", 
        description: "Gerenciar Relatórios", 
        iconUrl: iconRelatorio, 
        path: "/dashboard-relatorios",
        iconColor: "#6972ff" // Azul/Roxo
    },
];


function DashboardHome() {
    const navigate = useNavigate();
    
    return (
        // 1. CONTAINER PRINCIPAL: Usando classe global única
        <div className="dashboard-layout"> 
            
            <SideNavbar />

            {/* 2. CONTEÚDO PRINCIPAL: Ocupa o restante da tela */}
            <main className="dashboard-content">
                <Title titulo="Bem-vindo ao Aerocode"/>
                
                <p className="dashboard-subtitle">Selecione uma seção para começar a gerenciar sua produção aeronáutica.</p>

                <div className="card-container">
                    {/* Mapeamento dos Cards */}
                    {CARD_DATA.map((card) => (
                        <DashboardCard
                            key={card.path}
                            title={card.title}
                            description={card.description}
                            iconUrl={card.iconUrl}
                            iconColor={card.iconColor} 
                            to={card.path}
                            onNavigate={navigate}
                            // Passando o nome da classe global para estilizar o card
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default DashboardHome