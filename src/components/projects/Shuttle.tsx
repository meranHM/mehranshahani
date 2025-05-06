"use client"

import { motion } from "framer-motion"
import { ShuttleProps } from "@/types/types"
import Image from "next/image"


export default function Shuttle({ isShuttleMoving, isShuttleForward }: ShuttleProps) {
    return (
        <motion.div
            className="fixed left-1/2 -translate-x-1/2 bottom-28 pointer-events-none"
            animate={{
                y: isShuttleMoving ? [-4, 4, -4] : 0,
                scaleX: isShuttleForward ? 1 : -1,
            }}
            transition={{
                y: isShuttleMoving ? { duration: 0.6, repeat: Infinity } : { duration: 0.3 },
                scaleX: { duration: 0.2 },
            }}
        >
            <div
                className="relative w-28 h-28"
            >
                {isShuttleMoving && (
                    <motion.div
                        className="absolute -left-10 top-7"
                        animate={{ y: [0, 5, 0], opacity: [1, 0.6, 1] }}
                        transition={{ duration: 0.4, repeat: Infinity }}
                    >
                        <Image 
                            src="/flame.png"
                            alt="Shuttle flame"
                            width={20}
                            height={40}
                            className="w-10 h-16 -rotate-90"
                        />
                    </motion.div>
                )}

                <Image 
                    src="/shuttle.png"
                    alt="Space shuttle"
                    width={250}
                    height={250}
                    className="w-28 h-28"
                />
            </div>
        </motion.div>
    )
}