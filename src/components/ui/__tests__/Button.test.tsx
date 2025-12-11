import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button';

describe('Button Component', () => {
    it('renders button text correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('applies primary variant classes by default', () => {
        render(<Button>Primary</Button>);
        const button = screen.getByRole('button', { name: /primary/i });
        expect(button).toHaveClass('bg-primary');
        expect(button).toHaveClass('text-primary-foreground');
    });

    it('applies secondary variant classes when specified', () => {
        render(<Button variant="secondary">Secondary</Button>);
        const button = screen.getByRole('button', { name: /secondary/i });
        expect(button).toHaveClass('bg-secondary');
        expect(button).toHaveClass('text-secondary-foreground');
    });

    it('renders icon when provided', () => {
        const TestIcon = <span data-testid="test-icon">Icon</span>;
        render(<Button icon={TestIcon}>With Icon</Button>);
        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
        expect(screen.getByText('With Icon')).toBeInTheDocument();
    });

    it('passes additional props to the button element', () => {
        render(<Button disabled aria-label="custom-button">Disabled</Button>);
        const button = screen.getByRole('button', { name: /custom-button/i });
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute('aria-label', 'custom-button');
    });

    it('handles onClick events', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Clickable</Button>);
        fireEvent.click(screen.getByText('Clickable'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
