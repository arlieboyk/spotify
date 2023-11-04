import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import prisma from '@/prisma/prismta'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Enter email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter password',
        },
      },
      async authorize(credentials, req) {
        /* rturn immediately when parameters are null */
        console.log(credentials)

        const { email, password } = credentials || {}

        if (!email || !password) {
          // Handle the case where email or password is missing
          return null
        }

        /* get user */
        const res = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
            password: credentials?.password,
          },
        })
        /* if user exist return user */
        if (res) {
          console.log(res)
          return {
            id: res.id.toString(),
            email: res.email,
            name: res.name,
            password: res.password /* TODO REMOVE THIS */,
          }
        } else {
          return null
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: '/auth/signin',
    signOut: '/',
    error: '/auth/signup', // Error code passed in query string as ?error=
    newUser: '/', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
