"use client"

import { ProgressBarProps } from "@/types/types"
import { motion } from "framer-motion"


export default function ProgressBar({ level, color, delay }: ProgressBarProps) {
    return (
        <motion.div 
            className={`h-4 ${color} rounded`}
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1.5, delay }}
        />
    )
}