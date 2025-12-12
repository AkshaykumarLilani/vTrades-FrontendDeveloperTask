"use client";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AuthButtons() {
    const router = useRouter();
    const [isSignInLoading, setIsSignInLoading] = useState(false);
    const [isSignUpLoading, setIsSignUpLoading] = useState(false);

    const handleSignIn = () => {
        setIsSignInLoading(true);
        router.push("/auth/signin");
    };

    const handleSignUp = () => {
        setIsSignUpLoading(true);
        router.push("/auth/signup");
    };

    return (
        <>
            <Button onClick={handleSignIn} loading={isSignInLoading}>
                Sign In
            </Button>
            <Button
                variant="secondary"
                onClick={handleSignUp}
                loading={isSignUpLoading}
            >
                Sign Up
            </Button>
        </>
    );
}
