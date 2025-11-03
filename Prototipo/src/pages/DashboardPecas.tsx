// src/pages/DashboardPecas.tsx

import React, { useState } from 'react';
import DashboardItem from './DashboardItem';
import { Column, Item } from '../components/DataTableDisplayCard';
import { FormData } from '../components/ModalForm';
import CustomInput from '../components/CustomInput'; 

// --- DADOS DA ENTIDADE ---
const PECAS_COLUMNS: Column[] = [
    { key: 'nome', label: 'Nome' },
    { key: 'tipo', label: 'Tipo' },
    { key: 'fornecedor', label: 'Fornecedor' },
    { key: 'status', label: 'Status' },
    { key: 'dataCadastro', label: 'Última Atualização' },
];

const PECAS_DATA: Item[] = [
    { id: 'p1', nome: 'Motor GE-90', tipo: 'Elétrico', fornecedor: 'GE Aviation', status: 'Pronta', dataCadastro: '10/09/2025' },
    { id: 'p2', nome: 'Trem de Pouso', tipo: 'Hidráulico', fornecedor: 'Safran', status: 'Em Produção', dataCadastro: '20/09/2025' },
];

const PECAS_INITIAL_FORM_DATA: FormData = {
    nome: '',
    tipo: '',
    fornecedor: '',
    status: '',
};

const DashboardPecas: React.FC = () => {
    const [currentFormData, setCurrentFormData] = useState<FormData>(PECAS_INITIAL_FORM_DATA);

    // Função interna para lidar com as mudanças de input (recebe name e value)
    const handleInputChange = (name: string, value: string) => {
        setCurrentFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Função que será passada como prop para o DashboardItem (lida com carga/edição)
    const handleFormChange = (data: FormData) => {
        setCurrentFormData(data);
    };

    const formFields = (
        <>
            <CustomInput name="nome" label="Nome" placeholder="Motor GE-90" value={String(currentFormData.nome || '')} onChange={handleInputChange} />
            <CustomInput name="tipo" label="Tipo" placeholder="Elétrico / Hidráulico" value={String(currentFormData.tipo || '')} onChange={handleInputChange} />
            <CustomInput name="fornecedor" label="Fornecedor" placeholder="GE Aviation" value={String(currentFormData.fornecedor || '')} onChange={handleInputChange} />
            <CustomInput name="status" label="Status" placeholder="Pronta / Em Produção" value={String(currentFormData.status || '')} onChange={handleInputChange} />
        </>
    );

    return (
        <DashboardItem 
            pageTitle="Gestão de Peças"
            itemName="Peça"
            itemPlural="Peças"
            searchPlaceholder="Buscar por código ou nome..."
            columns={PECAS_COLUMNS}
            initialData={PECAS_DATA}
            formFields={formFields} 
            initialFormData={PECAS_INITIAL_FORM_DATA}
            onFormChange={handleFormChange}
            currentFormData={currentFormData}
        />
    );
};

export default DashboardPecas;