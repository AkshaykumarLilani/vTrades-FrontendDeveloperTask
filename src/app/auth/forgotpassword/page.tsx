'use client';

import React, { useState } from 'react';
import { Header } from '@/components/ui/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { LinkSentModal } from '@/components/auth/LinkSentModal';
import { EnterOtp } from '@/components/auth/EnterOtp';
import { CreateNewPassword } from '@/components/auth/CreateNewPassword';
import { PasswordCreatedModal } from '@/components/auth/PasswordCreatedModal';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type Step = 'EMAIL' | 'LINK_SENT' | 'OTP' | 'NEW_PASSWORD' | 'PASSWORD_CREATED';

import { AuthContainer } from '@/components/auth/AuthContainer';

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [step, setStep] = useState<Step>('EMAIL');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return 'Email is required';
        }
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        return '';
    };

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

    return (
        <div className="w-full">
            {(step === 'EMAIL' || step === 'LINK_SENT') && (
                <AuthContainer>
                    <Header
                        title="Forgot Your Password?"
                        subtitle="Don't worry! Enter your email address, and we'll send you a link to reset it."
                    />
                    <form onSubmit={handleEmailSubmit} className="flex flex-col gap-6">
                        <Input
                            label="Email Address"
                            placeholder="navinash@workhive.com"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            error={emailError}
                            required
                            disabled={isLoading}
                        />
                        <Button
                            className="w-full mt-2"
                            type="submit"
                            loading={isLoading}
                            disabled={!email}
                        >
                            Continue
                        </Button>
                    </form>
                </AuthContainer>
            )}

            <LinkSentModal
                isOpen={step === 'LINK_SENT'}
                onClose={() => { }}
                onPrimaryClick={handleLinkSentOkay}
            />

            {step === 'OTP' && (
                <EnterOtp
                    email={email}
                    onResend={() => toast.info('OTP resent')}
                    onContinue={handleOtpContinue}
                    loading={isLoading}
                />
            )}

            {(step === 'NEW_PASSWORD' || step === 'PASSWORD_CREATED') && (
                <CreateNewPassword
                    onUpdatePassword={handleUpdatePassword}
                    loading={isLoading}
                />
            )}

            <PasswordCreatedModal
                isOpen={step === 'PASSWORD_CREATED'}
                onClose={() => { }}
                onPrimaryClick={handlePasswordCreatedOkay}
                loading={isLoading}
            />
        </div>
    );
}
