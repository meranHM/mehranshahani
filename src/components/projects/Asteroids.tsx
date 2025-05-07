"use client"

import { motion } from "framer-motion"


export default function Asteriods({ className }: {className?: string}) {
    return (
        <motion.img 
            src="/projects-page/asteroid.png"
            alt="Comet"
            className={`absolute ${className || ""}`}
            animate={{ x: [0, 100, 0] }}
            transition={{ 
                duration: 90, 
                repeat: Infinity, 
                ease: "linear",
            }}
        />
    )
}