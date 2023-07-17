import { NextRequest, NextResponse } from 'next/server';
import { COOKIES } from '@/domain/auth/auth.constants';
import { authRoutes, protectedRoutes } from '@/router/routes';
import { Route } from '@/route.constants';

export function middleware(request: NextRequest) {
  const user = request.cookies.get(COOKIES.User)?.value;
  const nextPathname = request.nextUrl.pathname as Route;
  const isUserExpired = !user || Date.now() > JSON.parse(user).expiresAt;

  if (protectedRoutes.includes(nextPathname) && isUserExpired) {
    console.log('+++');
    request.cookies.delete(COOKIES.User);

    const response = NextResponse.redirect(new URL(Route.Login, request.url));

    response.cookies.delete(COOKIES.User);

    return response;
  }

  if (authRoutes.includes(nextPathname) && user) {
    return NextResponse.redirect(new URL(Route.Profile, request.url));
  }
}
