"use client"

import { MouseParallax } from "react-just-parallax"
import BinaryBackground from "@/components/design/BinaryBackground"
import { useRef } from "react"


export function MovingBackground() {
  const parallaxRef = useRef<HTMLElement | null>(null)

  return (
    <div className="absolute left-1/2 w-full max-w-screen aspect-square max-h-screen overflow-hidden -translate-x-1/2 lg:-top-[0.5rem]">
      <MouseParallax 
        strength={0.07}
        isAbsolutelyPositioned
        parallaxContainerRef={parallaxRef}
      >
        <BinaryBackground />
      </MouseParallax>
    </div>
  )
}
