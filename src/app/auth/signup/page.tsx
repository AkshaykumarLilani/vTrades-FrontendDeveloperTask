'use client';

import { Header } from '@/components/ui/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { google_logo, microsoft_logo } from '@/assets';
import { SeparatorWithText } from '@/components/ui/SeparatorWithText';
import React from 'react';
import { toast } from 'sonner';

import { AuthContainer } from '@/components/auth/AuthContainer';

export default function SignUpPage() {
    const handleNotImplemented = (e: React.MouseEvent) => {
        e.preventDefault();
        toast.info('Functionality not implemented');
    };

    return (
        <AuthContainer>
            <Header
                title="Sign Up"
                subtitle="Manage your workspace seamlessly. Sign up to continue."
            />

            <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <Input
                        label="Email Address"
                        placeholder="navinash@workhive.com"
                        type="email"
                    />
                    <Input
                        label="Password"
                        placeholder="***************"
                        type="password"
                    />
                    <Input
                        label="Confirm Password"
                        placeholder="***************"
                        type="password"
                    />
                </div>

                <Button className="w-full mt-2" onClick={handleNotImplemented}>
                    Sign Up
                </Button>
            </form>

            <SeparatorWithText />

            <div className="flex flex-col gap-3">
                <Button
                    variant="secondary"
                    className="w-full relative"
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
        </AuthContainer>
    );
}
