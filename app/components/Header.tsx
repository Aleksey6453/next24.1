import Link from "@/node_modules/next/link"

const Header = () => {
    return (
        <header>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/blog'>Blog</Link>
        </header>
    )
}

export {Header}