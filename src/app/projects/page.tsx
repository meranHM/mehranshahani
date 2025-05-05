"use client"

import { useState, useEffect, useRef } from "react"
import { projects } from "@/data/projects"
import { useRouter} from "next/navigation"
import Airplane from "@/components/projects/Airplane"
import ProjectCard from "@/components/projects/ProjectCard"
import Background from "@/components/projects/Background"
import InfoModal from "@/components/projects/InfoModal"


export default function ProjectsPage() {
  const [position, setPosition] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  
  const containerRef = useRef<HTMLDivElement>(null)

  // Showing an info modal on page load
  useEffect(() => {
    if (!isModalOpen) {
      setIsModalOpen(true)
    }
  }, [])

  // Info modal buttons
  const closeModal = () => {
    setIsModalOpen(false)
  }

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
      {isModalOpen && (
        <InfoModal 
          closeModal={() => closeModal()}
        />
      )}
      <Background />
      <div
        ref={containerRef}
        className="h-full flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-full snap-start flex items-center justify-center"
          >
            <ProjectCard 
              title={project.title}
              textureSrc={`/pixel-planet${index + 1}.png`}
            />
          </div>
        ))}
        <Airplane />
      </div>
    </section>
  )
}