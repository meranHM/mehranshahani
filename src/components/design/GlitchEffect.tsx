"use client"

import { useEffect} from 'react'
import { GlitchEffectProps } from '@/types/types'


export default function GlitchEffect({className, children, id}: GlitchEffectProps) {
  
  useEffect(() => {
    const applyGlitchEffect = () => {
      const element = document.getElementById(id)

      if (!element) return

      element.classList.add("textGlitch")

      setTimeout(() => {
        element.classList.remove("textGlitch")
      }, 1000)

      const nextTime = Math.random() * 5000 + 5000
      setTimeout(applyGlitchEffect, nextTime)
    }

    applyGlitchEffect()
  },[id])

  const renderPre = () => (
    <pre className={className} id={id}>
      {children}
    </pre>
  )

  const renderParagraph = () => (
      <p className={className} id={id}>
        {children}
      </p>
  )



  return id === "pre" ? renderPre() : renderParagraph()
}