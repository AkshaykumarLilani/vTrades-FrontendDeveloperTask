import React from 'react';

/**
 * Props for the AuthContainer component.
 */
interface AuthContainerProps {
    /**
     * The content to be rendered inside the container.
     */
    children: React.ReactNode;
    /**
     * Optional class name for styling the container.
     */
    className?: string;
}

/**
 * A wrapper component for authentication pages to ensure consistent layout and max-width.
 *
 * @param {AuthContainerProps} props - The props for the container.
 * @returns {JSX.Element} The rendered auth container.
 */
export const AuthContainer: React.FC<AuthContainerProps> = ({
    children,
    className = '',
}) => {
    return (
        <div className={`flex flex-col gap-6 w-full max-w-[385px] mx-auto ${className}`}>
            {children}
        </div>
    );
};
