'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import Link from 'next/link';
import Image from 'next/image';
import { google_logo, microsoft_logo } from '@/assets';
import { SeparatorWithText } from '@/components/ui/SeparatorWithText';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const SignInForm = () => {
    const [isGoogleLoading, setIsGoogleLoading] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const router = useRouter();

    const handleNotImplemented = (e: React.MouseEvent) => {
        e.preventDefault();
        toast.info('Functionality not implemented');
    };

    const handleGoogleSignIn = async () => {
        try {
            setIsGoogleLoading(true);
            await signIn('google', { callbackUrl: '/' });
        } catch (error) {
            toast.error("Failed to sign in with Google");
            setIsGoogleLoading(false);
        }
    };

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('Signed in successfully');
                router.push('/');
            } else {
                toast.error(data.message || 'Failed to sign in');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <form className="flex flex-col gap-6" onSubmit={handleSignIn}>
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
                </div>

                <div className="flex items-center justify-between">
                    <Checkbox label="Remember me" />
                    <Link
                        href="/auth/forgotpassword"
                        className="text-xs font-medium text-primary hover:underline"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <Button
                    className="w-full mt-2"
                    type="submit"
                    loading={isLoading}
                    disabled={!email || !password}
                >
                    Sign In
                </Button>
            </form>

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
                    Sign In with Google
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
                    Sign In with Microsoft
                </Button>
            </div>

            <div className="text-center text-xs text-foreground mt-4">
                Don&apos;t have an account?{' '}
                <Link
                    href="/auth/signup"
                    className="font-medium text-primary hover:underline"
                >
                    Sign Up
                </Link>
            </div>
        </>
    );
};
