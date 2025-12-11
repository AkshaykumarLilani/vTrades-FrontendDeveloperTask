import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    className = '',
    variant = 'primary',
    icon,
    children,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2';

    const variants = {
        primary: 'bg-primary text-primary-foreground shadow hover:opacity-90',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:opacity-90',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    return (
        <button className={combinedClassName} {...props}>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};
