"use client"

import { useEffect, useState, useRef } from "react"

export const useTypewriter = (messages: string[]) => {
    const [currentMessage, setCurrentMessage] = useState<string>("")
    const [index, setIndex] = useState<number>(0)
    const hasStartedTyping = useRef<boolean>(false)

    useEffect(() => {
        if (hasStartedTyping.current || index >= messages.length) return
        hasStartedTyping.current = true

        const sentence = messages[index]
        let charIndex = 0

        const typeNextChar = () => {
            if (charIndex < sentence.length - 1) {
                setCurrentMessage(prev => prev + sentence[charIndex])
                charIndex++
                setTimeout(typeNextChar, 10)
            } else {
                setTimeout(() => {
                    setCurrentMessage((prev) => prev + "\n")
                    setIndex((i) => i + 1)
                    hasStartedTyping.current = false
                }, 200)
            }
        }

        typeNextChar()
    }, [index, messages])

    return currentMessage
}