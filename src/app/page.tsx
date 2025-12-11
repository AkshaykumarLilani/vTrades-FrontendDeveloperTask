import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-sm flex flex-col gap-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            vTrades/DE5 Frontend Developer Task
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Submitted by{" "}
            <a
              href="https://akshaylilani.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Akshay Lilani
            </a >
          </p>
          <a
            href="https://github.com/AkshaykumarLilani/vTrades-FrontendDeveloperTask"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:underline"
          >
            View on GitHub
          </a>
        </div>

        <div className="flex gap-4 items-center justify-center mt-8">
          <Link href="/auth/signin">
            <Button size="lg">Sign In</Button>
          </Link>
          <Link href="/auth/signup">
            <Button variant="secondary" size="lg">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
