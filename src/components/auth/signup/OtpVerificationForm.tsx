'use client';

import React from 'react';
import { OtpInput } from '@/components/ui/OtpInput';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface OtpVerificationFormProps {
    email: string;
    onBack: () => void;
}

export const OtpVerificationForm: React.FC<OtpVerificationFormProps> = ({ email, onBack }) => {
    const [otp, setOtp] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const router = useRouter();

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch('/api/auth/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('OTP verified successfully');
                router.push('/auth/signin');
            } else {
                toast.error(data.message || 'Failed to verify OTP');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <form className="flex flex-col gap-6" onSubmit={handleVerifyOtp}>
                <OtpInput onChange={setOtp} disabled={isLoading} />
                <Button
                    className="w-full mt-2"
                    type="submit"
                    loading={isLoading}
                    disabled={otp.length !== 6}
                >
                    Verify OTP
                </Button>
            </form>
            <div className="text-center text-sm text-foreground mt-4">
                <button
                    onClick={onBack}
                    className="font-medium text-primary hover:underline"
                >
                    Back to Sign Up
                </button>
            </div>
        </>
    );
};
