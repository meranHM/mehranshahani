"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { blogPosts } from "@/constants/blogPosts"
import Image from "next/image"



export default function BlogSection() {
    const sliderRef = useRef<HTMLDivElement>(null)

  return (
    <section
        className="relative z-[500]"
    >
        <h2
            className="text-3xl font-bold text-glow text-center mb-6"
        >
             Latest Logs 📜
        </h2>
        <motion.div
            className="cursor-grab"
            ref={sliderRef}
            whileTap={{ cursor: "grabbing" }}
        >
            <motion.div
                className="flex space-x-6"
                drag="x"
                dragConstraints={{ left: -800 , right: 200 }}
            >
                {blogPosts.map(post => (
                    <motion.div
                        key={post.id}
                        className="relative min-w-[300px] md:min-w-[400px] p-4 bg-[#121212] border border-color-neonGreen rounded-lg shadow-lg transition-transform hover:scale-105"
                    >
                        <Image 
                            className="w-full h-40 object-cover rounded-md mb-4"
                            src={post.image} 
                            alt={post.title}
                            width={450}
                            height={300}
                        />
                        <h3
                            className="text-lg font-semibold text-glow"
                        >
                            {post.title}
                        </h3>
                        <p
                            className="text-gray-400 text-sm line-clamp-3"
                        >
                            {post.excerpt}
                        </p>
                        <button
                            className="mt-4 w-full py-2 bg-color-neonBlue hover:bg-color-neonCyan text-black font-bold rounded transition-all"
                            onClick={ () => window.open(post.url, "_blank") }
                        >
                            Read More →
                        </button>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </section>
  )
}