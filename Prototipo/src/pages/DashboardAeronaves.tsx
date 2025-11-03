// src/pages/DashboardAeronaves.tsx

import React, { useState } from 'react';
import DashboardItem from './DashboardItem';
import { Column, Item } from '../components/DataTableDisplayCard';
import { FormData } from '../components/ModalForm';
import CustomInput from '../components/CustomInput'; 

// --- DADOS DA ENTIDADE ---
const AERONAVES_COLUMNS: Column[] = [
    { key: 'codigo', label: 'Código' },
    { key: 'modelo', label: 'Modelo' },
    { key: 'fabricante', label: 'Fabricante' },
    { key: 'status', label: 'Status' },
    { key: 'dataCadastro', label: 'Data de Cadastro' },
];

const AERONAVES_DATA: Item[] = [
    { id: '1', codigo: 'AC-001', modelo: 'Boeing 737', fabricante: 'Boeing', status: 'Em Voo', dataCadastro: '01/10/2025' },
    { id: '2', codigo: 'AC-002', modelo: 'Airbus A320', fabricante: 'Airbus', status: 'Em Manutenção', dataCadastro: '05/10/2025' },
    { id: '3', codigo: 'AC-003', modelo: 'Embraer E190', fabricante: 'Embraer', status: 'Em Produção', dataCadastro: '15/10/2025' },
];

const AERONAVES_INITIAL_FORM_DATA: FormData = {
    codigo: '',
    modelo: '',
    fabricante: '',
    status: '',
};

const DashboardAeronaves: React.FC = () => {
    const [currentFormData, setCurrentFormData] = useState<FormData>(AERONAVES_INITIAL_FORM_DATA);

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
            <CustomInput name="codigo" label="Código" placeholder="AC-00X" value={String(currentFormData.codigo || '')} onChange={handleInputChange} />
            <CustomInput name="modelo" label="Modelo" placeholder="Boeing 737" value={String(currentFormData.modelo || '')} onChange={handleInputChange} />
            <CustomInput name="fabricante" label="Fabricante" placeholder="Boeing" value={String(currentFormData.fabricante || '')} onChange={handleInputChange} />
            <CustomInput name="status" label="Status" placeholder="Em Voo / Manutenção / Produção" value={String(currentFormData.status || '')} onChange={handleInputChange} />
        </>
    );

    return (
        <DashboardItem 
            pageTitle="Gestão de Aeronaves"
            itemName="Aeronave"
            itemPlural="Aeronaves"
            searchPlaceholder="Buscar por código ou modelo..."
            columns={AERONAVES_COLUMNS}
            initialData={AERONAVES_DATA}
            formFields={formFields} 
            initialFormData={AERONAVES_INITIAL_FORM_DATA}
            onFormChange={handleFormChange}
            currentFormData={currentFormData}
        />
    );
};

export default DashboardAeronaves;