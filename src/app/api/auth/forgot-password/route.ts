import { NextResponse } from 'next/server';

/**
 * Handles the forgot password request (sending OTP).
 *
 * @param {Request} request - The incoming request object containing the email address.
 * @returns {Promise<NextResponse>} JSON response indicating success or failure.
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (!email) {
            return NextResponse.json(
                { message: 'Email is required' },
                { status: 400 }
            );
        }

        // Mock success
        return NextResponse.json(
            { message: 'OTP sent to your email' },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
