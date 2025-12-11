import React from 'react';
import { AuthSidePanel } from '@/components/auth/AuthSidePanel';


export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen items-center justify-start gap-8 p-8 bg-background overflow-hidden">
            <div className='w-full flex-1 h-full'>
                <AuthSidePanel />
            </div>
            <div className="w-full flex-1 flex flex-col items-start justify-center">
                {children}
            </div>
        </div>
    );
}
