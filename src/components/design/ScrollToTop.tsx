"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
    const location = usePathname()

    useEffect(() => {
        window.scrollTo({ top: 0 })
    },[location])

  return null
}