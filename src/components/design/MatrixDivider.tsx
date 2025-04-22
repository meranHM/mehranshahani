"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"


const matrixChars = "01A3B4CDEFGH56789!@#$%^&*"
const NUM_ITEMS = 50

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
}

export default function MatrixDivider() {
    const [matrixData, setMatrixData] = useState<matrixDataType[]>([])

    const randDuration = useMemo(() => Math.floor(Math.random() * 4) + 7, [])

    // Generating initial matrix letter elements
    useEffect(() => {
        const initialMatrixData = Array.from({ length: NUM_ITEMS }).map( () => ({
            ...getRandomStyles(),
            value: getRandomChar(),
        }))
        setMatrixData(initialMatrixData)
    }, [])


  return (
    <div
        className="w-full overflow-hidden"
    >
        <motion.div
            className="py-10 text-color-neonGreen text-sm font-mono tracking-wide flex space-x-2 whitespace-nowrap"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: randDuration, ease: "linear" }}
        >
            {matrixData.map((char, index) => (
                <span
                    key={index}
                    style={{
                        fontSize: `${char.fontSize}px`,
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
    </div>
  )
}