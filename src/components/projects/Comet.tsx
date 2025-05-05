"use client"

import { motion } from "framer-motion"


export default function Comet() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -300, y: -300 }}
            animate={{ opacity: [0, 1, 0], x: [0, 1200], y: [0, 600] }}
            transition={{ delay: 15, duration: 4, repeat: Infinity, repeatDelay: 20 }}
            className="absolute top-0 left-0 z-10"
        >
            <div 
                className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] rotate-45"
            />
        </motion.div>
    )
}