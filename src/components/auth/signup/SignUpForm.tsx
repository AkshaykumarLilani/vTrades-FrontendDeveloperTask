'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { SeparatorWithText } from '@/components/ui/SeparatorWithText';
import Link from 'next/link';
import Image from 'next/image';
import { google_logo, microsoft_logo } from '@/assets';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';

interface SignUpFormProps {
    email: string;
    setEmail: (email: string) => void;
    onSuccess: () => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ email, setEmail, onSuccess }) => {
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = React.useState(false);

    const handleNotImplemented = (e: React.MouseEvent) => {
        e.preventDefault();
        toast.info('Functionality not implemented');
    };

    const handleGoogleSignIn = async () => {
        try {
            setIsGoogleLoading(true);
            await signIn('google', { callbackUrl: '/' });
        } catch (error) {
            toast.error("Failed to sign up with Google");
            setIsGoogleLoading(false);
        }
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoading(true);

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, name: 'New User' }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('Sign up successful. Please verify OTP.');
                onSuccess();
            } else {
                toast.error(data.message || 'Failed to sign up');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSignUp}>
            <div className="flex flex-col gap-6">
                <Input
                    label="Email Address"
                    placeholder="navinash@workhive.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                />
                <Input
                    label="Password"
                    placeholder="***************"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                />
                <Input
                    label="Confirm Password"
                    placeholder="***************"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={isLoading}
                />
            </div>

            <Button
                className="w-full mt-2"
                type="submit"
                loading={isLoading}
                disabled={!email || !password || !confirmPassword}
            >
                Sign Up
            </Button>

            <SeparatorWithText />

            <div className="flex flex-col gap-3">
                <Button
                    variant="secondary"
                    className="w-full relative"
                    onClick={handleGoogleSignIn}
                    loading={isGoogleLoading}
                    icon={
                        <Image
                            src={google_logo}
                            alt="Google"
                            width={20}
                            height={20}
                        />
                    }
                >
                    Sign Up with Google
                </Button>
                <Button
                    variant="secondary"
                    className="w-full relative"
                    onClick={handleNotImplemented}
                    icon={
                        <Image
                            src={microsoft_logo}
                            alt="Microsoft"
                            width={20}
                            height={20}
                        />
                    }
                >
                    Sign Up with Microsoft
                </Button>
            </div>

            <div className="text-center text-sm text-foreground mt-4">
                Already have an account?{' '}
                <Link
                    href="/auth/signin"
                    className="font-medium text-primary hover:underline"
                >
                    Sign In
                </Link>
            </div>
        </form>
    );
};
