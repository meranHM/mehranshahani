"use client"

import { useState, useEffect, useRef } from "react"
import { projects } from "@/data/projects"
import { useRouter} from "next/navigation"
import ProjectSection from "@/components/projects/ProjectSection"
import Airplane from "@/components/projects/Airplane"


export default function ProjectsPage() {
  const [position, setPosition] = useState<number>(0)
  
  const containerRef = useRef<HTMLDivElement>(null)


  // Handling scrolls
  useEffect(() => {
    const sections = containerRef.current?.children
    if (sections && sections[position]) {
      (sections[position] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      })
    }
  }, [position])

  // Handling arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setPosition((prev) => Math.min(prev + 1, projects.length - 1))
      } else if (e.key === "ArrowLeft") {
        setPosition((prev) => Math.max(prev - 1, 0))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section
      className="w-screen h-screen relative overflow-hidden bg-gradient-to-b from-color-cyberBlack to-black text-color-neonGreen font-press"
    >
      <div
        ref={containerRef}
        className="h-full flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="min-w-full snap-start flex items-center justify-center"
          >
            <ProjectSection 
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              index={index}
              position={position}
            />
          </div>
        ))}
        <Airplane />
      </div>
    </section>
  )
}