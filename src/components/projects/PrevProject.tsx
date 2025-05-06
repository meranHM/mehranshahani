"use client"

import { motion } from "framer-motion"
import { IoArrowBackCircleOutline } from "react-icons/io5"

export default function PrevProject({ prevProject }: { prevProject: () => void }) {
    return (
        <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={prevProject}
            className="absolute bottom-48 left-4 z-40 text-color-neonGreen border border-color-neonGreen px-4 py-2 rounded-xl hover:bg-color-neonGreen hover:text-black transition-colors text-sm md:text-base flex items-center gap-2"
        >
            <IoArrowBackCircleOutline className="text-2xl md:text-3xl" />
        </motion.button>
    )
}