"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"


const matrixChars = "01A3B4CDEFGH56789!@#$%^&*"

const getRandomStyles = () =>  ({
    fontSize: `${Math.floor(Math.random() * 16) + 6}px`,
    opacity: Math.random() * 0.2 + 0.4,
    textShadow: Math.random() > 0.5 ? "0px 0px 6px rgba(0, 255, 0, 0.5)" : "none",
})


export default function MatrixDivider() {
    const randDuration = useMemo(() => Math.floor(Math.random() * 4) + 7, [] )

    const matrixData = useMemo(() =>
        Array.from({ length: 50 }).map( () => ({
            char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
            style: getRandomStyles(),
        }))
    ,[])

  return (
    <motion.div
        className="w-full py-10 overflow-hidden text-color-neonGreen text-sm font-mono tracking-wide flex space-x-2 whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: randDuration, ease: "linear" }}
    >
        {matrixData.map((data, index) => (
            <span
                key={index}
                style={data.style}
            >
                {data.char}
            </span>
        ))}
    </motion.div>
  )
}