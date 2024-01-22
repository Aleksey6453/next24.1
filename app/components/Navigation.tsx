'use client';
import Link from "@/node_modules/next/link";
import { usePathname } from "@/node_modules/next/navigation";
import { type } from "os";

type NavLink = {
    label: string,
    href: string
}

type Props = {
    navLinks: NavLink[]
}



const Navigation = ({navLinks}: Props) => {
    const pathname = usePathname()

  return (
    <>
        {navLinks.map((link) => {
        const isActive = pathname === link.href

        return (
            <Link key={link.label} href={link.href} className={isActive ? 'lime' : 'linkHeader'}>
              {link.label}
            </Link>
        )
        })}
    </>
  )
  
  
}

export {Navigation}
