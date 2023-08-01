import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // const user = request.cookies.get(COOKIES.User)?.value;
  // const nextPathname = request.nextUrl.pathname as Route;
  // const isUserExpired = !user || Date.now() > JSON.parse(user).expiresAt;
  //
  // console.log(
  //   '--- middleware',
  //   nextPathname,
  //   isUserExpired,
  //   protectedRoutes.includes(nextPathname) && isUserExpired,
  // );
  //
  // if (protectedRoutes.includes(nextPathname) && isUserExpired) {
  //   const response = NextResponse.redirect(new URL(Route.Login, request.url));
  //
  //   response.cookies.delete(COOKIES.User);
  //
  //   return response;
  // }
  // if (authRoutes.includes(nextPathname) && user) {
  //   return NextResponse.redirect(new URL(Route.Profile, request.url));
  // }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
