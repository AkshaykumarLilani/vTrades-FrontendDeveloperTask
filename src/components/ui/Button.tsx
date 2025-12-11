import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    className = '',
    variant = 'primary',
    size = 'default',
    icon,
    children,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

    const variants = {
        primary: 'bg-primary text-primary-foreground shadow hover:opacity-90',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:opacity-90',
        link: 'text-primary underline-offset-4 hover:underline',
    };

    const sizes = {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${variant === 'link' ? 'h-auto p-0' : sizes[size]} ${className}`;

    return (
        <button className={combinedClassName} {...props}>
            {icon}
            {children}
        </button>
    );
};
