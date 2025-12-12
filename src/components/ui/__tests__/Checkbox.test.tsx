import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '../Checkbox';
import '@testing-library/jest-dom';

describe('Checkbox Component', () => {
    it('renders correctly', () => {
        render(<Checkbox />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
    });

    it('renders with a label', () => {
        render(<Checkbox label="Accept Terms" />);
        const label = screen.getByText('Accept Terms');
        expect(label).toBeInTheDocument();
    });

    it('handles change events', () => {
        const handleChange = jest.fn();
        render(<Checkbox onChange={handleChange} />);
        const checkbox = screen.getByRole('checkbox');

        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(checkbox).toBeChecked();

        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(2);
        expect(checkbox).not.toBeChecked();
    });

    it('can be disabled', () => {
        render(<Checkbox disabled />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });

    it('applies custom className', () => {
        render(<Checkbox className="custom-class" />);
        // The className is applied to the label wrapper
        const label = screen.getByRole('checkbox').closest('label');
        expect(label).toHaveClass('custom-class');
    });

    it('forwards ref correctly', () => {
        const ref = React.createRef<HTMLInputElement>();
        render(<Checkbox ref={ref} />);
        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
});
