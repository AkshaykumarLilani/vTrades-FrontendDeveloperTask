import React, { useState } from 'react';
import { Header } from '@/components/ui/Header';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

import { AuthContainer } from '../AuthContainer';

/**
 * Props for the CreateNewPassword component.
 */
/**
 * Props for the CreateNewPassword component.
 */
interface CreateNewPasswordProps {
    /**
     * Callback function called when the user submits the new password.
     * @param password - The new password.
     */
    onUpdatePassword: (password: string) => void;
    /**
     * Whether the update button is in a loading state.
     * @default false
     */
    loading?: boolean;
}

/**
 * A component for creating a new password with confirmation validation.
 *
 * @param {CreateNewPasswordProps} props - The props for the component.
 * @returns {JSX.Element} The rendered CreateNewPassword component.
 */
export const CreateNewPassword: React.FC<CreateNewPasswordProps> = ({
    onUpdatePassword,
    loading = false,
}) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Oops! Passwords Don't Match");
            return;
        }
        setError('');
        onUpdatePassword(password);
    };

    return (
        <AuthContainer>
            <Header
                title="Create New Password"
                subtitle="Choose a strong and secure password to keep your account safe. Make sure it's easy for you to remember, but hard for others to guess!"
            />

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <Input
                        label="Password"
                        placeholder="Workhiveadmin"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                    <Input
                        label="Re-enter your new password"
                        placeholder="****************"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={error}
                        disabled={loading}
                    />
                </div>

                <Button
                    className="w-full"
                    type="submit"
                    loading={loading}
                    disabled={!password || !confirmPassword}
                >
                    Update Password
                </Button>
            </form>
        </AuthContainer>
    );
};
