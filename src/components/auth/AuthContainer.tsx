import React from 'react';

interface AuthContainerProps {
    children: React.ReactNode;
    className?: string;
}

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
