// src/pages/DashboardTestes.tsx

import React, { useState } from 'react';
import DashboardItem from './DashboardItem';
import { Column, Item } from '../components/DataTableDisplayCard';
import { FormData } from '../components/ModalForm';
import CustomInput from '../components/CustomInput'; 

// --- DADOS DA ENTIDADE ---
const TESTES_COLUMNS: Column[] = [
    { key: 'aeronave', label: 'Aeronave Testada' },
    { key: 'tipo', label: 'Tipo de Teste' },
    { key: 'resultado', label: 'Resultado' },
    { key: 'dataRealizacao', label: 'Data' },
];

const TESTES_DATA: Item[] = [
    { id: 't1', aeronave: 'AC-001 (B737)', tipo: 'Elétrico', resultado: 'Aprovado', dataRealizacao: '01/10/2025' },
    { id: 't2', aeronave: 'AC-002 (A320)', tipo: 'Hidráulico', resultado: 'Reprovado', dataRealizacao: '05/10/2025' },
];

const TESTES_INITIAL_FORM_DATA: FormData = {
    aeronave: '',
    tipo: '',
    resultado: '',
    dataRealizacao: '',
};

const DashboardTestes: React.FC = () => {
    const [currentFormData, setCurrentFormData] = useState<FormData>(TESTES_INITIAL_FORM_DATA);

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
            <CustomInput name="aeronave" label="Aeronave Testada" placeholder="AC-001 (B737)" value={String(currentFormData.aeronave || '')} onChange={handleInputChange} />
            <CustomInput name="tipo" label="Tipo de Teste" placeholder="Elétrico / Hidráulico" value={String(currentFormData.tipo || '')} onChange={handleInputChange} />
            <CustomInput name="resultado" label="Resultado" placeholder="Aprovado / Reprovado" value={String(currentFormData.resultado || '')} onChange={handleInputChange} />
            <CustomInput name="dataRealizacao" label="Data de Realização" type="date" placeholder="DD/MM/AAAA" value={String(currentFormData.dataRealizacao || '')} onChange={handleInputChange} />
        </>
    );

    return (
        <DashboardItem 
            pageTitle="Gestão de Testes"
            itemName="Teste"
            itemPlural="Testes"
            searchPlaceholder="Buscar por tipo de teste ou aeronave..."
            columns={TESTES_COLUMNS}
            initialData={TESTES_DATA} 
            formFields={formFields} 
            initialFormData={TESTES_INITIAL_FORM_DATA}
            onFormChange={handleFormChange}
            currentFormData={currentFormData}
        />
    );
};

export default DashboardTestes;