// src/pages/DashboardEtapas.tsx

import React, { useState } from 'react';
import DashboardItem from './DashboardItem';
import { Column, Item } from '../components/DataTableDisplayCard';
import { FormData } from '../components/ModalForm';
import CustomInput from '../components/CustomInput'; 

// --- DADOS DA ENTIDADE ---
const ETAPAS_COLUMNS: Column[] = [
    { key: 'nome', label: 'Etapa' },
    { key: 'prazo', label: 'Prazo (Dias)' },
    { key: 'status', label: 'Status' },
    { key: 'responsavel', label: 'Funcionário Responsável' },
];

const ETAPAS_DATA: Item[] = [
    { id: 'e1', nome: 'Montagem da Fuselagem', prazo: 30, status: 'Andamento', responsavel: 'João Silva' },
    { id: 'e2', nome: 'Instalação da Aviônica', prazo: 15, status: 'Concluída', responsavel: 'Maria Souza' },
];

const ETAPAS_INITIAL_FORM_DATA: FormData = {
    nome: '',
    prazo: '', // Mantido como string para compatibilidade com o input type="number"
    status: '',
    responsavel: '',
};

const DashboardEtapas: React.FC = () => {
    const [currentFormData, setCurrentFormData] = useState<FormData>(ETAPAS_INITIAL_FORM_DATA);

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
            <CustomInput name="nome" label="Etapa" placeholder="Montagem da Fuselagem" value={String(currentFormData.nome || '')} onChange={handleInputChange} />
            {/* O valor do input type="number" deve ser passado como string para CustomInput */}
            <CustomInput name="prazo" label="Prazo (Dias)" type="number" placeholder="30" value={String(currentFormData.prazo || '')} onChange={handleInputChange} />
            <CustomInput name="status" label="Status" placeholder="Andamento / Concluída" value={String(currentFormData.status || '')} onChange={handleInputChange} />
            <CustomInput name="responsavel" label="Funcionário Responsável" placeholder="João Silva" value={String(currentFormData.responsavel || '')} onChange={handleInputChange} />
        </>
    );

    return (
        <DashboardItem 
            pageTitle="Gestão de Etapas de Produção"
            itemName="Etapa"
            itemPlural="Etapas"
            searchPlaceholder="Buscar por nome ou responsável..."
            columns={ETAPAS_COLUMNS}
            initialData={ETAPAS_DATA} 
            formFields={formFields} 
            initialFormData={ETAPAS_INITIAL_FORM_DATA}
            onFormChange={handleFormChange}
            currentFormData={currentFormData}
        />
    );
};

export default DashboardEtapas;