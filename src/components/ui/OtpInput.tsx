import React, { useRef, useState, useEffect } from 'react';
import { Input } from './Input';

/**
 * Props for the OtpInput component.
 */
interface OtpInputProps {
    /**
     * Number of OTP digits.
     * @default 6
     */
    length?: number;
    /**
     * Callback function called when the OTP value changes.
     * @param otp - The current OTP string.
     */
    onChange: (otp: string) => void;
    /**
     * Whether the input is disabled.
     */
    disabled?: boolean;
}

/**
 * A reusable OTP input component that handles multiple input fields for entering a one-time password.
 * Supports auto-focus, backspace navigation, and pasting.
 *
 * @param {OtpInputProps} props - The props for the OTP input.
 * @returns {JSX.Element} The rendered OTP input component.
 */
export const OtpInput: React.FC<OtpInputProps> = ({ length = 6, onChange, disabled }) => {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (inputRefs.current[0] && !disabled) {
            inputRefs.current[0].focus();
        }
    }, [disabled]);

    const handleChange = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (disabled) return;
        const value = e.target.value;
        if (isNaN(Number(value))) return;

        const newOtp = [...otp];
        // Allow only one digit
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
        onChange(newOtp.join(''));

        // Move to next input if value is entered
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (disabled) return;
        if (
            e.key === 'Backspace' &&
            !otp[index] &&
            index > 0 &&
            inputRefs.current[index - 1]
        ) {
            // Move to previous input on backspace if current is empty
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        if (disabled) return;
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain').slice(0, length);
        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = [...otp];
        pastedData.split('').forEach((char, index) => {
            newOtp[index] = char;
            if (inputRefs.current[index]) {
                inputRefs.current[index]!.value = char;
            }
        });
        setOtp(newOtp);
        onChange(newOtp.join(''));

        // Focus the last filled input or the next empty one
        const nextIndex = Math.min(pastedData.length, length - 1);
        inputRefs.current[nextIndex]?.focus();
    };

    return (
        <div className="flex gap-3 justify-between">
            {otp.map((data, index) => (
                <div key={index} className="w-12">
                    <Input
                        ref={(input) => {
                            inputRefs.current[index] = input;
                        }}
                        value={data}
                        placeholder='0'
                        onChange={(e) => handleChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className="w-12 h-12 text-center text-xl p-0"
                        maxLength={1}
                        disabled={disabled}
                    />
                </div>
            ))}
        </div >
    );
};
