import React from 'react';

/**
 * Props for the Checkbox component.
 * Extends standard HTML input attributes.
 */
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Label text to display next to the checkbox.
     */
    label?: string;
}

/**
 * A reusable checkbox component with a label.
 *
 * @param {CheckboxProps} props - The props for the checkbox.
 * @param {React.Ref<HTMLInputElement>} ref - The ref to the input element.
 * @returns {JSX.Element} The rendered checkbox component.
 */
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
                    <span className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">
                        {label}
                    </span>
                )}
            </label>
        );
    }
);

Checkbox.displayName = 'Checkbox';
