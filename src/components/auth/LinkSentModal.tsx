import React from 'react';
import { Dialog } from '@/components/ui/Dialog';

interface LinkSentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPrimaryClick: () => void;
}

export const LinkSentModal: React.FC<LinkSentModalProps> = ({
    isOpen,
    onClose,
    onPrimaryClick,
}) => {
    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            title="Link Sent Successfully!"
            subtitle="Check your inbox! We've sent you an email with instructions to reset your password."
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                </div>
            }
        />
    );
};
