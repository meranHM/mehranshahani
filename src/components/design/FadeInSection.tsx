"use client"

import { motion } from "framer-motion"
import { FadeInSectionProps } from "@/types/types"
import useInView from "@/hooks/useInView"


export default function FadeInSection({ children, className }: FadeInSectionProps) {
  const { ref, isInView } = useInView(0.2)

  const fadeInVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <motion.section
        ref={ref}
        className={`${className || ""}`}
        variants={fadeInVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.3 }}
    >
        {children}
    </motion.section>
  )
}