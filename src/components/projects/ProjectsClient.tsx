"use client"

import { useState, useEffect, useRef } from "react"
import { useCallback } from "react"
import { projects } from "../../data/projects"
import { AnimatePresence } from "framer-motion"
import Shuttle from "./Shuttle"
import Background from "./Background"
import NextProject from "./NextProjects"
import PrevProject from "./PrevProject"
import InfoModal from "./InfoModal"
import BackButton from "./BackButton"
import ProjectCard from "./ProjectCard"


export default function ProjectsClient() {
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
    const navigateProjects = useCallback((direction: "next" | "prev") => {
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
    }, [position])

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
    }, [navigateProjects])

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
                className="w-full h-full flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide touch-pan-x overscroll-x-none"
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        textureSrc={`/projects-page/pixel-planet${index + 1}.webp`}
                        link={project.notion}
                    />
                ))}
            </div>
        </section>
    )
}