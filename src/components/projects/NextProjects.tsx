"use client"

import { motion } from "framer-motion"
import { IoArrowForwardCircleOutline } from "react-icons/io5"

export default function NextProject({ nextProject }: { nextProject: () => void }) {
    return (
        <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={nextProject}
            className="absolute bottom-36 right-4 z-40 text-color-neonGreen border border-color-neonGreen px-4 py-2 rounded-xl hover:bg-color-neonGreen hover:text-black transition-colors text-sm md:text-base flex items-center gap-2"
        >
            <IoArrowForwardCircleOutline className="text-2xl md:text-3xl" />
        </motion.button>
    )
}