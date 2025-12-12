import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { OtpInput } from '../OtpInput';
import '@testing-library/jest-dom';

describe('OtpInput Component', () => {
    const mockOnChange = jest.fn();

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    it('renders the correct number of input fields', () => {
        render(<OtpInput onChange={mockOnChange} />);
        const inputs = screen.getAllByRole('textbox');
        expect(inputs).toHaveLength(6);
    });

    it('renders custom length of input fields', () => {
        render(<OtpInput length={4} onChange={mockOnChange} />);
        const inputs = screen.getAllByRole('textbox');
        expect(inputs).toHaveLength(4);
    });

    it('focuses the first input on mount', () => {
        render(<OtpInput onChange={mockOnChange} />);
        const inputs = screen.getAllByRole('textbox');
        expect(inputs[0]).toHaveFocus();
    });

    it('calls onChange with the correct value when typing', () => {
        render(<OtpInput onChange={mockOnChange} />);
        const inputs = screen.getAllByRole('textbox');

        fireEvent.change(inputs[0], { target: { value: '1' } });
        expect(mockOnChange).toHaveBeenCalledWith('1');

        fireEvent.change(inputs[1], { target: { value: '2' } });
        expect(mockOnChange).toHaveBeenCalledWith('12');
    });

    it('moves focus to the next input when a digit is entered', () => {
        render(<OtpInput onChange={mockOnChange} />);
        const inputs = screen.getAllByRole('textbox');

        fireEvent.change(inputs[0], { target: { value: '1' } });
        expect(inputs[1]).toHaveFocus();
    });

    it('moves focus to the previous input on backspace if current is empty', () => {
        render(<OtpInput onChange={mockOnChange} />);
        const inputs = screen.getAllByRole('textbox');

        // Fill first two inputs
        fireEvent.change(inputs[0], { target: { value: '1' } });
        fireEvent.change(inputs[1], { target: { value: '2' } });
        expect(inputs[2]).toHaveFocus();

        // Move focus back to 2nd input manually (simulating user navigation or just being there)
        inputs[1].focus();

        // Backspace on 2nd input (which has value) should just clear it (handled by change event usually, but here we test keydown logic for navigation)
        // Actually, the logic is: if backspace and !otp[index] and index > 0 -> move prev.
        // So we need to clear it first or be on an empty input.

        // Let's test being on 3rd input (empty) and hitting backspace
        inputs[2].focus();
        fireEvent.keyDown(inputs[2], { key: 'Backspace' });
        expect(inputs[1]).toHaveFocus();
    });

    it('handles pasting correctly', () => {
        render(<OtpInput onChange={mockOnChange} />);
        const inputs = screen.getAllByRole('textbox');

        const pasteData = '123456';
        const clipboardEvent = {
            clipboardData: {
                getData: () => pasteData,
            },
            preventDefault: jest.fn(),
        };

        fireEvent.paste(inputs[0], clipboardEvent);

        expect(mockOnChange).toHaveBeenCalledWith('123456');
        expect(inputs[5]).toHaveFocus();
    });

    it('does not allow non-numeric input', () => {
        render(<OtpInput onChange={mockOnChange} />);
        const inputs = screen.getAllByRole('textbox');

        fireEvent.change(inputs[0], { target: { value: 'a' } });
        expect(mockOnChange).not.toHaveBeenCalled();
        expect(inputs[0]).toHaveValue('');
    });

    it('respects the disabled prop', () => {
        render(<OtpInput onChange={mockOnChange} disabled />);
        const inputs = screen.getAllByRole('textbox');

        inputs.forEach((input) => {
            expect(input).toBeDisabled();
        });

        // Should not focus first input on mount if disabled
        expect(inputs[0]).not.toHaveFocus();
    });
});
