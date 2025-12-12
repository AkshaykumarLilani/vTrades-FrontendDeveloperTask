import React from 'react';
import { Dialog } from '@/components/ui/Dialog';
import Image from 'next/image';
import { mail_icon } from '@/assets';

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
                    <Image
                        src={mail_icon}
                        alt="Mail"
                        width={40}
                        height={40}
                        className="w-10 h-10 text-white"
                    />
                </div>
            }
        />
    );
};
