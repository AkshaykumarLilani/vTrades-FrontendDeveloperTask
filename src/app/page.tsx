import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { auth, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

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
          {session?.user ? (
            <div className="flex flex-col items-center gap-4">
              <p className="text-xl font-semibold">Welcome, {session.user.name}</p>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <Button type="submit">Sign Out</Button>
              </form>
            </div>
          ) : (
            <>
              <Link href="/auth/signin">
                <Button>Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button variant="secondary">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
