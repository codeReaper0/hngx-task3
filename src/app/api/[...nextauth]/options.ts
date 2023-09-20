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
      async authorize(credentials) {
        return null;
        // const authResponse = await fetch(`${url}/auth/login`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: credentials?.email,
        //     password: credentials?.password,
        //     platform: "WEB",
        //   }),
        // });

        // if (authResponse.ok && resToken) {
        //   const getUser = await fetch(`${url}/users/me`, {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${resToken.access_token}`,
        //     },
        //   });
        //   const userData = await getUser.json();
        //   let user = {} as User;
        //   const useCookies = cookies();
        //   if (getUser.ok && userData) {
        //     useCookies.set("wauth_token", resToken.access_token);
        //     useCookies.set("user", JSON.stringify(userData));
        //     return (user = {
        //       id: "vhdbDS",
        //       name: "Benson Momodu",
        //       email: "benson.isaac.momodu@gmail.com",
        //       accessToken: resToken.access_token,
        //     });
        //   } else {
        //     console.log("Not geeting user details");
        //     return null;
        //   }
        // } else {
        //   // throw new Error("invalid credentails");
        //   console.log("invalid credentails");
        //   return null;
        // }
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
