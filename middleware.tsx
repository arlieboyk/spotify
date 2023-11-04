import { useRouter } from 'next/navigation'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const session = null
  //   if (session) {
  console.log(request)
  //   return NextResponse.redirect(new URL('/auth/signin', request.url))
  //   }
}
