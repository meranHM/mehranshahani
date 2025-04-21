"use client"

import { skills } from "@/constants"
import { motion } from "framer-motion"

export default function SkillCard({ skill }: { skill: string }) {
    const isLocked = skills[3].items.includes(skill)
    
  return (
    <motion.div
        className={`p-2 md:p-3 z-[999] cursor-pointer border rounded-lg shadow-md text-center ${isLocked ? "border-red-500 opacity-50" : "border-green-500"}`}
        whileHover={{ scale: 1.05 }}
    >
        <h3
            className="text-sm md:text-lg font-bold"
        >
            {skill}
        </h3>
        {isLocked && <p className="text-sm text-red-400">🔒 Locked</p>}
    </motion.div>
  )
}