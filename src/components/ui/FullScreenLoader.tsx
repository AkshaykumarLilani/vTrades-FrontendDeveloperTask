import { Loader2 } from "lucide-react";

export function FullScreenLoader() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <Loader2 className="animate-spin h-10 w-10 text-primary" />
        </div>
    );
}
