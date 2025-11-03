// src/components/CustomInput.tsx

import React from 'react';

interface CustomInputProps {
    label: string;
    // NOVO: Adicionar a prop 'name' para identificar o campo no formulário
    name: string; 
    placeholder?: string; // Tornando opcional, pois não é usado em todos
    value: string;
    // MUDANÇA: A função de callback deve retornar o nome do campo e o novo valor
    onChange: (name: string, value: string) => void; 
    readOnly?: boolean;
    type?: string; 
    isTextArea?: boolean; 
}

const CustomInput: React.FC<CustomInputProps> = ({ 
    label, 
    // NOVO: Adicionar 'name'
    name,
    placeholder = '', // Atribuir valor padrão
    value, 
    onChange, 
    readOnly = false, 
    type = 'text',
    isTextArea = false 
}) => {
    // FUNÇÃO QUE CHAMA O CALLBACK COM O NOME E O VALOR
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Agora passamos 'name' e 'e.target.value' para a função 'onChange'
        onChange(name, e.target.value); 
    };

    return (
        <div className="custom-input-group">
            <label>{label}</label>
            {isTextArea ? (
                <textarea
                    // Manter 'name' no elemento para acessibilidade/futuro, embora não seja usado no onChange
                    name={name} 
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    readOnly={readOnly}
                    className="custom-input-field"
                />
            ) : (
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    readOnly={readOnly}
                    className="custom-input-field"
                />
            )}
        </div>
    );
};

export default CustomInput;