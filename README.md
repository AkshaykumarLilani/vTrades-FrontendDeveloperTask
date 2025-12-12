# vTrades Frontend Developer Task

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/AkshaykumarLilani/vTrades-FrontendDeveloperTask.git
    cd vTrades-FrontendDeveloperTask
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Environment Variables

To run the application, you need to set up environment variables for authentication.

1.  Create a `.env.local` file in the root directory.
2.  Add the following variables:

    ```env
    AUTH_GOOGLE_ID=your_google_client_id
    AUTH_GOOGLE_SECRET=your_google_client_secret
    AUTH_SECRET=your_random_secret_string
    ```

    -   **AUTH_GOOGLE_ID**: Get this from the [Google Cloud Console](https://console.cloud.google.com/).
    -   **AUTH_GOOGLE_SECRET**: Get this from the [Google Cloud Console](https://console.cloud.google.com/).
    -   **AUTH_SECRET**: A random string used to hash tokens. You can generate one using `npx auth secret`.

### Authentication Status

-   **Sign in with Google**: Fully implemented. Users can sign in, and the Home page will update to show the user's details and a "Sign Out" button.
-   **Sign in with Email & Password**: Implemented using **Mock APIs** as per the task requirements. This demonstrates the UI flow and API handling (loading states, error handling, success messages) but **does not** create a persistent session or update the Home page state (as it is not integrated with NextAuth.js).
-   **Sign in with Microsoft**: Not implemented.

### Mock Authentication Credentials

For testing the email/password authentication flow, use the following credentials:

-   **Email**: Any email ending with `@workhive.com` (e.g., `test@workhive.com`)
-   **Password**: Any password
-   **OTP**: `123456`

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

### Linting and Testing

To run the linter:

```bash
npm run lint
```

To run unit tests:

```bash
npm test
```

