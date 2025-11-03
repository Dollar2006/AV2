// DashboardCard.tsx

import ButtonNavigate from './ButtonNavigate'; 

interface DashboardCardProps {
    title: string;
    description: string;
    iconUrl: string; // URL do ícone PNG
    iconColor: string; // NOVO: Cor de fundo para o wrapper do ícone
    to: string; // Rota de destino
    onNavigate: (path: string) => void; // Função de navegação (injectada)
}

const DashboardCard = ({ title, description, iconUrl, iconColor, to, onNavigate }: DashboardCardProps) => {

    return (
        // Usamos seu ButtonNavigate como container principal do card
        <ButtonNavigate onNavigate={onNavigate} to={to} className="dashboard-card">
            
            {/* NOVO: Wrapper para estilizar o fundo colorido do ícone */}
            <div className="card-icon-wrapper" style={{ backgroundColor: iconColor }}>
                <img src={iconUrl} alt={`Ícone ${title}`} className="card-icon" />
            </div>
            
            <h3 className="card-title">{title}</h3>
            
            <p className="card-description">{description}</p>
            
        </ButtonNavigate>
    );
};

export default DashboardCard;