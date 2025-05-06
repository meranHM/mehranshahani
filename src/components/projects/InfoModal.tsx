"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { InfoModalProps } from "@/types/types"


export default function InfoModal({ closeModal }: InfoModalProps) {
    const [dontShowToday, setDontShowToday] = useState<boolean>(false)

    const router = useRouter()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full text-white bg-color-terminalBlack z-50 flex items-center justify-center overflow-clip transition-all"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1}}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center text-center max-w-3xl mx-5 p-4 md:p-6 gap-8 rounded-lg border-2 border-indigo-800 shadow-md shadow-indigo-800/80 backdrop-blur-lg"
            >
                <h2
                    className="text-nowrap text-sm md:text-xl lg:text-2xl"
                >
                    WELCOME TO MY UNIVERSE
                </h2>
                <p
                    className="text-sm md:text-base leading-9 md:leading-10"
                >
                    Use left and right arrow keys to navigate between projects
                </p>
                <span className="flex gap-6 animate-bounce text-2xl">
                    <FaArrowLeft /> <FaArrowRight/>
                </span>

                <label
                    className="text-sm flex items-center gap-2"
                >
                    <input 
                        type="checkbox"
                        checked={dontShowToday}
                        onChange={() => setDontShowToday(!dontShowToday)}
                    />
                    Don&apos;t show again today
                </label>

                <div
                    className="flex gap-6"
                >
                    <button
                        onClick={() => closeModal(dontShowToday)}
                        className="text-sm md:text-base py-2 px-4 bg-indigo-800 rounded-md hover:bg-indigo-700"
                    >
                        Continue
                    </button>
                    <button
                        onClick={() => router.push("/")}
                        className="text-sm md:text-base py-2 px-4 bg-indigo-800 rounded-md hover:bg-indigo-700 flex flex-nowrap"
                    >
                        Back <span className="hidden md:block">&nbsp;to Home</span>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}