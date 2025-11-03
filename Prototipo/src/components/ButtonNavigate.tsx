// ButtonNavigate.tsx (Atualizado)

import React from 'react';

// 1. Definir a Interface
interface LinkButtonProps {
  onNavigate: (path: string) => void;
  to: string;
  children: React.ReactNode;
  
  /**
   * Propriedade opcional para passar classes CSS
   */
  className?: string; 
}

// 2. Criar o Componente
const ButtonNavigate = ({ onNavigate, to, children, className }: LinkButtonProps) => {

  const handleClick = () => {
    onNavigate(to);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default ButtonNavigate;