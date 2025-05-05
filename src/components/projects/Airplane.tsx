"use client"

import { motion } from "framer-motion"
import Image from "next/image"


export default function Airplane() {
    return (
        <motion.div
            className="fixed left-1/2 bottom-28 transform -translate-x-1/2 z-40"
            animate={{ x2: 0 }}
        >
            <Image 
                src="/shuttle.png" 
                alt="Space shuttle"
                className="w-28 h-28"
                width={250}
                height={250}
            />
      </motion.div>
    )
}