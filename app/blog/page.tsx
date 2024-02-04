// 'use client'
import { Metadata } from "next"

import { Posts } from "../components/Posts"
import { PostSearch } from "../components/PostSearch"



export const metadata: Metadata = {
    title: 'Blog | Next App'
}

export default function Blog(){

    // const [posts, loading, getAllPosts] = usePosts((state) => [
    //     state.posts, 
    //     state.loading, 
    //     state.getAllPosts
    // ], shallow)

    // useEffect(() => {
    //     getAllPosts()
    // }, [getAllPosts])

    // const [posts, setPosts] = useState<any[]>([])
    // const [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     getAllPosts()
    //         .then(setPosts)
    //         .finally(() => setLoading(false))
    // }, [])
   
    return (
        <div className="wrapPage">
            <h1 className="title">
               Blog
            </h1>
            <PostSearch />
            <Posts />
            {/* {
                loading ? (
                    <h3>Loading...</h3>
                ) : (
                    <Posts posts={posts}/>
                )
            } */}
           
        </div>
    )
}