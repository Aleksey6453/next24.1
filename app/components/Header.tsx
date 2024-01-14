import Link from "@/node_modules/next/link"

const Header = () => {
    return (
        <header className='header'>
            <Link href='/' className='linkHeader'>Home</Link>
            <Link href='/about' className='linkHeader'>About</Link>
            <Link href='/blog' className='linkHeader'>Blog</Link>
        </header>
    )
}

export {Header}