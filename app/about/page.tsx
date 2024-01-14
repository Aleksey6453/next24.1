import Link from "@/node_modules/next/link"

export const metadata = {
    title: 'About page',
    description: 'About page',
  }

export default function About(){
    return (
        <div className="wrapPage">
            <h1 className="title">
                About. Select subitem
            </h1>
        </div>
    )
}