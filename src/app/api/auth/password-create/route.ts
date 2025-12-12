import { NextResponse } from 'next/server';

/**
 * Handles the password creation/update request.
 *
 * @param {Request} request - The incoming request object containing email and new password.
 * @returns {Promise<NextResponse>} JSON response indicating success or failure.
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, newPassword } = body;

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (!email || !newPassword) {
            return NextResponse.json(
                { message: 'Email and new password are required' },
                { status: 400 }
            );
        }

        // Mock success
        return NextResponse.json(
            { message: 'Password updated successfully' },
            { status: 200 }
        );

    } catch (_error) {
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
