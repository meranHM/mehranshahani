"use client"

import { motion } from "framer-motion"
import { ShuttleProps } from "@/types/types"
import Image from "next/image"


export default function Shuttle({ isShuttleMoving }: ShuttleProps) {
    return (
        <motion.div
            className="fixed left-1/2 bottom-28 transform -translate-x-1/2"
            animate={ isShuttleMoving ? { y: [-4, 4, -4] } : { y: 0 } }
            transition={isShuttleMoving ? {duration: 0.6, repeat: Infinity } : { duration: 0.3 }}
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