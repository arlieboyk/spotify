'use client'
import { signIn, signOut } from 'next-auth/react'
import Button from './Button'

const SignIn = () => {
  return (
    <Button onClick={() => signIn()} size="md">
      SignIn
    </Button>
  )
}

const Signout = () => {
  return (
    <Button
      onClick={() => signOut({ redirect: true, callbackUrl: '/auth/signin' })}
      size="md"
    >
      SignOut
    </Button>
  )
}

export { SignIn, Signout }
