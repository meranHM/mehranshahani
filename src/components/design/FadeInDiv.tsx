"use client"

import { motion } from "framer-motion"
import { FadeInSectionProps } from "@/types/types"


export default function FadeInDiv({ children, className }: FadeInSectionProps) {

  const fadeInVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <motion.div
        className={`${className || ""}`}
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
    >
        {children}
    </motion.div>
  )
}