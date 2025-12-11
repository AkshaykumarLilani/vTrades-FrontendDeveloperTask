import React from 'react';
import { Dialog } from '@/components/ui/Dialog';

interface PasswordCreatedModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPrimaryClick: () => void;
}

export const PasswordCreatedModal: React.FC<PasswordCreatedModalProps> = ({
    isOpen,
    onClose,
    onPrimaryClick,
}) => {
    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            title="Password Created!"
            subtitle="Your password has been successfully updated. You can now use your new password to log in."
            primaryButtonText="Okay"
            onPrimaryClick={onPrimaryClick}
            icon={
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
            }
        />
    );
};
