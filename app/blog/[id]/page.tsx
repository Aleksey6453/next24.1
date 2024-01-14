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

export default function Post( {params: {id}} : Props ){
    return (
        <div className="wrapPage">
            <h1 className="title">
               Post № {id}
            </h1>
        </div>
    )
}
