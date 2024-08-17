import React from 'react';
import { render, screen } from '@testing-library/react';
import SupplierCard from './SupplierCard';

const mockSupplier = {
    name: 'Fornecedor A',
    logo: 'https://logo.png',
    state: 'São Paulo',
    cost_per_kwh: 0.5,
    min_kwh_limit: 500,
    total_clients: 100,
    average_rating: 4.5
};

describe('SupplierCard Component', () => {
    test('renderiza dados do fornecedor', () => {
        render(<SupplierCard supplier={mockSupplier} />);
        expect(screen.getByText('Fornecedor A')).toBeInTheDocument();
        expect(screen.getByText((_, element) => element.textContent === 'Estado: São Paulo')).toBeInTheDocument();
        expect(screen.getByText((_, element) => element.textContent === 'Custo por kWh: R$0.5')).toBeInTheDocument();
        expect(screen.getByText((_, element) => element.textContent === 'Limite Mínimo de kWh: 500')).toBeInTheDocument();
        expect(screen.getByText((_, element) => element.textContent === 'Total de Clientes: 100')).toBeInTheDocument();
        expect(screen.getByText((_, element) => element.textContent === 'Avaliação Média: 4.5')).toBeInTheDocument();
        
    });
});
