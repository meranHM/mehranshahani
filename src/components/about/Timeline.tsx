"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { timelineData } from "@/constants"

export default function Timeline() {

  return (
    <div
        className="relative flex flex-col items-center"
    >
        <h2 className="text-2xl md:text-3xl font-bold text-color-neonGreen mb-6">Career Timeline</h2>
        <div
            className="w-full max-w-4xl"
        >
            {timelineData.map((item, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: false, margin: "-50% 0px -50% 0px" })

                return (
                    <motion.div
                        ref={ref}
                        className="relative flex items-center mb-8"
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isInView ? 1 : 0.5, x: isInView ? 0 : -50 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                    >
                        <div
                            className={`w-6 h-6 rounded-full absolute left-[-14px] top-3 shadow-lg ${isInView ? "bg-color-neonGreen" : "bg-gray-500"}`}
                        ></div>
                        <div
                            className={`ml-10 p-4 rounded-lg border ${isInView ? "border-color-neonGreen bg-color-terminalBlack" : "border-gray-500 bg-gray-800"} bg-opacity-10 backdrop-blur-lg`}
                        >
                            <h3
                                className="text-xl font-semibold text-color-neonGreen"
                            >
                                {item.year} - {item.title}
                            </h3>
                            <p
                                className="text-sm md:text-lg text-gray-300 mt-2"
                            >
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                )
            })}
        </div>


    </div>
  )
}