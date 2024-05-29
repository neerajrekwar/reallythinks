import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getToken } from "next-auth/jwt"

export { default } from "next-auth/middleware"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const token = await getToken({ req: request })
    const url = request.nextUrl

    if (token &&
        (
            url.pathname.startWith('/sign-in') ||
            url.pathname.startWith('/sign-up') ||
            url.pathname.startWith('/verify') ||
            url.pathname.startWith('/') 

        )
    ) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/sign-in',
        '/sign-up',
        '/',
        '/dashboard/:path*',
        '/verify/:path*'
    ]
}