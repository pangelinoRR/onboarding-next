import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        /**
         * If the user is logged in, continue to dashboard.
         */
        if (isLoggedIn) {
          return true;
        }

        /**
         * Not authenticated. Redirect to Login.
         */
        return false;
      } else if (isLoggedIn) {
        /**
         * If the user just logged in,
         * go to the Dashboard route.
         */
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      /**
       * Default return.
       */
      return true;
    },
    jwt({ token, user }) {
      return { ...token, ...user };
    },
    session({ session, token, user }) {
      session.jwt = token.token as string;
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
