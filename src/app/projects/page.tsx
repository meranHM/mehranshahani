"use client"

import { useState, useEffect, useRef } from "react"
import { projects } from "@/data/projects"
import Shuttle from "@/components/projects/Shuttle"
import ProjectCard from "@/components/projects/ProjectCard"
import Background from "@/components/projects/Background"
import InfoModal from "@/components/projects/InfoModal"
import BackButton from "@/components/projects/BackButton"
import { AnimatePresence } from "framer-motion"
import NextProject from "@/components/projects/NextProjects"
import PrevProject from "@/components/projects/PrevProject"


export default function ProjectsPage() {
  const [position, setPosition] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isShuttleMoving, setIsShuttleMoving] = useState<boolean>(false)
  const [isShuttleForward, setIsShuttleForward] = useState<boolean>(true)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const isMovingRef = useRef(false)

  // Showing an info modal on page load
  useEffect(() => {
    const modalPref = localStorage.getItem("infoModalLastShown")

    if (modalPref) {
      const today = new Date().toDateString()
      const { date } = JSON.parse(modalPref)

      // If modal is shown today already, Don't show again
      if (date === today) return
    }

    setIsModalOpen(true)
  }, [])

  // Info modal buttons
  const closeModal = (dontShowToday?: boolean) => {
    setIsModalOpen(false)

    if (dontShowToday) {
      const today = new Date().toDateString()
      localStorage.setItem("infoModalLastShown", JSON.stringify({ date: today }))
    }
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

  // Navigation logic's helper function
  const navigateProjects = (direction: "next" | "prev") => {
    if (isMovingRef.current) return

    setIsShuttleMoving(true)
    isMovingRef.current = true
    

    setTimeout(() => {
      isMovingRef.current = false
      setIsShuttleMoving(false)
    }, 500)

    if (direction === "next" && position < projects.length - 1) {
      setPosition((prev) => prev + 1)
      setIsShuttleForward(true)
    } else if (direction === "prev" && position > 0) {
      setPosition((prev) => prev - 1)
      setIsShuttleForward(false)
    }
  }

  // Handling navigation between projects
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        navigateProjects("next")
      } else if (e.key === "ArrowLeft") {
        navigateProjects("prev")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [position])

  // Handling arrow buttons
  const prevProject = () => navigateProjects("prev")
  const nextProject = () => navigateProjects("next")

  return (
    <section
      className="w-screen h-screen relative overflow-hidden bg-gradient-to-b from-color-cyberBlack to-black text-color-neonGreen font-press z-40"
    >
      <AnimatePresence>
        {isModalOpen && (
          <InfoModal 
            closeModal={closeModal}
          />
        )}
      </AnimatePresence>

      <BackButton />

      <Background />

      
      {position < projects.length - 1 && (
        <NextProject 
          nextProject={nextProject}
        />
      )}

      {position > 0 && (
        <PrevProject 
        prevProject={prevProject}
        /> 
      )}


      <Shuttle 
          isShuttleMoving={isShuttleMoving}
          isShuttleForward={isShuttleForward}
      />

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
              id={project.id}
            />
          </div>
        ))}
      </div>
    </section>
  )
}