import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vTrades - Frontend Developer Task",
  description: "vTrades Frontend Developer Task - Built with Next.js, Tailwind CSS, and TypeScript.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "vTrades - Frontend Developer Task",
    description: "vTrades Frontend Developer Task - Built with Next.js, Tailwind CSS, and TypeScript.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'vTrades Open Graph Image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
