import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import InputForm from './InputForm';

describe('InputForm Component', () => {
    test('renderiza botão e input', () => {
        render(<InputForm onSubmit={jest.fn()} />);
        expect(screen.getByPlaceholderText('Consumo Mensal de Energia (kWh)')).toBeInTheDocument();
        expect(screen.getByText('Buscar')).toBeInTheDocument();
    });

    test('chama onSubmit com input válido', () => {
        const mockSubmit = jest.fn();
        render(<InputForm onSubmit={mockSubmit} />);

        fireEvent.change(screen.getByPlaceholderText('Consumo Mensal de Energia (kWh)'), {
            target: { value: '1000' },
        });
        fireEvent.click(screen.getByText('Buscar'));

        expect(mockSubmit).toHaveBeenCalledWith('1000');
    });

    test('Mostra alerta com input inválido', () => {
        window.alert = jest.fn();  
        render(<InputForm onSubmit={jest.fn()} />);

        fireEvent.change(screen.getByPlaceholderText('Consumo Mensal de Energia (kWh)'), {
            target: { value: '0' },
        });
        fireEvent.click(screen.getByText('Buscar'));

        expect(window.alert).toHaveBeenCalledWith('Por favor, insira um valor válido para o consumo.');
    });
});