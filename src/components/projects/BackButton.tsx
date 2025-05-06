"use client"

import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"

export default function BackButton() {
    const router = useRouter()

    const handleBackBtn = () => {
        if (window.history.length > 1) {
            router.back()
        } else (
            router.push("/")
        )
    }

    return (
        <button
            onClick={handleBackBtn}
            className="absolute top-4 left-4 z-40 text-color-neonGreen border border-color-neonGreen px-4 py-2 rounded-md hover:bg-color-neonGreen hover:text-black transition-colors text-sm md:text-base flex items-center gap-2"
        >
            <FaArrowLeft className="text-sm" />
            BACK
        </button>
    )
}