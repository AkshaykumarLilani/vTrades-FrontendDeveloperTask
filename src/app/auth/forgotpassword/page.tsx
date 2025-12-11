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

type Step = 'EMAIL' | 'LINK_SENT' | 'OTP' | 'NEW_PASSWORD' | 'PASSWORD_CREATED';

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [step, setStep] = useState<Step>('EMAIL');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

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

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const error = validateEmail(email);
        if (error) {
            setEmailError(error);
            return;
        }
        // TODO: API call to send link
        setStep('LINK_SENT');
    };

    const handleLinkSentOkay = () => {
        setStep('OTP');
    };

    const handleOtpContinue = (otp: string) => {
        // TODO: API call to verify OTP
        console.log('Verifying OTP:', otp);
        setStep('NEW_PASSWORD');
    };

    const handleUpdatePassword = (password: string) => {
        // TODO: API call to update password
        console.log('Updating password:', password);
        setStep('PASSWORD_CREATED');
    };

    const handlePasswordCreatedOkay = () => {
        router.push('/auth/signin');
    };

    return (
        <div className="w-full">
            {(step === 'EMAIL' || step === 'LINK_SENT') && (
                <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
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
                        />
                        <Button
                            className="w-full"
                            size="lg"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            )}

            <LinkSentModal
                isOpen={step === 'LINK_SENT'}
                onClose={() => { }}
                onPrimaryClick={handleLinkSentOkay}
            />

            {step === 'OTP' && (
                <EnterOtp
                    email={email}
                    onResend={() => console.log('Resend OTP')}
                    onContinue={handleOtpContinue}
                />
            )}

            {(step === 'NEW_PASSWORD' || step === 'PASSWORD_CREATED') && (
                <CreateNewPassword onUpdatePassword={handleUpdatePassword} />
            )}

            <PasswordCreatedModal
                isOpen={step === 'PASSWORD_CREATED'}
                onClose={() => { }}
                onPrimaryClick={handlePasswordCreatedOkay}
            />
        </div>
    );
}
