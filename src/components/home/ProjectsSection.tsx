"use client"

import { projects } from "../../data/projects"
import { motion } from "framer-motion"
import Image from "next/image"


export default function ProjectsSection() {
  const projectElements = projects.map((project, index) => (
    <a
      key={index}
      href={`${project.notion}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        className="relative w-full aspect-square cursor-pointer z-50 overflow-hidden bg-color-cyberBlack rounded-lg shadow-tv"
        whileHover={{ scale: 1.05 }}
        role="button"
        tabIndex={0}
        aria-label={`Open project: ${project.title}`}
      >
        <div className="tv-noise"></div>
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={450}
          height={450}
          className="absolute top-[8%] left-[10%] w-[80%] h-[65%] rounded-md object-cover"
        />

        <div
          className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-color-neonGreen text-xs md:text-sm lg:-text-lg font-bold text-center text-nowrap"
        >
          {project.title}
        </div>
      </motion.div>
    </a>
  ))

  return (
    <section 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 md:p-4 overflow-visible"
    >
      {projectElements}
    </section>
  )
}