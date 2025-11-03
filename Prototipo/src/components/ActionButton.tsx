// src/components/ActionButton.tsx

import React, { ReactNode } from 'react';

interface ActionButtonProps {
    children: ReactNode;
    onClick?: (e: React.FormEvent | React.MouseEvent) => void;
    className?: string;
    icon?: ReactNode; // Ícone ou texto
    primary?: boolean; // Estilo para o botão principal (Nova Aeronave)
    type?: 'button' | 'submit';
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, onClick, className, icon, primary = false, type = 'button' }) => {
    const baseClass = primary ? 'action-button-primary' : 'action-button-secondary';
    
    // O evento é tipado como FormEvent ou MouseEvent para ser reutilizável
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Se for submit, o form se encarrega
        if (type !== 'submit') { 
            e.preventDefault();
            onClick(e);
        }
    };

    return (
        <button 
            type={type}
            onClick={type === 'submit' ? onClick as any : handleClick} 
            className={`${baseClass} ${className || ''}`}
        >
            {icon && <span className="action-button-icon">{icon}</span>}
            {children}
        </button>
    );
};

export default ActionButton;