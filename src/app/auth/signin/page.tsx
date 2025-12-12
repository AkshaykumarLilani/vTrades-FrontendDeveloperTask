'use client';

import { Header } from '@/components/ui/Header';
import { AuthContainer } from '@/components/auth/AuthContainer';
import { SignInForm } from '@/components/auth/signin/SignInForm';

export default function SignInPage() {
    return (
        <AuthContainer>
            <Header
                title="Sign In"
                subtitle="Manage your workspace seamlessly. Sign in to continue."
            />
            <SignInForm />
        </AuthContainer>
    );
}
