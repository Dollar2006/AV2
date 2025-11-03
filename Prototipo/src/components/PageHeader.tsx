// src/components/PageHeader.tsx

import React from 'react';
// Importe o CSS para estilização (será definido abaixo)

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    return (
        <h1 className="page-header-title">
            {title}
        </h1>
    );
};

export default PageHeader;