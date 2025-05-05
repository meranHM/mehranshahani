"use client"

import { motion } from "framer-motion"


export default function GlitchTransition() {
  return (
    <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0}}
        exit={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-full bg-color-terminalBlack z-40 flex items-center justify-center overflow-clip transition-all"
    >
        <div className="glitch-container">
            <span className="textGlitch">LOADING...</span>
        </div>
    </motion.div>
  )
}