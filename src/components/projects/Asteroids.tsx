"use client"

import { motion } from "framer-motion"


export default function Asteriods() {
    return (
        <motion.img 
            src="/asteroid.png"
            alt="Comet"
            className="absolute top-[30%] left-[10%] w-12 opacity-20"
            animate={{ x: [0, 100, 0] }}
            transition={{ 
                duration: 90, 
                repeat: Infinity, 
                ease: "linear",
            }}
        />
    )
}