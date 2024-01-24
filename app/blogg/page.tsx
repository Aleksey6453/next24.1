import { PostSearch } from '@/components/PostSearch'
import { Posts } from '@/components/Posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog | Next App'
}

export default function Blogg(){
    return (
        <div className="wrapPage">
            <h1 className="title">
                Blogg
            </h1>
            <PostSearch />
            <Posts />
        </div>
    )
}