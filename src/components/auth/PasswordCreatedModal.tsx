import React from 'react';
import { Dialog } from '@/components/ui/Dialog';
import Image from 'next/image';
import { tick_icon } from '@/assets';

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
                    <Image
                        src={tick_icon}
                        alt="Success"
                        width={40}
                        height={40}
                        className="w-10 h-10 text-white"
                    />
                </div>
            }
        />
    );
};
