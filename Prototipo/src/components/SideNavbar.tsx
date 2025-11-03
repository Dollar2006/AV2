// SideNavbar.tsx

import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../styles/SideNavbar.css' 
import ButtonNavigate from './ButtonNavigate';
import Title from './Title';

// ----------------------------------------------------------------------
// 1. IMPORTAÇÃO DAS IMAGENS (Ajuste os caminhos conforme sua estrutura)
// ----------------------------------------------------------------------
import menuAbertoUrl from '../assets/menu-aberto.png'; 
import menuFechadoUrl from '../assets/menu-fechado.png';

// Ícones de Navegação - Você deve criar estes arquivos na sua pasta 'assets'
import homeIconUrl from '../assets/icon-home.png';
import aeronavesIconUrl from '../assets/icon-plane.png';
import pecasIconUrl from '../assets/icon-peca.png';
import funcionariosIconUrl from '../assets/icon-funcionário.png';
import etapasIconUrl from '../assets/icon-etapa.png';
import testesIconUrl from '../assets/icon-teste.png';
import relatoriosIconUrl from '../assets/icon-relatorio.png';
import logoutIconUrl from '../assets/icon-sari.png'; // Ícone para o botão Sair

// ----------------------------------------------------------------------
// 2. ATUALIZAÇÃO DOS LINKS DE NAVEGAÇÃO
// ----------------------------------------------------------------------
// Definição dos links de navegação com a propriedade 'iconUrl'
const NAV_LINKS = [
    { name: 'Home', path: '/dashboard-home', iconUrl: homeIconUrl },
    { name: 'Aeronaves', path: '/dashboard-aeronaves', iconUrl: aeronavesIconUrl },
    { name: 'Peças', path: '/dashboard-pecas', iconUrl: pecasIconUrl },
    { name: 'Funcionários', path: '/dashboard-funcionarios', iconUrl: funcionariosIconUrl },
    { name: 'Etapas de Produção', path: '/dashboard-etapas', iconUrl: etapasIconUrl },
    { name: 'Testes', path: '/dashboard-testes', iconUrl: testesIconUrl },
    { name: 'Relatórios', path: '/dashboard-relatorios', iconUrl: relatoriosIconUrl },
];

const SideNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate() 

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Função que combina navegação e fechamento da sidebar
    const handleNavigationAndClose = (path: string) => {
        navigate(path);
        // Não fechamos a sidebar automaticamente se estivermos em modo desktop (a ser definido com CSS)
        // Mas para dispositivos móveis, é uma boa prática
        toggleSidebar(); 
    }

    // Lógica de Classes Condicionais
    const sidebarClasses = `sidebar-nav ${isOpen ? 'sidebar-open' : ''}`;

    return (
        <>
            <div className="navbar-app"> 
                
                <button 
                    onClick={toggleSidebar} 
                    className="menu-button-app" 
                    aria-expanded={isOpen} 
                    aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
                >
                    <img 
                        src={isOpen ? menuFechadoUrl : menuAbertoUrl} 
                        alt={isOpen ? "Fechar" : "Menu"} 
                        width="24" 
                        height="24" 
                        className="menu-icon-app" 
                    />
                </button>

                <h1 className="logo-app">Aerocode</h1> 
            </div>

            <nav 
                className={sidebarClasses}
            >
                {/* 1. CONTAINER DOS LINKS NORMAIS */}
                <div className="links-container-app">
                    <Title titulo='Dashboard' />
                    {NAV_LINKS.map((link) => (
                        <ButtonNavigate 
                            key={link.path} 
                            onNavigate={handleNavigationAndClose} 
                            to={link.path}
                            className="nav-link-app" 
                        >
                            {/* 3. USO DA IMAGEM IMPORTADA */}
                            <img 
                                src={link.iconUrl} 
                                alt={`Ícone de ${link.name}`} 
                                className="nav-icon-app"
                            />
                            {link.name}
                        </ButtonNavigate>
                    ))}
                </div>

                {/* 2. BOTÃO SAIR */}
                <ButtonNavigate 
                    onNavigate={handleNavigationAndClose} 
                    to="/login"
                    className="logout-link-app"
                >
                    {/* USO DA IMAGEM IMPORTADA PARA O LOGOUT */}
                    <img 
                        src={logoutIconUrl} 
                        alt="Ícone de Sair" 
                        className="nav-icon-app"
                    />
                    Sair
                </ButtonNavigate>
            </nav>

            {/* 3. OVERLAY */}
            {isOpen && (
                <div 
                    onClick={toggleSidebar} 
                    className="overlay-nav"
                />
            )}
        </>
    );
};

export default SideNavbar;