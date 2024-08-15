import React from 'react';
import SupplierCard from './SupplierCard';

const SupplierList = ({ suppliers }) => {
    console.log(suppliers)
    if (suppliers.length === 0) {
        return <p>Nenhum fornecedor encontrado para o consumo informado.</p>;
    }

    return (
        <div className="supplier-list">
            {suppliers.map((supplier, index) => (
                <SupplierCard key={index} supplier={supplier} />
            ))}
        </div>
    );
};

export default SupplierList;