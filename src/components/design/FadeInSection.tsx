"use client"

import { easeOut, motion } from "framer-motion"
import { FadeInSectionProps } from "@/types/types"


export default function FadeInSection({ children, className }: FadeInSectionProps) {

  const fadeInVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  }

  return (
    <motion.section
        className={`${className || ""}`}
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
    >
        {children}
    </motion.section>
  )
}