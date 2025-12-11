import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className = '', label, ...props }, ref) => {
        return (
            <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
                <div className="relative flex items-center">
                    <input
                        type="checkbox"
                        className="peer h-5 w-5 rounded border border-secondary bg-secondary checked:bg-primary checked:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                        ref={ref}
                        {...props}
                    />
                </div>
                {label && (
                    <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">
                        {label}
                    </span>
                )}
            </label>
        );
    }
);

Checkbox.displayName = 'Checkbox';
