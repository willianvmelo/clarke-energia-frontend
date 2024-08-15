import React from 'react';

const SupplierCard = ({ supplier }) => {
    return (
        <div className="supplier-card">
            <img src={supplier.logo} alt={`${supplier.name} logo`} />
            <h2>{supplier.name}</h2>
            <p>Estado: {supplier.state}</p>
            <p>Custo por kWh: R${supplier.cost_per_kwh}</p>
            <p>Limite Mínimo de kWh: {supplier.min_kwh_limit}</p>
            <p>Total de Clientes: {supplier.total_clients}</p>
            <p>Avaliação Média: {supplier.average_rating}</p>
        </div>
    );
};

export default SupplierCard;