import React from 'react';

/**
 * Props for the Header component.
 */
interface HeaderProps {
    /**
     * The main title text.
     */
    title: string;
    /**
     * Optional subtitle text displayed below the title.
     */
    subtitle?: string;
    /**
     * Optional class name for styling the container.
     */
    className?: string;
}

/**
 * A reusable header component with a title and an optional subtitle.
 *
 * @param {HeaderProps} props - The props for the header.
 * @returns {JSX.Element} The rendered header component.
 */
export const Header: React.FC<HeaderProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`flex flex-col gap-2 text-foreground ${className}`}>
            <h1 className="text-32 font-bold tracking-[0px]">{title}</h1>
            {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
    );
};
