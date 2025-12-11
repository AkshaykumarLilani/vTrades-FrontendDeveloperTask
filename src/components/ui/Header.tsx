import React from 'react';

interface HeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`flex flex-col gap-2 text-foreground ${className}`}>
            <h1 className="text-32 font-bold tracking-[0px]">{title}</h1>
            {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
    );
};
