"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

const matrixChars = "01A3B4CDEFGH56789!@#$%^&*"

const getRandomStyles = () =>  ({
    fontSize: `${Math.floor(Math.random() * 16) + 6}px`,
    opacity: Math.random() * 0.2 + 0.4,
    textShadow: Math.random() > 0.5 ? "0px 0px 6px rgba(0, 255, 0, 0.5)" : "none",
})

export default function MatrixRain() {
    const randDuration = useMemo(() => Math.floor(Math.random() * 4) + 7, [] )
    const matrixData = useMemo(() =>
            Array.from({ length: 30 }).map( () => ({
                char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
                style: getRandomStyles(),
                animationClass: "animate-fadeIn"
            }))
        ,[])

  return (
    <motion.div
      className="overflow-hidden text-green-400 text-lg font-mono tracking-wide flex flex-col"
      initial={{ y: "-100%" }}
      animate={{ y: "100%" }}
      transition={{
        repeat: Infinity,
        duration: randDuration,
        ease: "linear",
      }}
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