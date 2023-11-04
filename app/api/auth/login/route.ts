import { NextResponse } from 'next/server'

type User = {
  id: number
  email: string
  password: string
  fullname: string
  role: 'user' | 'admin'
  name: string
  token: string
}

export const POST = async (request: Request & Partial<User>) => {
  console.log(request)

  return NextResponse.json({ test: 'test' })
}
