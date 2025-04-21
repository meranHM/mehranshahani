"use client"

import { useEffect, useState, useRef} from "react"


const NUM_ITEMS = 200

const getRandomValues = () => (Math.random() > 0.5 ? "0" : "1")
const getRandomStyle = () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    fontSize: Math.floor(Math.random() * 20) + 14,
    opacity: Math.random() * 0.2 + 0.1,
    hasShadow: Math.random() > 0.5,
})

type BinaryItemType = {
    id: number
    top: number
    left: number
    fontSize: number
    opacity: number
    hasShadow: boolean
    value: string
}


export default function BinaryBackground() {
    const [mounted, setMounted] = useState<boolean>(false)
    const [binaryArray, setBinaryArray] = useState<BinaryItemType[]>([])

    const containerRef = useRef<HTMLDivElement>(null)
    const binaryRefs = useRef<(HTMLSpanElement | null)[]>([])

    // Generating initial binary elements
    useEffect(() => {
        const initialBinaryArray = Array.from({ length: NUM_ITEMS }, (_, i) => ({
            id: i,
            ...getRandomStyle(),
            value: getRandomValues(),
        }))
        setBinaryArray(initialBinaryArray)
        setMounted(true)
    }, [])

    //Handling Flickers
    useEffect(() => {
        let frame: number
        const animate = () => {
            binaryRefs.current.forEach((el) => {
                if (!el) return
                if (Math.random() > 0.98) {
                    el.textContent = getRandomValues()
                    el.style.opacity = `${Math.random() * 0.2 + 0.1}`
                }
            })
            frame = requestAnimationFrame(animate)
        }

        frame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(frame)
    }, [])

    // Mounting with a little delay to avoid background flashes
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div 
            ref={containerRef}
            className={`absolute inset-0 z-0 transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
            {binaryArray.map((item, index) => (
                <span
                    ref={(el) => {
                        (binaryRefs.current[index] = el)
                    }}
                    key={item.id}
                    className="absolute text-green-400 pointer-events-none"
                    style={{
                        top: `${item.top}%`,
                        left: `${item.left}%`,
                        fontSize: `${item.fontSize}px`,
                        opacity: `${item.opacity}`,
                        textShadow: item.hasShadow
                            ? "0px 0px 6px rgba(0, 255, 0, 0.5)"
                            : "none",
                        transition: "opacity 0.2s ease-in-out"
                        
                    }}
                >
                    {item.value}
                </span>)
            )}

        </div>
    )
  }