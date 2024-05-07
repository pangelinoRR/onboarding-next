import axios from "@/app/lib/axios";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ROUTES } from "./constants/routes";

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
    maxAge: 30 * 60, // 30 minutes.
  },
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      /**
       * Credential properties.
       */
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      /**
       * Function to perform the login through the
       * backend API.
       */
      async authorize(credentials) {
        try {
          const result = await axios.post(ROUTES.AUTH.LOGIN, {
            email: credentials.email,
            password: credentials.password,
          });

          const { user, token } = result?.data?.data;

          return user ? { ...user, token } : null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
