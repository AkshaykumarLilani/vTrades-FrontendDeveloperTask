import React, { useState, useEffect } from 'react';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { OtpInput } from '@/components/ui/OtpInput';
import { toast } from 'sonner';
import { timer_icon } from '@/assets';
import Image from 'next/image';

import { AuthContainer } from './AuthContainer';

/**
 * Props for the EnterOtp component.
 */
interface EnterOtpProps {
    /**
     * The email address to which the OTP was sent.
     */
    email: string;
    /**
     * Callback function called when the user requests to resend the OTP.
     */
    onResend: () => void;
    /**
     * Callback function called when the user submits the OTP.
     * @param otp - The entered OTP.
     */
    onContinue: (otp: string) => void;
    /**
     * Initial timer value in seconds for the resend button.
     * @default 30
     */
    resendTimer?: number;
    /**
     * Whether the continue button is in a loading state.
     * @default false
     */
    loading?: boolean;
}

/**
 * A component for entering an OTP (One-Time Password) with a countdown timer for resending.
 *
 * @param {EnterOtpProps} props - The props for the component.
 * @returns {JSX.Element} The rendered EnterOtp component.
 */
export const EnterOtp: React.FC<EnterOtpProps> = ({
    email,
    onResend,
    onContinue,
    resendTimer = 30,
    loading = false,
}) => {
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(resendTimer);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleChangeEmail = () => {
        toast.info('This feature is not implemented yet.');
    };

    const handleResend = () => {
        onResend();
        setTimer(30); // Reset timer
    };

    return (
        <AuthContainer>
            <Header
                title="Enter OTP"
                subtitle={`Enter the OTP that we have sent to your email address ${email}.`}
            />

            <div className="flex flex-col gap-6">
                <div>
                    <Button
                        variant="link"
                        className="p-0 h-auto text-primary"
                        onClick={handleChangeEmail}
                    >
                        Change Email Address
                    </Button>
                </div>

                <OtpInput onChange={setOtp} />

                <div className="flex items-center gap-2">
                    {timer > 0 ? (
                        <div className="flex items-center gap-2 text-foreground text-sm">
                            <Image
                                src={timer_icon}
                                alt="Timer"
                                width={18}
                                height={18}
                            />
                            <p className='line-height-[18px]'>{timer} Sec</p>
                        </div>
                    ) : (
                        <Button
                            variant="link"
                            className="p-0 h-auto text-primary"
                            onClick={handleResend}
                        >
                            Resend OTP
                        </Button>
                    )}
                </div>

                <Button
                    className="w-full"
                    onClick={() => onContinue(otp)}
                    disabled={otp.length !== 6}
                    loading={loading}
                >
                    Continue
                </Button>
            </div>
        </AuthContainer>
    );
};
