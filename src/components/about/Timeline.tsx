"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { timelineData } from "@/constants"

export default function Timeline() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <div
        className="relative flex flex-col items-center"
    >
        <h2 className="text-2xl md:text-3xl font-bold text-color-neonGreen mb-6">Career Timeline</h2>
        <div 
            className="relative w-1 bg-color-neonGreen h-full rounded-full opacity-50"
        ></div>
        <div className="w-full max-w-4xl">
            {timelineData.map((item, index) => (
                <motion.div
                    className="relative flex items-center mb-8"
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2}}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div
                        className="w-6 h-6 bg-color-neonGreen rounded-full absolute left-[-14px] top-3 shadow-lg"
                    ></div>
                    <div
                        className={`ml-10 p-4 rounded-lg border border-color-neonGreen bg-opacity-10 backdrop-blur-lg ${item.future ? "opacity-50" : ""}`}
                    >
                        <h3 className="text-xl font-semibold text-color-neonGreen">
                            {item.year} - {item.title}
                        </h3>
                        <motion.p
                            className="text-sm md:text-lg text-gray-300 mt-2"
                            animate={{ opacity: hoveredIndex === index ? 1 : 0.6 }}
                        >
                            {item.description}
                        </motion.p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}