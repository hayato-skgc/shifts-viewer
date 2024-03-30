declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: number;
    } & DefaultSession["user"]
  }
}

import esaProvider from "@/utils/esa";
import NextAuth, { DefaultSession } from "next-auth";
import GithubProvider from 'next-auth/providers/github';

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    esaProvider({
      clientId: process.env.ESA_ID!,
      clientSecret: process.env.ESA_SECRET!
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60
  },
  callbacks: {
    async signIn({ user }) {
      const prismaUser = await prisma.users.findUnique({
        where: { email: user.email! }
      })
      if (!prismaUser) return '/?error=unauthorized'
      return true
    },
  },
  pages: {
    signIn: '/',
    error: '/?error=error'
  }
})