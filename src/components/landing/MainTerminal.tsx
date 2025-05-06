"use client"

import Terminal from '../design/Terminal'
import { useState, useEffect, useRef } from 'react'
import { useTypewriter } from '@/lib/hooks/useTypewriter'
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store/store"  
import { asciiArt, allWelcomeMessages } from "@/data"
import GlitchEffect from "@/components/design/GlitchEffect"
import TerminalNavbar from "@/components/landing/TerminalNavbar"
import CommandInput from "@/components/CommandInput"
import CommandOutput from "@/components/CommandOutput"



export default function MainTerminal() {
  const [showComponent, setShowComponent] = useState<boolean>(false)
  const commandHistory = useSelector((state: RootState) => state.terminal.commandHistory)
  const outputRef = useRef<HTMLDivElement>(null)
  const [randomIndex] = useState<number>(Math.floor(Math.random() * allWelcomeMessages.length))
  const messages:string[] = allWelcomeMessages[randomIndex]
  const currentMessage = useTypewriter(messages)


  // Delay rendering certain components
  useEffect(() => {
    const timer = setTimeout(() => {
        setShowComponent(true)
    },2200)

    return () => clearTimeout(timer)
  }, [])

  // Auto scrolling
  useEffect(() => {
      if (outputRef.current) {
          outputRef.current.scrollTop = outputRef.current.scrollHeight
      }
  }, [commandHistory, showComponent])


  return (
        <Terminal
            className="max-w-4xl"
        >
            <div 
                className="p-4 max-h-[80dvh] min-h-[400px] overflow-y-auto"
                ref={outputRef}
                id="terminal-message"
            >
                <GlitchEffect 
                    id="pre"
                    className="text-center scanline text-[0.6rem] md:text-lg"
                >
                    {asciiArt}
                </GlitchEffect>
                <pre className="text-xs md:text-lg text-wrap scanline p-3">
                    {currentMessage}
                </pre>
                {showComponent && (
                    <>
                        <h2
                        className="text-xs md:text-lg scanline p-3 mt-1"
                        >
                            Navigate using the system menu or enter a command.
                        </h2>
                        <TerminalNavbar />
                        <CommandOutput />
                    </>
                )}
            </div>
            <CommandInput />
        </Terminal>
  )
}
