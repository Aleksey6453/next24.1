async function getData(id: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
         {
        next: {
            revalidate: 60
        }
    })

    return response.json()
}

type Props = {
    params: {
        id: string
    }
}

export function generateMetadata({params: {id}}: Props ){
    return {
        title: id
    }
}

export default async function Post( {params: {id}} : Props ){
    const post = await getData(id)

    return (
        <div className="wrapPage">
            <h1 className="title">
               {post.title}
            </h1>
            <p>
                {post.body}
            </p>
        </div>
    )
}
