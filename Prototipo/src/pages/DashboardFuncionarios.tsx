// src/pages/DashboardFuncionarios.tsx

import React, { useState } from 'react';
import DashboardItem from './DashboardItem';
import { Column, Item } from '../components/DataTableDisplayCard';
import { FormData } from '../components/ModalForm';
import CustomInput from '../components/CustomInput'; 

// --- DADOS DA ENTIDADE ---
const FUNCIONARIOS_COLUMNS: Column[] = [
    { key: 'nome', label: 'Nome' },
    { key: 'endereco', label: 'Endereço' },
    { key: 'telefone', label: 'Telefone' },
    { key: 'nivelPermissao', label: 'Nível' },
];

const FUNCIONARIOS_DATA: Item[] = [
    { id: 'f1', nome: 'João Silva', endereco: 'Rua A, 123', telefone: '(11) 98765-4321', nivelPermissao: 'Administrador' },
    { id: 'f2', nome: 'Maria Souza', endereco: 'Av. B, 456', telefone: '(21) 99999-0000', nivelPermissao: 'Engenheiro' },
];

const FUNCIONARIOS_INITIAL_FORM_DATA: FormData = {
    nome: '',
    endereco: '',
    telefone: '',
    nivelPermissao: '',
};

const DashboardFuncionarios: React.FC = () => {
    const [currentFormData, setCurrentFormData] = useState<FormData>(FUNCIONARIOS_INITIAL_FORM_DATA);

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
            <CustomInput name="nome" label="Nome" placeholder="João da Silva" value={String(currentFormData.nome || '')} onChange={handleInputChange} />
            <CustomInput name="endereco" label="Endereço" placeholder="Rua ABC, 123" value={String(currentFormData.endereco || '')} onChange={handleInputChange} />
            <CustomInput name="telefone" label="Telefone" placeholder="(XX) XXXXX-XXXX" value={String(currentFormData.telefone || '')} onChange={handleInputChange} />
            <CustomInput name="nivelPermissao" label="Nível de Permissão" placeholder="Administrador / Engenheiro" value={String(currentFormData.nivelPermissao || '')} onChange={handleInputChange} />
        </>
    );

    return (
        <DashboardItem 
            pageTitle="Gestão de Funcionários"
            itemName="Funcionário"
            itemPlural="Funcionários"
            searchPlaceholder="Buscar por nome, cargo ou telefone..."
            columns={FUNCIONARIOS_COLUMNS}
            initialData={FUNCIONARIOS_DATA}
            formFields={formFields} 
            initialFormData={FUNCIONARIOS_INITIAL_FORM_DATA}
            onFormChange={handleFormChange}
            currentFormData={currentFormData}
        />
    );
};

export default DashboardFuncionarios;