import {Metadata} from 'next'
import Link from 'next/link'
// export const metadata = {
//     title: 'Blog page',
//     description: 'Blog page',
//   }

async function getData(params:type) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    return response.json()
}

export const metadata: Metadata = {
    ttitle: 'Blog | Next App'
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