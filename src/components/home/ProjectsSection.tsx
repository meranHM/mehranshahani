"use client"

import { projects } from "@/data/projects/highlightProjects"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"


export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null >(null)

  const projectElements = projects.map((project, index) => (
    <motion.div
      key={index}
      className="relative w-full aspect-square cursor-pointer z-50 overflow-hidden bg-color-cyberBlack rounded-lg shadow-tv"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={ () => setHovered(index) }
      onMouseLeave={ () => setHovered(null) }
      onClick={ () => window.open(project.liveDemo, "_blank") }
      onKeyDown={(e) => e.key === "Enter" && window.open(project.liveDemo, "_blank")}
      role="button"
      tabIndex={0}
      aria-label={`Open project: ${project.title}`}
    >
      <div className="tv-noise"></div>

      { hovered === index ? (
        <video 
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-[8%] left-[10%] w-[80%] h-[65%] rounded-md object-cover"
        />
      ) : (
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={450}
          height={450}
          className="absolute top-[8%] left-[10%] w-[80%] h-[65%] rounded-md object-cover"
        />
      )}

      <div
        className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-color-neonGreen text-xs md:text-sm lg:-text-lg font-bold text-center text-nowrap"
      >
        {project.title}
      </div>
    </motion.div>
  ))

  return (
    <section 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 md:p-4 overflow-visible"
    >
      {projectElements}
    </section>
  )
}