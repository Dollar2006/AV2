// src/pages/DashboardItem.tsx

import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import DataTableToolbar from '../components/DataTableToolbar';
import DataTableDisplayCard, { Column, Item } from '../components/DataTableDisplayCard'; 
import ModalForm, { FormData } from '../components/ModalForm'; 
import SideNavbar from '../components/SideNavbar';
import '../styles/DataTable.css' 
// Importação do CustomInput não é mais necessária aqui, pois ele é passado via prop


// Nota: A interface FormData deve ser genérica ou estar em um arquivo de tipos compartilhados.
// Para este exemplo, ela é definida no ModalForm.tsx.

interface DashboardItemProps {
    pageTitle: string; 
    itemName: string; 
    itemPlural: string; 
    searchPlaceholder: string; 
    columns: Column[]; 
    initialData: Item[]; 
    
    // NOVO: O conteúdo do formulário específico para esta entidade (JSX)
    formFields: React.ReactNode; 
    // NOVO: Um objeto com os dados iniciais vazios para o formulário
    initialFormData: FormData; 
    // NOVO: Função para atualizar os dados no componente pai
    onFormChange: (data: FormData) => void;
    // NOVO: O estado de dados atual do formulário
    currentFormData: FormData;
}


const DashboardItem: React.FC<DashboardItemProps> = ({
    pageTitle,
    itemName,
    itemPlural,
    searchPlaceholder,
    columns,
    initialData,
    formFields, // Conteúdo do formulário (Inputs)
    initialFormData,
    onFormChange,
    currentFormData,
}) => {
    const [data, setData] = useState(initialData); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<Item | null>(null); 
    const [searchTerm, setSearchTerm] = useState(''); 


    // Efeito para carregar os dados no `currentFormData` quando `editingItem` muda
    useEffect(() => {
        if (editingItem) {
            // Mapeia os campos do item para o estado do formulário
            const mappedData: FormData = {};
            // Itera sobre as chaves do initialFormData para garantir que apenas campos válidos sejam mapeados
            (Object.keys(initialFormData) as (keyof FormData)[]).forEach(key => {
                mappedData[key] = String(editingItem[key] || initialFormData[key] || '');
            });
            onFormChange(mappedData);
        } else {
            // Reseta para padrão se não estiver editando
            onFormChange(initialFormData);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editingItem, initialFormData]);


    // --- Lógica de Ações de Criação/Edição ---

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 

        // Validação (deve ser mais robusta no componente filho/wrapper)
        const isDataValid = Object.values(currentFormData).every(value => String(value).trim() !== '');

        if (!isDataValid && !editingItem) {
             // Simplificação: Assume que todos os campos são obrigatórios, exceto na edição
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (editingItem) {
            // Lógica de EDIÇÃO (Update)
            setData(prevData => prevData.map(item => 
                item.id === editingItem.id ? { ...item, ...currentFormData } : item
            ));
            alert(`${itemName} (ID: ${editingItem.id}) atualizada visualmente.`);
        } else {
            // Lógica de CRIAÇÃO (Novo Item)
            const now = new Date();
            const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
            
            const newItem: Item = { 
                id: String(Date.now()), 
                ...currentFormData, 
                dataCadastro: formattedDate, // Adiciona a data (se aplicável)
            };
            setData(prevData => [newItem, ...prevData]);
            alert(`${itemName} cadastrada visualmente!`);
        }
        closeModal();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingItem(null); 
        onFormChange(initialFormData); // Reseta o formulário
    };

    const handleNewItem = () => {
        setEditingItem(null); 
        setIsModalOpen(true);
    };

    const handleEditItem = (id: string) => {
        const itemToEdit = data.find(item => item.id === id);
        if (itemToEdit) {
            setEditingItem(itemToEdit); 
            setIsModalOpen(true);      
        }
    };
    
    const handleDeleteItem = (id: string) => {
        setData(data.filter(item => item.id !== id));
        alert(`${itemName} (ID: ${id}) apagada visualmente.`);
    };

    const handleExport = () => {
        alert("Simulação: Dados exportados!");
    };


    // -----------------------------------------------------------------
    // LÓGICA DE FILTRAGEM
    // -----------------------------------------------------------------
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();

    const filteredData = data.filter(item => {
        if (!normalizedSearchTerm) {
            return true;
        }
        return Object.values(item).some(value => 
            String(value).toLowerCase().includes(normalizedSearchTerm)
        );
    });
    // -----------------------------------------------------------------


    const modalHeaderText = editingItem ? `Editar ${itemName}` : `Cadastrar Nova ${itemName}`;
    const submitBtnText = editingItem ? `Atualizar ${itemName}` : `Cadastrar ${itemName}`;


    return (
        <div className="data-table-page-layout">
            <SideNavbar />
            <Title titulo={pageTitle} className="page-header-title"/>

            <DataTableToolbar
                searchPlaceholder={searchPlaceholder}
                newItemLabel={`Nova ${itemName}`}
                onNewItem={handleNewItem} 
                onExport={handleExport}
                searchTerm={searchTerm} 
                onSearchChange={setSearchTerm} 
            />

            <DataTableDisplayCard
                itemPlural={itemPlural}
                columns={columns}
                data={filteredData} 
                onEditItem={handleEditItem} 
                onDeleteItem={handleDeleteItem} 
            />

            <ModalForm
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={handleFormSubmit} // Recebe o evento e usa currentFormData
                initialData={editingItem} 
                modalTitle={modalHeaderText} 
                submitButtonText={submitBtnText} 
            >
                {/* AQUI ESTÃO OS CAMPOS ESPECÍFICOS DO DASHBOARD (Aeronave, Teste, etc.) */}
                {formFields} 
            </ModalForm>
            
        </div>
    );
};

export default DashboardItem;