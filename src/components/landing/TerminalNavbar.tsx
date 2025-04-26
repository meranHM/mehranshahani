"use client"

import { navigation } from "@/data"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function TerminalNavbar() {
    const firstLinkRef = useRef<HTMLAnchorElement>(null)
    const [focusedLink, setFocusedLink] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
        if (firstLinkRef.current) {
            firstLinkRef.current.focus()
        }
    }, [])

    const navbarEls = navigation.map( (item, index) => (
        <Link
            key={item.id}
            href={item.url}
            ref={index === 0 ? firstLinkRef : null}
            className={`terminal-link z-50 text-color-neonPurple relative before:content-['➤'] before:absolute before:left-[-30px] before:opacity-0 transition duration-100 ease-in-out focus:outline-none
                ${focusedLink === index ? "before:opacity-100" : ""}`}
            onFocus={() => setFocusedLink(index)}
            onMouseEnter={() => setFocusedLink(index)}
            aria-current={pathname === item.url ? "page" : undefined}
        >
            {item.title}
        </Link>
    ))

  return (
        <nav 
            className="flex flex-col scanline px-10 py-3 gap-3 mt-1 text-md md:text-lg font-bold z-50"
            role="navigation"
        >
            {navbarEls}
        </nav>
  )
}