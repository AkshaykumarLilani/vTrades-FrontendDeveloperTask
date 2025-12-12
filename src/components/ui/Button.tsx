import React from 'react';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'link';
    icon?: React.ReactNode;
    loading?: boolean;
    href?: string;
}

export const Button: React.FC<ButtonProps> = ({
    className = '',
    variant = 'primary',
    icon,
    loading = false,
    children,
    href,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer';

    const variants = {
        primary: 'bg-primary text-primary-foreground shadow hover:opacity-90',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:opacity-90',
        link: 'text-primary underline-offset-4 hover:underline',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${variant === 'link' ? 'h-auto p-0' : 'h-12.5 px-4 py-2'} ${className}`;

    const content = (
        <>
            {loading ? (
                <Loader2 className="animate-spin h-4 w-4" />
            ) : (
                icon
            )}
            {children}
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={`${combinedClassName} ${loading || props.disabled ? 'pointer-events-none opacity-50' : ''}`}
            >
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} disabled={loading || props.disabled} {...props}>
            {content}
        </button>
    );
};
