"use client"

import { motion } from "framer-motion"
import { ProjectCardProps } from "@/types/types"
import Image from "next/image"

export default function ProjectCard({ title, textureSrc }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative w-48 h-48 p-2 rounded-full border-4 border-indigo-500/30 shadow-lg shadow-indigo-500/20 bg-color-terminalBlack group"
        >

            <div
                className="relative w-full h-full rounded-full overflow-hidden z-10"
            >
                {/* Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-indigo-500/40 animate-pulse blur-sm z-10" />

                {/* Texture */}
                <Image 
                    src={textureSrc}
                    alt={title}
                    fill
                    className="object-cover pixelated z-0"
                    style={{ zIndex: 1 }}
                />
            </div>

            {/* Title */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-0 z-20 pointer-events-none"
            >
                <div
                    className="absolute -top-5 left-1/2 -translate-x-1/2"
                >
                    {/* Rotating the title against it parent to keep it upright */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="bg-indigo-800/80 px-2 py-1 rounded shadow-md whitespace-nowrap text-white text-xs"
                    >
                        {title}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}