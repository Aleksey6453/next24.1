import { NextResponse } from "@/node_modules/next/server";
import {posts} from './posts'

export async function GET(req: Request) {
    return NextResponse.json(posts)
}

export async function POST(req:Request) {
    const body = await req.json()

    console.log(body)

    return NextResponse.json({body})
}