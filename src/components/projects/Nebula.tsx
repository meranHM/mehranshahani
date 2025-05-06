"use client"

import { motion } from "framer-motion"
import Image from "next/image"


export default function Nebula() {
    return (
        <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="absolute w-screen h-screen top-0 left-0 z-0"
        >
            <Image 
                src="/nebula.webp"
                alt="Nebula background"
                width={1280}
                height={720}
                className="opacity-40 object-cover w-full h-full"
            />
        </motion.div>
    )
}