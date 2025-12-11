import { Header } from '@/components/ui/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import Link from 'next/link';
import Image from 'next/image';
import { google_logo, microsoft_logo } from '@/assets';
import { SeparatorWithText } from '@/components/ui/SeparatorWithText';
import React from 'react';

import { AuthContainer } from '@/components/auth/AuthContainer';

export default function SignInPage() {
    return (
        <AuthContainer>
            <Header
                title="Sign In"
                subtitle="Manage your workspace seamlessly. Sign in to continue."
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

                <Button className="w-full mt-2">
                    Sign In
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
                    Sign In with Google
                </Button>
                <Button
                    variant="secondary"
                    className="w-full relative"
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
        </AuthContainer>
    );
}
