import { NextResponse } from "@/node_modules/next/server";
import {posts} from './posts'

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url)
    const query = searchParams.get('q')
    let currentPosts = posts;

    if(query){
        currentPosts = posts.filter(posts => posts.title.
        toLowerCase().includes(query.toLowerCase()))
    }


    return NextResponse.json(posts)
}

export async function POST(req:Request) {
    const body = await req.json()

    console.log(body)

    return NextResponse.json({body})
}