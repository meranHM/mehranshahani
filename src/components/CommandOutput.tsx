"use client"

import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { CommandOutputProps } from "@/types/types"


export default function CommandOutput( { className }: CommandOutputProps ) {
  const commandHistory = useSelector((state: RootState) => state.terminal.commandHistory)

  const SuggestionVariants = {
    hidden: { opacity: 0, y: -10},
    visible: { opacity: 1, y: 0, transition: { duration: 0.3} },
  }

  return (
    <ul 
      className="scanline mt-2 p-3"
    >
      {commandHistory.map((item, index) => (
        <motion.li 
          key={index}
          initial="hidden"
          animate="visible"
          variants={SuggestionVariants}
          className={`${item.startsWith("Suggestions") ? "text-blue-400" : ""} text-xs md:text-lg mt-2 ${className || ""}`}
          role="listitem"
          aria-label={item}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  )
}