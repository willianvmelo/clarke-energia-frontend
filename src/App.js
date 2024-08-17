import React, {useState} from 'react';
import InputForm from './components/InputForm';
import SupplierList from './components/SupplierList';
import axios from 'axios';

function App() {

  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSuppliers = async (consumption) => {
    setLoading(true);
    try {
      const response = await axios.post('https://clarke-energia-backend.vercel.app/api/filter-suppliers/', {
          consumption,
      });
      setSuppliers(response.data);
  } catch (error) {
      setSuppliers([]);
      console.error('Erro ao buscar fornecedores:', error);
  }finally {
    setLoading(false);
}
    
  };

  return (
    <div className="container mt-4">
      <h1 className=''>Encontre o Melhor Fornecedor de Energia para o seu negócio!</h1>
      <InputForm onSubmit={fetchSuppliers} />
      <SupplierList suppliers={suppliers} loading={loading}/>
    </div>
  );
}

export default App;
