// import { auth } from "./auth";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// export default auth;
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

// export const config = {
//   matcher: '/dashboard/:path*',
// }
