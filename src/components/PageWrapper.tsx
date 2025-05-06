"use client"

import { usePathname } from "next/navigation"
import TransitionLayout from "./TransitionLayout"

export default function PageWrapper({ children }: {children: React.ReactNode}) {
    const pathname = usePathname()

    return (
    <TransitionLayout pathname={pathname}>
        {children}
    </TransitionLayout>
)}