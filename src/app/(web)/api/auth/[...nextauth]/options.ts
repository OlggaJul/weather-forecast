import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const GOOGLE_ID = process.env.GOOGLE_ID!
const GOOGLE_SECRET = process.env.GOOGLE_SECRET!

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile)
      return true
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
