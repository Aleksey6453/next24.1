import Link from "@/node_modules/next/link"
import { Navigation } from "./Navigation"

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Blog', href: '/blog'},
    {label: 'Blogg', href: '/blogg'},
    {label: 'About', href: '/about'},
]

const Header = () => {
    return (
        <header className='header'>
            {/* <Link href='/' className='linkHeader'>Home</Link>
            <Link href='/about' className='linkHeader'>About</Link>
            <Link href='/blog' className='linkHeader'>Blog</Link> */}

            <Navigation navLinks={navItems} />
        </header>
    )
}

export {Header}