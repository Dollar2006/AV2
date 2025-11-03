// src/components/ActionToolbar.tsx

import React from 'react';
import Button from './ActionButton'; // Assumindo um componente Button genérico

interface ActionToolbarProps {
    searchPlaceholder: string;
    newItemLabel: string;
    onNewItem: () => void;
    onExport: () => void;
}

const ActionToolbar: React.FC<ActionToolbarProps> = ({
    searchPlaceholder,
    newItemLabel,
    onNewItem,
    onExport,
}) => {
    return (
        <div className="action-toolbar">
            
            {/* Campo de Busca (Input de Texto) */}
            <div className="search-input-wrapper">
                {/* Ícone de lupa (substitua pelo seu componente/SVG) */}
                <i className="search-icon">🔍</i> 
                <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className="search-input"
                />
            </div>
            
            {/* Botões de Ação */}
            <div className="action-buttons-group">
                <Button 
                    onClick={onExport} 
                    className="export-button"
                    // Ícone de Exportar (substitua pelo seu componente/SVG)
                    icon="📄" 
                >
                    Exportar
                </Button>
                
                <Button 
                    onClick={onNewItem} 
                    className="new-item-button"
                    // Ícone de Adicionar (substitua pelo seu componente/SVG)
                    icon="+" 
                    primary={true} // Estilo primário (azul forte)
                >
                    {newItemLabel}
                </Button>
            </div>
        </div>
    );
};

export default ActionToolbar;