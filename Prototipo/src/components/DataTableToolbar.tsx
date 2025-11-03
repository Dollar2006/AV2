// src/components/DataTableToolbar.tsx

import React from 'react';
import ActionButton from './ActionButton';

interface DataTableToolbarProps {
    searchPlaceholder: string;
    newItemLabel: string;
    onNewItem: () => void;
    onExport: () => void;
    searchTerm: string; 
    onSearchChange: (term: string) => void; 
}

const DataTableToolbar: React.FC<DataTableToolbarProps> = ({
    searchPlaceholder,
    newItemLabel,
    onNewItem,
    onExport,
    searchTerm,
    onSearchChange,
}) => {
    return (
        // Classe principal do container da Toolbar
        <div className="data-table-toolbar"> 
            
            {/* Campo de Busca */}
            <input
                type="text"
                placeholder={searchPlaceholder}
                className="toolbar-search-input" 
                value={searchTerm} 
                onChange={(e) => onSearchChange(e.target.value)}
            />

            {/* Container dos Botões de Ação */}
            <div className="toolbar-actions">
                <ActionButton onClick={onExport} primary={false} className="toolbar-export-button">
                    Exportar
                </ActionButton>
                <ActionButton onClick={onNewItem} primary={true} className="toolbar-new-button">
                    {newItemLabel}
                </ActionButton>
            </div>
        </div>
    );
};

export default DataTableToolbar;