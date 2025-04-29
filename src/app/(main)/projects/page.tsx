"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import { useRouter} from "next/navigation"

export default function ProjectsPage() {
  const [position, setPosition] = useState<number>(0)
  
  const router = useRouter()

  // Handling arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setPosition((prev) => Math.min(prev + 1, projects.length - 1))
      } else if (e.key === "ArrowUp") {
        setPosition((prev) => Math.max(prev - 1, 0))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-color-neonGreen"
    >
      <motion.div
        className="absolute left-10 text-3xl"
        animate={{ top: `${position * 25 + 20}vh` }}
        transition={{ type:"spring", stiffness: 150 }}
      >
        <img 
          src="/airplane.png" 
          alt="Airplane"
          className="w-16 h-16"
        />
      </motion.div>

      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-20"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`cursor-pointer border-2 px-6 py-4 rounded-lg transition-all duration-200 ${position === index ? "border-color-neonCyan bg-black" : "border-gray-700"}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push(`/projects/${project.id}`)}
          >
            <h3
              className="text-lg font-bold"
            >
              {project.title}
            </h3>
            {position === index && (
              <p className="text-sm mt-2">
                {project.description}
              </p>
              )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}