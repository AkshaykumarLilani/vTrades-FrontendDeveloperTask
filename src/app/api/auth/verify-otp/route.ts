import { NextResponse } from 'next/server';

/**
 * Handles the OTP verification request for sign-up.
 *
 * @param {Request} request - The incoming request object containing email and OTP.
 * @returns {Promise<NextResponse>} JSON response indicating success or failure.
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, otp } = body;

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (!email || !otp) {
            return NextResponse.json(
                { message: 'Email and OTP are required' },
                { status: 400 }
            );
        }

        // Mock OTP validation (e.g., fixed OTP '123456')
        if (otp === '123456') {
            return NextResponse.json(
                { message: 'OTP verified successfully' },
                { status: 200 }
            );
        }

        return NextResponse.json(
            { message: 'Invalid OTP' },
            { status: 400 }
        );

    } catch (error) {
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
