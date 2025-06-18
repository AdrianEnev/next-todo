// middleware.ts (in project root)
import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
    const token = request.cookies.get('userToken')?.value
    const pathname = request.nextUrl.pathname

    // If authenticated and trying to access login or register
    if (token && (pathname === '/login' || pathname === '/register')) {
        return NextResponse.redirect(new URL('/todos', request.url))
    } 
    if (!token && (pathname === '/todos' || pathname === '/')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}

// Only apply middleware to these pages
export const config = {
    matcher: ['/login', '/register', '/todos', '/'],
}