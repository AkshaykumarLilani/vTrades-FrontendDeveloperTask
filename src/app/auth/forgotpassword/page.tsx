'use client';

import React from 'react';
import { Header } from '@/components/ui/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { LinkSentModal } from '@/components/auth/forgot-password/LinkSentModal';
import { EnterOtp } from '@/components/auth/forgot-password/EnterOtp';
import { CreateNewPassword } from '@/components/auth/forgot-password/CreateNewPassword';
import { PasswordCreatedModal } from '@/components/auth/forgot-password/PasswordCreatedModal';
import { useForgotPassword } from '@/hooks/useForgotPassword';
import { AuthContainer } from '@/components/auth/AuthContainer';

export default function ForgotPasswordPage() {
    const {
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
    } = useForgotPassword();

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
                    onResend={handleResendOtp}
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
