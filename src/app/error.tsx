'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-2xl font-bold text-foreground">Something went wrong!</h2>
                <p className="text-muted-foreground">
                    We apologize for the inconvenience. Please try again.
                </p>
                <Button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </Button>
            </div>
        </div>
    );
}
