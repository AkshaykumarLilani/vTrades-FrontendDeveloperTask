import Image from 'next/image';
import React from 'react';
import { login_side_img } from '@/assets';

export const AuthSidePanel = () => {
    return (
        <div className='w-full h-full relative overflow-hidden rounded-20'>
            <Image
                src={login_side_img}
                alt="Login"
                className='w-full h-full object-cover'
                width={800}
                height={1200}
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                <h2 className="text-5xl font-bold mb-4">Welcome to WORKHIVE!</h2>
                <ul className="space-y-2 list-disc list-inside">
                    <li>
                        Employee Management: View detailed profiles, track performance, and manage attendance.
                    </li>
                    <li>
                        Performance Insights: Analyze team goals, progress, and achievements.
                    </li>
                    <li>
                        Attendance & Leaves: Track attendance patterns and manage leave requests effortlessly.
                    </li>
                </ul>
            </div>
        </div>
    );
};
