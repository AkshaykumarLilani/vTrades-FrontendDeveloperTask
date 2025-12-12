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
                // When the server action calls `signOut()`, it throws a `NEXT_REDIRECT` error
                // to handle the redirect. We need to catch this specific error and ignore it
                // so it's not treated as an application failure.
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
