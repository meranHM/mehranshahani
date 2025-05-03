"use client"

import { motion} from "framer-motion"


export default function MobileViewAirplane() {
    return (
        <motion.div
            className="absolute left-10 text-3xl"
            transition={{ type:"spring", stiffness: 200 }}
        >
        <img 
            src="/airplane.png" 
            alt="Airplane"
            className="w-16 h-16"
        />
  </motion.div>
    )
}
