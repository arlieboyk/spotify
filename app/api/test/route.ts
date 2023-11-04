import { NextResponse } from "next/server";

const url = 'https://jsonplaceholder.typicode.com/users'
export async function GET(request: Request) {
    console.log(request)
    const res = await fetch(url)

    const data = await res.json();
    console.log('try')
    return NextResponse.json({ data })
}