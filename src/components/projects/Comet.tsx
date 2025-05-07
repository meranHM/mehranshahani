"use client"

import { motion } from "framer-motion"
import Image from "next/image"


export default function Comet() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -300, y: -300 }}
            animate={{ opacity: [0, 1, 0], x: [0, 1200], y: [0, 600] }}
            transition={{ delay: 15, duration: 4, repeat: Infinity, repeatDelay: 20 }}
            className="absolute top-0 left-0 z-10"
        >
            <Image
                src="/projects-page/comet.png"
                alt="Comet"
                width={64}
                height={64}
                className="w-20 h-20 -rotate-90"
            />
        </motion.div>
    )
}