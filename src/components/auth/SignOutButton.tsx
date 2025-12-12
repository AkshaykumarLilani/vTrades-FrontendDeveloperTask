'use client';

import { Button } from '@/components/ui/Button';
import { useTransition } from 'react';
import { toast } from 'sonner';

interface SignOutButtonProps {
    signOutAction: () => Promise<void>;
}

export const SignOutButton: React.FC<SignOutButtonProps> = ({ signOutAction }) => {
    const [isPending, startTransition] = useTransition();

    const handleSignOut = () => {
        startTransition(async () => {
            try {
                await signOutAction();
            } catch (error) {
                if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
                    return;
                }
                console.error("Sign out error:", error);
                toast.error("Failed to sign out");
            }
        });
    };

    return (
        <Button onClick={handleSignOut} loading={isPending}>
            Sign Out
        </Button>
    );
};
