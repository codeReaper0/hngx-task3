import type {NextAuthOptions} from "next-auth";
import {cookies} from "next/headers";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  id: string;
  name: string;
  email: string;
  accessToken: string;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "text", placeholder: "mail@gmail.com"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials, req) {
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  callbacks: {
    async redirect({url, baseUrl}) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};
