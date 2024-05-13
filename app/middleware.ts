import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next_jwt")?.value;

  if (token) {
    const { exp }: { exp: number } = jwtDecode(token);
    const expDate = new Date((exp as number) * 1000);

    if (new Date() > expDate) {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("next_jwt");
      return response;
    }
  }

  if (["/login", "/register"].includes(request.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!["/login", "/register"].includes(request.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
