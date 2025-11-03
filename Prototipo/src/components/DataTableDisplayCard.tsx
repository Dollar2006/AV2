// src/components/DataTableDisplayCard.tsx

import React from 'react';
import RowActionButtons from './RowActionButtons'; // Importando o novo componente

// Tipos genéricos (Exportados aqui ou em ReusableDataTablePage)
export interface Column { 
    key: string; 
    label: string; 
}

export interface Item { 
    id: string; // Adicionando 'id' como obrigatório para ações de linha
    [key: string]: React.ReactNode; 
}

interface DataTableDisplayCardProps {
    itemPlural: string;
    columns: Column[];
    data: Item[];
    // NOVAS PROPS: Funções de ação para as linhas
    onEditItem: (id: string) => void;
    onDeleteItem: (id: string) => void;
}

const DataTableDisplayCard: React.FC<DataTableDisplayCardProps> = ({ itemPlural, columns, data, onEditItem, onDeleteItem }) => {
    const itemCount = data.length;

    // Adiciona a coluna 'Ações' ao final do array de colunas
    const allColumns = [...columns, { key: 'actions', label: 'Ações' }];

    return (
        <div className="data-table-card">
            
            <h3 className="item-list-header">
                Lista de {itemPlural} ({itemCount})
            </h3>
            
            <div className="data-table-container">
                
                {/* Cabeçalho da Tabela */}
                <div className="table-header-row">
                    {allColumns.map((col) => (
                        <div 
                            key={col.key} 
                            className={`table-header-col table-col-${col.key}`}
                            // Ajuste de largura para colunas de dados e a coluna de Ações
                            style={{ 
                                flex: col.key === 'dataCadastro' ? 1.5 : (col.key === 'actions' ? 0.7 : 1),
                                minWidth: col.key === 'actions' ? '100px' : 'auto', // Largura mínima para botões
                            }}
                        >
                            {col.label}
                        </div>
                    ))}
                </div>
                
                {/* Corpo da Tabela */}
                {itemCount === 0 ? (
                    <div className="no-data-message">
                        Nenhuma {itemPlural.slice(0, -1).toLowerCase()} cadastrada
                    </div>
                ) : (
                    data.map((item) => (
                        <div key={item.id} className="table-data-row">
                            {columns.map((col) => (
                                <div 
                                    key={col.key} 
                                    className={`table-data-col table-col-${col.key}`}
                                    style={{ flex: col.key === 'dataCadastro' ? 1.5 : 1 }}
                                >
                                    {item[col.key]}
                                </div>
                            ))}
                            {/* COLUNA DE AÇÕES */}
                            <div 
                                className="table-data-col table-col-actions"
                                style={{ flex: 0.7, minWidth: '100px', display: 'flex', justifyContent: 'flex-start' }}
                            >
                                <RowActionButtons
                                    itemId={item.id as string} // O ID é garantido pela interface Item
                                    onEdit={onEditItem}
                                    onDelete={onDeleteItem}
                                />
                            </div>
                        </div>
                    ))
                )}

            </div>
        </div>
    );
};

export default DataTableDisplayCard;