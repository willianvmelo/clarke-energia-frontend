import React from 'react';
import InputForm from './components/InputForm';

function App() {

  const fetchSuppliers = (consumption) => {
    const suppliers = [      
      {
        "name": "Fornecedor X",
        "logo": "url_to_logo",
        "state": "Estado",
        "cost_per_kwh": 0.12,
        "min_kwh_limit": 10000,
        "total_clients": 200,
        "average_rating": 4.5
      },
      {
        "name": "Fornecedor Y",
        "logo": "url_to_logo",
        "state": "Estado2",
        "cost_per_kwh": 0.11,
        "min_kwh_limit": 15000,
        "total_clients": 100,
        "average_rating": 3.5
      }
    ]

    const filteredSuppliers = suppliers.filter((supplier)=>consumption > supplier.min_kwh_limit)

    console.log(filteredSuppliers) 
    
  };

  return (
    <div className="App">
      <h1>Escolha o Melhor Fornecedor de Energia</h1>
      <InputForm onSubmit={fetchSuppliers} />
      
    </div>
  );
}

export default App;
