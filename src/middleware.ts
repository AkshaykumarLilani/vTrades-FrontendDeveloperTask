import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth")
    if (req.auth && isAuthPage) {
        return NextResponse.redirect(new URL("/", req.nextUrl))
    }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
