import React from 'react';

interface HeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`flex flex-col gap-4 text-foreground ${className}`}>
            <h1 className="text-5xl font-bold">{title}</h1>
            {subtitle && <p className="text-[14px]">{subtitle}</p>}
        </div>
    );
};
