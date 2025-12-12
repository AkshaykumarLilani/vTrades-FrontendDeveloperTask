import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { validateEmail } from '@/lib/validation';

import { Step } from '@/types/auth';

export const useForgotPassword = () => {
    const router = useRouter();
    const [step, setStep] = useState<Step>('EMAIL');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (emailError) {
            setEmailError(validateEmail(newEmail) === 'Please enter a valid email address' ? '' : '');
        }
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const error = validateEmail(email);
        if (error) {
            setEmailError(error);
            return;
        }
        setIsLoading(true);
        try {
            const res = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (res.ok) {
                setStep('LINK_SENT');
            } else {
                toast.error(data.message || 'Failed to send link');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLinkSentOkay = () => {
        setStep('OTP');
    };

    const handleOtpContinue = async (otp: string) => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/auth/forgot-password/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });
            const data = await res.json();
            if (res.ok) {
                setStep('NEW_PASSWORD');
            } else {
                toast.error(data.message || 'Failed to verify OTP');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdatePassword = async (password: string) => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/auth/password-create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, newPassword: password }),
            });
            const data = await res.json();
            if (res.ok) {
                setStep('PASSWORD_CREATED');
            } else {
                toast.error(data.message || 'Failed to update password');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordCreatedOkay = () => {
        router.push('/auth/signin');
    };

    const handleResendOtp = () => {
        toast.info('OTP resent');
    };

    return {
        step,
        email,
        emailError,
        isLoading,
        handleEmailChange,
        handleEmailSubmit,
        handleLinkSentOkay,
        handleOtpContinue,
        handleUpdatePassword,
        handlePasswordCreatedOkay,
        handleResendOtp,
    };
};
