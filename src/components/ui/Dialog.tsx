import React from 'react';
import { Button } from './Button';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    primaryButtonText: string;
    onPrimaryClick?: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
    isOpen,
    onClose,
    icon,
    title,
    subtitle,
    primaryButtonText,
    onPrimaryClick,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-full max-w-md rounded-lg bg-secondary p-6 shadow-lg flex flex-col items-center text-center">
                <div className="mb-4">{icon}</div>
                <h2 className="mb-2 text-[20px] font-semibold text-primary-foreground">
                    {title}
                </h2>
                <p className="mb-6 text-[14px] text-[#DADADA]">
                    {subtitle}
                </p>
                <Button
                    variant="primary"
                    className="w-full text-[16px]"
                    onClick={onPrimaryClick}
                >
                    {primaryButtonText}
                </Button>
            </div>
            {/* Overlay click to close - optional, but good UX */}
            <div className="absolute inset-0 -z-10" onClick={onClose} />
        </div>
    );
};
