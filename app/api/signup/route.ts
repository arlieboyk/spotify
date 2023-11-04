import prisma from '@/prisma/prismta'
import { NextResponse } from 'next/server'

// export async function POST(request: Request) {
//   const res = request.json()
//   console.log(res)
//   return Response.json({ res })
// }

export const POST = async (request: Request) => {
  const res = request.json()
  return Response.json({ res })
}
