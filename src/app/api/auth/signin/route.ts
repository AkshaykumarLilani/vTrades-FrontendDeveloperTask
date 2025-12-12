import { NextResponse } from 'next/server';

/**
 * Handles the sign-in request.
 *
 * @param {Request} request - The incoming request object containing email and password.
 * @returns {Promise<NextResponse>} JSON response indicating success or failure.
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock validation
        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Mock success for specific credentials or general success
        // For demo purposes, let's say any email ending in @workhive.com works with any password
        if (email.endsWith('@workhive.com')) {
            return NextResponse.json(
                { message: 'Sign in successful', user: { email, name: 'Demo User' } },
                { status: 200 }
            );
        }

        return NextResponse.json(
            { message: 'Invalid credentials' },
            { status: 401 }
        );

    } catch (_error) {
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
