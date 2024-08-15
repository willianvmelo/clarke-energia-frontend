import React from 'react';
import SupplierCard from './SupplierCard';

const SupplierList = ({ suppliers }) => {
    return (
        <div className="supplier-list">
            {suppliers.map((supplier, index) => (
                <SupplierCard key={index} supplier={supplier} />
            ))}
        </div>
    );
};

export default SupplierList;