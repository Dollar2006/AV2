// src/pages/LandingPage.tsx (Modificado)

import Paragraph from "../components/Paragraph"
import Title from "../components/Title"
import {useNavigate} from 'react-router-dom'
import ButtonNavigate from "../components/ButtonNavigate"
// 1. Importa o novo CSS
import '../styles/LandingPage.css' 

function LandingPage() {
    const navigate = useNavigate()
    return (
        // 2. Container principal para o layout da Landing Page
        <div className="landing-page-container">
            
            {/* Elemento para o fundo com a imagem */}
            <div className="landing-page-background">
                {/* A imagem de fundo irá aqui, via CSS ou componente <img/> */}
            </div>

            {/* O conteúdo da Landing Page */}
            <Title titulo="Bem vindo a Aerocode!" className="landing-page-title" />
            <Paragraph texto="Sistema de gerenciamento de Aeronaves" className="landing-page-paragraph" />
            <ButtonNavigate onNavigate={navigate} to="/login">
                Acessar o sistema
            </ButtonNavigate>
        </div>
    )
}

export default LandingPage