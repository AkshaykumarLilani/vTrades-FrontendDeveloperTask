import React from 'react';
import { Dialog } from '@/components/ui/Dialog';
import Image from 'next/image';
import { mail_icon } from '@/assets';

/**
 * Props for the LinkSentModal component.
 */
interface LinkSentModalProps {
    /**
     * Whether the modal is open.
     */
    isOpen: boolean;
    /**
     * Callback function called when the modal is requested to close.
     */
    onClose: () => void;
    /**
     * Callback function called when the primary button is clicked.
     */
    onPrimaryClick: () => void;
}

/**
 * A modal dialog shown after a password reset link has been sent.
 *
 * @param {LinkSentModalProps} props - The props for the modal.
 * @returns {JSX.Element} The rendered modal component.
 */
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
