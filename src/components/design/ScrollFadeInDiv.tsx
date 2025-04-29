"use client"

import { motion } from "framer-motion"
import { FadeInSectionProps } from "@/types/types"
import useInView from "@/lib/hooks/useInView"


export default function ScrollFadeInDiv({ children, className }: FadeInSectionProps) {
  const { ref, isInView } = useInView(0.2)

  const fadeInVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <motion.div
        ref={ref}
        className={`${className || ""}`}
        variants={fadeInVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.3 }}
    >
        {children}
    </motion.div>
  )
}