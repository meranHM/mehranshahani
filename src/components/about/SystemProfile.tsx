"use client"

import { motion } from "framer-motion"


export default function SystemProfile() {
  return (
    <motion.section
        className="relative max-w-3xl mx-auto p-3 md:p-6 bg-color-terminalBlack border border-color-neonGreen rounded-lg shadow-lg overflow-hidden text-color-neonGreen text-sm md:text-lg tracking-wider"
    >
        <h2 className="sr-only">User System Profile</h2>
        <motion.div
            className="absolute inset-0 bg-black/80 flex items-center justify-center text-center text-color-neonGreen text-lg md:text-2xl font-bold"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
        >
            SCANNING USER PROFILE...
        </motion.div>

        <motion.img 
            src="/avatar.webp"
            alt="Avatar of Mehran Shahani"
            className="w-32 h-32 mx-auto rounded-full border-2 border-color-neonGreen shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
        />

        <motion.div
            className="mt-6 space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
        >
            <p className="text-nowrap"><span className="text-color-neonCyan font-bold">🔍 User Identified:</span> Mehran Shahani</p>
            <p ><span className="text-color-neonCyan font-bold">🛠️ Role:</span> Frontend Developer ( React, Next.js, TypeScript )</p>
            <p><span className="text-color-neonCyan font-bold">📍 Location:</span> Iran ( Open to Remote & Relocation )</p>
            <p><span className="text-color-neonCyan font-bold">⚡ Status:</span> Active | Accepting Opportunities</p>
            <p><span className="text-color-neonCyan font-bold">🎯 Objective:</span> Crafting futuristic, high-performance web experiences</p>
        </motion.div>
    </motion.section>
  )
}