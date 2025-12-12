import { validateEmail } from '../validation';

describe('validateEmail', () => {
    it('should return error if email is empty', () => {
        expect(validateEmail('')).toBe('Email is required');
    });

    it('should return error if email format is invalid (no @)', () => {
        expect(validateEmail('invalidemail')).toBe('Please enter a valid email address');
    });

    it('should return error if email format is invalid (no domain)', () => {
        expect(validateEmail('user@')).toBe('Please enter a valid email address');
    });

    it('should return error if email format is invalid (no top-level domain)', () => {
        expect(validateEmail('user@domain')).toBe('Please enter a valid email address');
    });

    it('should return empty string for valid email', () => {
        expect(validateEmail('user@example.com')).toBe('');
    });
});
