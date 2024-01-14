import Link from "@/node_modules/next/link"
import React from "react";

export default function AboutLayout({children}:{children: React.ReactNode;}){
    return (
        <div className="wrapPage">
             <h1>About us</h1>
             <ul>
                <li> <Link href='/about/dream'>Dream</Link> </li>
                <li> <Link href='/about/team'>Team</Link> </li>
             </ul>
             {children}
        </div>
       
    )

}