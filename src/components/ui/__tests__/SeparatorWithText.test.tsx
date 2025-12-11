import React from 'react';
import { render, screen } from '@testing-library/react';
import { SeparatorWithText } from '../SeparatorWithText';

describe('SeparatorWithText', () => {
    it('renders with default text "or"', () => {
        render(<SeparatorWithText />);
        expect(screen.getByText('or')).toBeInTheDocument();
    });

    it('renders with custom text', () => {
        render(<SeparatorWithText text="and" />);
        expect(screen.getByText('and')).toBeInTheDocument();
    });
});
