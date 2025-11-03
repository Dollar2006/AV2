// src/components/DataTableCard.tsx

import React from 'react';
import type { Column, Item } from './DataTableDisplayCard'; // Importando tipos
 // Importando tipos

interface DataTableCardProps {
    itemPlural: string;
    columns: Column[];
    data: Item[];
}

const DataTableCard: React.FC<DataTableCardProps> = ({ itemPlural, columns, data }) => {
    const itemCount = data.length;

    return (
        <div className="data-table-card">
            
            {/* Contagem de Itens (Ex: Lista de Aeronaves (0)) */}
            <h3 className="item-list-header">
                Lista de {itemPlural} ({itemCount})
            </h3>
            
            {/* Tabela de Dados */}
            <div className="data-table-container">
                
                {/* Cabeçalho da Tabela */}
                <div className="table-header-row">
                    {columns.map((col) => (
                        <div key={col.key} className={`table-header-col table-col-${col.key}`}>
                            {col.label}
                        </div>
                    ))}
                </div>
                
                {/* Corpo da Tabela */}
                {itemCount === 0 ? (
                    <div className="no-data-message">
                        Nenhuma {itemPlural.slice(0, -1)} cadastrada
                    </div>
                ) : (
                    data.map((item, rowIndex) => (
                        <div key={rowIndex} className="table-data-row">
                            {columns.map((col) => (
                                <div key={col.key} className={`table-data-col table-col-${col.key}`}>
                                    {item[col.key]}
                                </div>
                            ))}
                        </div>
                    ))
                )}

            </div>
        </div>
    );
};

export default DataTableCard;