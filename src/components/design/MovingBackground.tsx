"use client"

import { MouseParallax } from "react-just-parallax"
import BinaryBackground from "./BinaryBackground"


export function MovingBackground( { parallaxRef }: any ) {

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
  );
};
