import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../Input';

describe('Input Component', () => {
    it('renders input with label', () => {
        render(<Input label="Username" placeholder="Enter username" />);
        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
    });

    it('renders without label', () => {
        render(<Input placeholder="No label" />);
        expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument();
        expect(screen.getByPlaceholderText('No label')).toBeInTheDocument();
    });

    it('handles text input', () => {
        const handleChange = jest.fn();
        render(<Input onChange={handleChange} placeholder="Type here" />);
        const input = screen.getByPlaceholderText('Type here');
        fireEvent.change(input, { target: { value: 'Hello' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(input).toHaveValue('Hello');
    });

    it('toggles password visibility', () => {
        render(<Input type="password" placeholder="Password" />);
        const input = screen.getByPlaceholderText('Password');
        const toggleButton = screen.getByRole('button', { name: /show password/i });

        // Initially password type
        expect(input).toHaveAttribute('type', 'password');

        // Click to show
        fireEvent.click(toggleButton);
        expect(input).toHaveAttribute('type', 'text');
        expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument();

        // Click to hide
        fireEvent.click(toggleButton);
        expect(input).toHaveAttribute('type', 'password');
    });

    it('does not show toggle for non-password types', () => {
        render(<Input type="text" placeholder="Text input" />);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('renders error message and icon when provided', () => {
        render(<Input error="Invalid input" />);
        expect(screen.getByText('Invalid input')).toBeInTheDocument();
        const icon = screen.getByAltText('Error');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass('w-[18px] h-[18px]');
    });

    it('applies error styling when error is provided', () => {
        render(<Input error="Error" placeholder="Error input" />);
        const input = screen.getByPlaceholderText('Error input');
        expect(input).toHaveClass('border-destructive');
    });
});
