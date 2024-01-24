import {Metadata} from "next"
import Link from '@/node_modules/next/link'
import { usePosts } from "../store/index"


async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })

    return response.json()
}

export const metadata: Metadata = {
    title: 'Blog | Next App'
}

export default async function Blog(){
    const posts = await getData()

    

    return (
        <div className="wrapPage">
            <h1 className="title">
               Blog
            </h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            Post №{post.id} {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}