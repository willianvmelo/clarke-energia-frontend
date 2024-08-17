import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
    const [consumption, setConsumption] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (consumption > 0) {
            onSubmit(consumption);
        } else {
            alert('Por favor, insira um valor válido para o consumo.');
        }
    };

    return (
        <div className="row justify-content-start mt-4 mb-4">
            <form className='col-md-6 col-10' onSubmit={handleSubmit}>
                <div class="input-group">
                    <input
                    type="number"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                    required
                    className='form-control'
                    placeholder="Consumo Mensal de Energia (kWh)"                
                    />
                    <button className='btn btn-primary' type="submit" id="searchButton">Buscar</button>
                </div>
            
            </form>
        </div>
        
    );
};

export default InputForm;
