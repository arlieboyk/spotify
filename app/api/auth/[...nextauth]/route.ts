import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import prisma from '@/prisma/prismta'
import CredentialsProvider from 'next-auth/providers/credentials'
import SpotifyProvider from 'next-auth/providers/spotify'
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
          console.log('user exit', res.name)
          const { id, email, name } = res
          return {
            id: String(id),
            email,
            name,
          }
        } else {
          console.log('user not found')
          throw new Error(JSON.stringify({ errors: 'error', status: false }))
        }
      },
    }),

    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/',
    error: '/auth/error', // Error code passed in query string as ?error=
    newUser: '/', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
