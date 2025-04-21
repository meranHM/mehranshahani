"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { activateRetro } from "@/lib/slices/retroSlice"
import RetroFlicker from "./RetroFlicker"

export default function RetroTransition() {
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(activateRetro())
        }, 4100)

        return () => clearTimeout(timer)
    }, [dispatch])


  return (
    <div
        className="fixed top-0 left-0 w-full h-full bg-white z-[999] flex flex-col justify-center items-center text-green-400 font-mono text-xl overflow-hidden glitch"
    >
        <motion.div
            className="mb-4"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 0.4 }}
        >
            <motion.p
                className="mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
            >
                Booting Retro Mode...
            </motion.p>
        </motion.div>
        <motion.div
            className="w-64 h-2 bg-gray-700 rounded overflow-hidden"
        >
            <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4 }}
            />
        </motion.div>
        <RetroFlicker />
    </div>
  )
}