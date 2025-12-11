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
    -   **AUTH_SECRET**: A random string used to hash tokens. You can generate one using `openssl rand -base64 32`.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
