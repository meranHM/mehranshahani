"use client"

import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { AnimatePresence } from "framer-motion"
import GlitchTransition from "./design/GlitchTransition"
import RetroTransition from "./design/RetroTransition"
import RetroVersion from "@/app/retro-version/page"


export default function TransitionLayout({ children, pathname }: { children: React.ReactNode, pathname: string }) {
    const { isRetro, isRetroPending, shake } = useSelector((state: RootState) => state.retro)

    if (isRetroPending) {
        return <RetroTransition />
    }

    if (isRetro) {
        return <RetroVersion />
    }

    return (
        <AnimatePresence mode="wait">
            <div
                id="app-wrapper"
                className={shake ? "animate-retroShake" : ""}
            >
                <GlitchTransition key={pathname}/>
                {children}
            </div>
        </AnimatePresence>
    )
}