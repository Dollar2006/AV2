// src/pages/DashboardRelatoriosPage.tsx

import React from 'react';
import SideNavbar from '../components/SideNavbar';
import Title from '../components/Title';
import ButtonNavigate from '../components/ButtonNavigate'; // Para o botão de ação (Exportar)
import { useNavigate } from 'react-router-dom';
import '../styles/DashboardRelatoriosPage.css';

// Componente simples para representar a área de dados do relatório (seguindo o wireframe)
const RelatorioDisplay: React.FC = () => {
    // Dados de exemplo, baseados no wireframe da tabela de dados
    const mockData = [
        { title: 'Data_title', data: 'Data' },
        { title: 'Data2_title', data: 'Data2' },
        { title: 'Data3_title', data: 'Data3' },
        { title: 'Data4_title', data: 'Data4' },
        { title: 'Data5_title', data: 'Data5' },
    ];

    return (
        <div className="relatorio-display-card">
            <h3 className="relatorio-list-title">Relatório Gerado</h3>
            
            <div className="relatorio-header-row">
                {mockData.map((item, index) => (
                    <span key={index} className="relatorio-column-header">{item.title}</span>
                ))}
            </div>
            
            <div className="relatorio-data-row">
                {mockData.map((item, index) => (
                    <span key={index} className="relatorio-column-data">{item.data}</span>
                ))}
            </div>

            <p className="relatorio-footer-note">
                Este é um exemplo de dados de relatório.
            </p>
        </div>
    );
};

const DashboardRelatoriosPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-layout">
            <SideNavbar />
            
            <main className="dashboard-content relatorios-content">
                <Title titulo="Dashboard-Relatório" className="page-header-title" />

                {/* 1. Área de Filtros e Ações (Header) - Baseado no wireframe */}
                <div className="relatorio-actions-header">
                    
                    {/* Campo de Seleção/Opção - */}
                    <div className="filter-group">
                        <label htmlFor="select-option" className="sr-only">Opção de Relatório</label>
                        <select id="select-option" className="relatorio-select">
                            <option value="">Selecione a Opção</option>
                            <option value="aeronave">Relatório por Aeronave</option>
                            <option value="peca">Relatório por Peça</option>
                        </select>
                    </div>

                    {/* Campo de Busca - */}
                    <div className="filter-group">
                         <label htmlFor="search-input" className="sr-only">Buscar</label>
                         <input 
                            type="text" 
                            id="search-input"
                            placeholder="Buscar" 
                            className="relatorio-search-input" 
                         />
                    </div>
                    
                    {/* Botão de Ação (button+) - */}
                    <ButtonNavigate 
                        onNavigate={() => alert('Gerar Relatório Clicado!')}
                        to="#"
                        className="relatorio-action-button"
                    >
                        Gerar Relatório
                    </ButtonNavigate>
                </div>

                {/* 2. Área de Visualização do Relatório (Lista) */}
                <RelatorioDisplay />
            </main>
        </div>
    );
};

export default DashboardRelatoriosPage;