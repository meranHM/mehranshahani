"use client"

import { MouseParallax } from "react-just-parallax"
import BinaryBackground from "@/components/design/BinaryBackground"
import { RefObject } from "react"

interface MovingBackgroundProps {
  parallaxRef: RefObject<HTMLElement | null>
}

export function MovingBackground( { parallaxRef }: MovingBackgroundProps ) {

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
