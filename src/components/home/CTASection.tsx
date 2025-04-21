"use client"

import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <motion.section
        className="relative flex flex-col items-center text-center z-50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        <div
            className="relative w-full max-w-3xl flex flex-col justify-center p-6 rounded-lg bg-opacity-10 backdrop-blur-lg border border-color-neonCyan shadow-lg shadow-color-neonCyan/30"
        >
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-color-neonCyan/10 to-transparent scanline"
            ></div>

            <h2
                className="text-2xl md:text-3xl font-bold text-color-neonCyan tracking-wider glitch"
            >
                Want to build something epic together?
            </h2>

            <div
                className="flex flex-wrap justify-center gap-4 mt-6"
            >
                <motion.a
                    href="/contact"
                    className="cta-btn border-color-neonPink text-color-neonPink hover:bg-color-neonPink/20 cursor-pointer z-50"
                    whileHover={{ scale: 1.05 }}
                >
                🚀 Hire Me
                </motion.a>

                <motion.a
                    href="/projects"
                    className="cta-btn border-color-neonGreen text-color-neonGreen hover:bg-color-neonGreen/20 cursor-pointer z-50"
                    whileHover={{ scale: 1.05 }}
                >
                    🔥 Check My Work
                </motion.a>

                <motion.a
                    href="/resume.pdf"
                    download
                    className="cta-btn border-color-neonBlue hover:bg-color-neonBlue/20 cursor-pointer z-50"
                    whileHover={{ scale: 1.05 }}
                >
                    📄 Download My Resume
                </motion.a>
            </div>
        </div>

    </motion.section>
  )
}