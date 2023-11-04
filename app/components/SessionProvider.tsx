'use client'
import { SessionProvider } from 'next-auth/react'
const SessionProviderComp = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default SessionProviderComp
