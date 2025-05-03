"use client"

import { ProjectSectionProps } from "@/types/types"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ProjectSection({ title, description, thumbnail, position, index }: ProjectSectionProps) {

    return (
        <motion.div
            className="cursor-pointer bg-color-terminalBlack max-w-[400px] border-2 border-color-neonCyan px-6 py-4 rounded-lg transition-all duration-200  z-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <h3
                className="text-lg font-bold"
            >
                {title}
            </h3>
            <motion.div
                className="flex flex-col items-center gap-6"
            >
                <p 
                    className="text-sm mt-2 text-green-400"
                >
                    {description}
                </p>
                <Image 
                    src={thumbnail}
                    alt={`A screenshot of ${title}`}
                    width={750}
                    height={450}
                    className="rounded-3xl max-w-72 mb-4 h-auto border-2 border-color-neonTeal"
                />
          </motion.div>
      </motion.div>
    )
}