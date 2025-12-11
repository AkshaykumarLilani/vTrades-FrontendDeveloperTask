import { Header } from '@/components/ui/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { google_logo, microsoft_logo } from '@/assets';
import { SeparatorWithText } from '@/components/ui/SeparatorWithText';
import React from 'react';

export default function SignUpPage() {
    return (
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
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

                <Button className="w-full mt-2" size="lg">
                    Sign Up
                </Button>
            </form>

            <SeparatorWithText />

            <div className="flex flex-col gap-3">
                <Button
                    variant="secondary"
                    className="w-full relative"
                    size="lg"
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
                    size="lg"
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

            <div className="text-center text-sm text-muted-foreground mt-4">
                Already have an account?{' '}
                <Link
                    href="/auth/signin"
                    className="font-medium text-primary hover:underline"
                >
                    Sign In
                </Link>
            </div>
        </div>
    );
}
