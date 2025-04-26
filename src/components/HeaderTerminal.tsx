"use client"

import CommandInput from "./CommandInput"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import CommandOutput from "./CommandOutput"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store/store"
import { HeaderTerminalProps } from "@/types/types"


export default function HeaderTerminal({ className }: HeaderTerminalProps) {
    const [hoverInput, setHoverInput] = useState<boolean>(false)
    const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const commandHistory = useSelector((state: RootState) => state.terminal.commandHistory)
    const outputRef = useRef<HTMLDivElement>(null)

    const fadeInVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.3, ease: "easeOut" }, 
        },
    }

    // Auto Scrolling
    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight
        }
    }, [commandHistory])


    // Handling Mouse Hover situations
    const handleInputEnter = () => {
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current)
        }
        setHoverInput(true)
    }

    const handleInputLeave = () => {
        hideTimeoutRef.current = setTimeout(() => {
            setHoverInput(false)
        }, 200)
    }

    const handleOutputEnter = () => {
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current)
        }
    }

    const handleOutputLeave = () => {
        setHoverInput(false)
    }


  return (
    <motion.div 
        className={`relative ${ className || "" }`}       
    >
        <motion.div
            onMouseEnter={handleInputEnter}
            onMouseLeave={handleInputLeave}       
        >
            <CommandInput />
        </motion.div>
        <motion.div
            className="absolute h-64 w-full bg-color-terminalBlack overflow-y-auto rounded-bl-lg rounded-br-lg border-l border-r border-b border-color-neonGreen z-[999]"
            onMouseEnter={handleOutputEnter}
            onMouseLeave={handleOutputLeave}
            ref={outputRef}
            variants={fadeInVariants}
            initial={"hidden"}
            animate={hoverInput ? "visible" : "hidden"}
        >
            <CommandOutput 
                className="text-xs p-1"
            />
        </motion.div>
    </motion.div>
  )
}