// src/pages/Login.tsx (Modificado)

import ButtonNavigate from "../components/ButtonNavigate"
import Title from "../components/Title"
import {useNavigate} from 'react-router-dom'
// 1. Importa o novo CSS
import '../styles/Login.css' 

function Login() {
    const navigate = useNavigate()
    return (
        // 2. Container da página
        <div className="login-page-container">
            
            {/* 3. Card que contém o formulário */}
            <div className="login-card">
                
                <Title titulo="Login"/>
                
                {/* 4. Adiciona a classe ao form */}
                <form className="login-form">
                    <input type="text" placeholder="Email: "/>
                    <input type="password" placeholder="Senha"/>
                </form>
                
                {/* 5. Adiciona a classe ao ButtonNavigate */}
                <ButtonNavigate 
                    onNavigate={navigate} 
                    to="/dashboard-home"
                    className="login-button" 
                >
                    Enviar
                </ButtonNavigate>
            </div>
        </div>
    )
}

export default Login