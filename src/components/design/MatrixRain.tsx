"use client"

import { motion } from "framer-motion"
import { useMemo, useEffect, useState } from "react"


const NUM_ITEM = 30
const matrixChars = "01A3B4CDEFGH56789!@#$%^&*"

const getRandomChar = () => matrixChars[Math.floor(Math.random() * matrixChars.length)]
const getRandomStyles = () =>  ({
    fontSize: Math.floor(Math.random() * 16) + 6,
    opacity: Math.random() * 0.2 + 0.4,
    hasShadow: Math.random() > 0.5,
})

type matrixDataType = {
  fontSize: number
  opacity: number
  hasShadow: boolean
  value: string
  animationClass: string
}

export default function MatrixRain() {
  const [matrixData, setMatrixData] = useState<matrixDataType[]>([])
  const randDuration = useMemo(() => Math.floor(Math.random() * 4) + 7, [])

  // Generating initial matrix letter elements
  useEffect(() => {
    const initialMatrixData = Array.from({ length: NUM_ITEM }).map(() => ({
      value: getRandomChar(),
      ...getRandomStyles(),
      animationClass: "animate-fadeIn"
    }))
    setMatrixData(initialMatrixData)
  }, [])


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
        {matrixData.map((char, index) => (
            <span
                key={index}
                style={{
                  fontSize: `${char.fontSize}px`,
                  animation: `${char.animationClass}`,
                  opacity: `${char.opacity}`,
                  textShadow: char.hasShadow
                    ? "0px 0px 6px rgba(0, 255, 0, 0.5)"
                    : "none"
                }}
            >
                {char.value}
            </span>
        ))}
    </motion.div>
  )
}