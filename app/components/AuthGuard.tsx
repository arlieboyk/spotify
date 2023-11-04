'use client'
import { useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'
import { useEffect } from 'react'
export default function AuthGuard({ children }: { children: React.ReactNode }) {
  /* Check if user is authenticated */
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // redirect('/auth/signin')
    },
  })

  useEffect(() => {
    console.log(session)
  }, [session])
  return <main>{children}</main>
}
