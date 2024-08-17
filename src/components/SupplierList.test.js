import React from 'react';
import { render, screen } from '@testing-library/react';
import SupplierList from './SupplierList';

const mockSuppliers = [
    {
        name: 'Fornecedor A',
        logo: 'https://logo.png',
        state: 'São Paulo',
        cost_per_kwh: 0.5,
        min_kwh_limit: 500,
        total_clients: 100,
        average_rating: 4.5
    }
];

describe('SupplierList Component', () => {
    test('mostra spinner quando está carregando', () => {
        render(<SupplierList suppliers={[]} loading={true} />);
        expect(screen.getByText('Buscando Fornecedores...')).toBeInTheDocument();
    });

    test('mostra alerta quando nenhum fornecedor é encontrado', () => {
        render(<SupplierList suppliers={[]} loading={false} />);
        expect(screen.getByText('Nenhum fornecedor encontrado.')).toBeInTheDocument();
    });

    test('renderiza fornecedor quando é encontrado', () => {
        render(<SupplierList suppliers={mockSuppliers} loading={false} />);        
        expect(screen.getByText('Fornecedor A')).toBeInTheDocument();
        expect(screen.getByText((_, element) => element.textContent === 'Estado: São Paulo')).toBeInTheDocument();
        expect(screen.getByText((_, element) => element.textContent === 'Custo por kWh: R$0.5')).toBeInTheDocument();
        expect(screen.getByText((_, element) => element.textContent === 'Limite Mínimo de kWh: 500')).toBeInTheDocument();
        expect(screen.getByText((_, element) => element.textContent === 'Total de Clientes: 100')).toBeInTheDocument();
        expect(screen.getByText((_, element) => element.textContent === 'Avaliação Média: 4.5')).toBeInTheDocument();
    });
});
