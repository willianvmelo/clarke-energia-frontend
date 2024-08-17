import React from 'react';
import SupplierCard from './SupplierCard';
import { Spinner } from 'react-bootstrap';

const SupplierList = ({ suppliers, loading }) => {
    
    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Buscando Fornecedores...</span>
                </Spinner>
            </div>
        );
    }

    if (!suppliers.length) {
        return (
            <div className="alert alert-warning text-center" role="alert">
                Nenhum fornecedor encontrado.
            </div>
        );
    }

    return (
        <div className="row justify-content-start align-items-start ms-1">
            {suppliers.map((supplier, index) => (
                <SupplierCard key={index} supplier={supplier} />
            ))}
        </div>
    );
};

export default SupplierList;