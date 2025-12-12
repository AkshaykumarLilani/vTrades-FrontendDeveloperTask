"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { showing_password_icon, hidden_password_icon, error_info_icon } from '@/assets';

/**
 * Props for the Input component.
 * Extends standard HTML input attributes.
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Label text to display above the input.
     */
    label?: string;
    /**
     * Error message to display below the input.
     * If present, changes the border color to destructive.
     */
    error?: string;
}

/**
 * A reusable input component with label, error handling, and password toggle visibility.
 *
 * @param {InputProps} props - The props for the input.
 * @param {React.Ref<HTMLInputElement>} ref - The ref to the input element.
 * @returns {JSX.Element} The rendered input component.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', type = 'text', label, error, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === 'password';
        const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

        return (
            <div className="flex flex-col gap-3 w-full">
                {label && (
                    <label className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        type={inputType}
                        className={`flex h-12.5 w-full rounded-md bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground border focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 ${error
                            ? 'border-destructive'
                            : 'border-secondary'
                            } ${className}`}
                        ref={ref}
                        {...props}
                    />
                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-0 focus-visible:outline-none"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? (
                                <Image
                                    src={showing_password_icon}
                                    alt="Hide password"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5"
                                />
                            ) : (
                                <Image
                                    src={hidden_password_icon}
                                    alt="Show password"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5"
                                />
                            )}
                        </button>
                    )}
                </div>
                {error && (
                    <div className="flex items-center gap-1 mt-1">
                        <Image
                            src={error_info_icon}
                            alt="Error"
                            width={18}
                            height={18}
                            className="w-[18px] h-[18px]"
                        />
                        <p className="text-xs text-destructive">{error}</p>
                    </div>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
