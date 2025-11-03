// src/components/RowActionButtons.tsx

import React from 'react';

interface RowActionButtonsProps {
    itemId: string;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const RowActionButtons: React.FC<RowActionButtonsProps> = ({ itemId, onEdit, onDelete }) => {
    
    // Implementação visual do botão de Editar
    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation(); // Evita que o evento de clique na linha seja disparado
        onEdit(itemId);
    };

    // Implementação visual do botão de Apagar
    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation(); // Evita que o evento de clique na linha seja disparado
        // Simulação de confirmação
        if (window.confirm(`Tem certeza que deseja apagar o item ${itemId}? (Ação simulada)`)) {
            onDelete(itemId);
        }
    };

    return (
        <div className="row-actions-group">
            {/* Botão Editar */}
            <button 
                onClick={handleEdit} 
                className="action-edit-button" 
                title="Editar"
            >
                {/* Ícone de caneta ou lápis */}
                ✏️
            </button>
            
            {/* Botão Apagar */}
            <button 
                onClick={handleDelete} 
                className="action-delete-button" 
                title="Apagar"
            >
                {/* Ícone de lixeira ou 'X' */}
                🗑️
            </button>
        </div>
    );
};

export default RowActionButtons;