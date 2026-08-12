import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rewriteUrl = request.nextUrl.clone();
    const stripped = pathname === "/en" ? "/" : pathname.slice(3);
    rewriteUrl.pathname = stripped;

    const response = NextResponse.rewrite(rewriteUrl);
    response.cookies.set("locale", "en", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const response = NextResponse.next();
  response.cookies.set("locale", "de", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|manifest.json|images/).*)",
  ],
};
