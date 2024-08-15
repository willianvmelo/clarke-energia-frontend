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
        <form onSubmit={handleSubmit}>
            <label>
                Consumo Mensal de Energia (kWh):
                <input
                    type="number"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default InputForm;
