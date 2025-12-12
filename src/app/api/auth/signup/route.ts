import { NextResponse } from 'next/server';

/**
 * Handles the sign-up request.
 *
 * @param {Request} request - The incoming request object containing email, password, and name.
 * @returns {Promise<NextResponse>} JSON response indicating success or failure.
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Mock success
        return NextResponse.json(
            { message: 'Sign up successful. Please verify OTP.', email },
            { status: 200 }
        );

    } catch (_error) {
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
