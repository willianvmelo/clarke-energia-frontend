import React from 'react';

const SupplierCard = ({ supplier }) => {
    return (
        
        <div className="card me-3 mb-3">
            <img className="card-img-top" src={supplier.logo} alt={`${supplier.name} logo`} />
            <div className="card-body" >
                <h5 className="card-title">{supplier.name}</h5>
                <p className="card-text"><b>Estado:</b> {supplier.state}</p>
                <p className="card-text"><b>Custo por kWh:</b> R${supplier.cost_per_kwh}</p>
                <p className="card-text"><b>Limite Mínimo de kWh:</b> {supplier.min_kwh_limit}</p>
                <p className="card-text"><b>Total de Clientes:</b> {supplier.total_clients}</p>
                <p className="card-text"><b>Avaliação Média:</b> {parseFloat(supplier.average_rating).toFixed(1)}</p>
            </div>
            
        </div>
        
    );
};

export default SupplierCard;