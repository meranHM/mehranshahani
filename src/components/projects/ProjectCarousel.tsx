"use client"

import { motion } from "framer-motion"
import { ProjectsCarouselProps } from "@/types/types"
import { useRef } from "react"
import ProjectCard from "./ProjectCard"

export default function ProjectCarousel({ projects }: ProjectsCarouselProps) {
    const sliderRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
        className="cursor-grab z-[999]"
        ref={sliderRef}
        whileTap={{ cursor: "grabbing" }}
    >
        <motion.div
            className="flex space-x-10"
            drag="x"
            dragConstraints={{ left: -400 , right: 400}}
        >
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    project={project}
                />
            ))}
        </motion.div>
    </motion.div>
  )
}