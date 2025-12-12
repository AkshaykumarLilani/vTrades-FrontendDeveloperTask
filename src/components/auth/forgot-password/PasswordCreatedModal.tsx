import React from 'react';
import { Dialog } from '@/components/ui/Dialog';
import Image from 'next/image';
import { tick_icon } from '@/assets';

/**
 * Props for the PasswordCreatedModal component.
 */
/**
 * Props for the PasswordCreatedModal component.
 */
interface PasswordCreatedModalProps {
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
    /**
     * Whether the primary button is in a loading state.
     * @default false
     */
    loading?: boolean;
}

/**
 * A modal dialog shown after a new password has been successfully created.
 *
 * @param {PasswordCreatedModalProps} props - The props for the modal.
 * @returns {JSX.Element} The rendered modal component.
 */
export const PasswordCreatedModal: React.FC<PasswordCreatedModalProps> = ({
    isOpen,
    onClose,
    onPrimaryClick,
    loading = false,
}) => {
    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            title="Password Created!"
            subtitle="Your password has been successfully updated. You can now use your new password to log in."
            primaryButtonText="Okay"
            onPrimaryClick={onPrimaryClick}
            loading={loading}
            icon={
                <div className="flex h-20 w-20 items-center justify-center rounded-full">
                    <Image
                        src={tick_icon}
                        alt="Success"
                        width={100}
                        height={100}
                        className="w-[100px] h-[100px] text-white"
                    />
                </div>
            }
        />
    );
};
