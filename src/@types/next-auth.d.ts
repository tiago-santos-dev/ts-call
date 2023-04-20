// organize-imports-disable-next-line
import NextAuth from "next-auth/next";

declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    avatar_url: string;
  }

  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}