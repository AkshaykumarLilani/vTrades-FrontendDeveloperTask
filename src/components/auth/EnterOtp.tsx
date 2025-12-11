import React, { useState, useEffect } from 'react';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { OtpInput } from '@/components/ui/OtpInput';
import { toast } from 'sonner';
import { timer_icon } from '@/assets';
import Image from 'next/image';

import { AuthContainer } from './AuthContainer';

interface EnterOtpProps {
    email: string;
    onResend: () => void;
    onContinue: (otp: string) => void;
    resendTimer?: number;
}

export const EnterOtp: React.FC<EnterOtpProps> = ({
    email,
    onResend,
    onContinue,
    resendTimer = 30,
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
                            <span>{timer} Sec</span>
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
                >
                    Continue
                </Button>
            </div>
        </AuthContainer>
    );
};
