'use client';

import React from 'react';
import { Header } from '@/components/ui/Header';
import { AuthContainer } from '@/components/auth/AuthContainer';
import { SignUpForm } from '@/components/auth/signup/SignUpForm';
import { OtpVerificationForm } from '@/components/auth/signup/OtpVerificationForm';

export default function SignUpPage() {
    const [step, setStep] = React.useState<'signup' | 'otp'>('signup');
    const [email, setEmail] = React.useState('');

    return (
        <AuthContainer>
            <Header
                title={step === 'signup' ? "Sign Up" : "Verify OTP"}
                subtitle={
                    step === 'signup'
                        ? "Manage your workspace seamlessly. Sign up to continue."
                        : `Enter the OTP sent to ${email}`
                }
            />

            {step === 'signup' ? (
                <SignUpForm
                    email={email}
                    setEmail={setEmail}
                    onSuccess={() => setStep('otp')}
                />
            ) : (
                <OtpVerificationForm
                    email={email}
                    onBack={() => setStep('signup')}
                />
            )}
        </AuthContainer>
    );
}
