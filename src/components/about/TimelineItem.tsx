"use client"

import { useInView, motion } from "framer-motion"
import { useRef } from "react"
import { TimelineItemProps } from "@/types/types"

export default function TimelineItem({ year, title, description, future }: TimelineItemProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-50% 0px -50% 0px" })

    return (
        <motion.div
            ref={ref}
            className="relative flex items-center mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0.5, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.2 }}
        >
            <div
                className={`w-6 h-6 rounded-full absolute left-[-10] top-3 shadow-lg ${isInView ? "bg-color-neonGreen" : "bg-gray-500"}`}
            ></div>
            <div
                className={`ml-10 p-4 rounded-lg border ${isInView ? "border-color-neonGreen bg-color-terminalBlack" : "border-gray-500 bg-gray-800"} bg-opacity-10 backdrop-blur-lg ${future ? "opacity-50" : ""}`}
            >
                <h3
                    className="text-xl font-semibold text-color-neonGreen"
                >
                    {year} - {title}
                </h3>
                <p
                    className="text-sm md:text-lg text-gray-300 mt-2"
                >
                    {description}
                </p>
            </div>
        </motion.div>
    )
}