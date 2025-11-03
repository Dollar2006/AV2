// src/components/ModalForm.tsx

import React from 'react';
import ActionButton from './ActionButton';
import { Item } from './DataTableDisplayCard'; 

// Tipo genérico para o formulário.
// ATENÇÃO: Seus objetos de dados (Item) devem ser compatíveis com esta tipagem no DashboardItem.tsx
export interface FormData { 
    [key: string]: any; 
}

interface ModalFormProps {
    isOpen: boolean;
    onClose: () => void;
    // O onSubmit agora recebe o evento de formulário, pois a lógica de dados está no pai.
    onSubmit: (e: React.FormEvent) => void; 
    initialData: Item | null; 
    modalTitle: string; 
    children: React.ReactNode; 
    submitButtonText: string;
}


const ModalForm: React.FC<ModalFormProps> = ({ 
    isOpen, 
    onClose, 
    onSubmit, 
    modalTitle, 
    children,   
    submitButtonText 
}) => {
    
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop"> 
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{modalTitle}</h2>
                    <button onClick={onClose} className="modal-close-button">&times;</button>
                </div>
                
                {/* O handleSubmit chama a função onSubmit do DashboardItem.tsx */}
                <form onSubmit={onSubmit} className="modal-form">
                    
                    {children} 

                    <div className="modal-actions">
                        <ActionButton 
                            type="submit"
                            primary={true}
                            className="modal-submit-button"
                        >
                            {submitButtonText}
                        </ActionButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;