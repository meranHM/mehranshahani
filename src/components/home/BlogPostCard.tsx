"use client"

import Image from "next/image"
import { BlogPostCardProps } from "@/types/types"


export default function BlogPostCard({ image, title, excerpt, url }: BlogPostCardProps) {
    return (
        <div
            className="flex flex-col md:flex-row overflow-hidden gap-6 p-4 bg-color-cyberBlack border border-color-neonGreen rounded-lg shadow-lg hover:scale-[1.02] hover:animate-pulseBorder transition-transform"
        >
            <Image 
                className="max-w-80 h-auto object-cover rounded-md self-center"
                src={image} 
                alt={title}
                width={450}
                height={300}
            />
            <div
                className="flex-1 p-4"
            >
                <h3
                    className="text-lg font-semibold text-glow mb-2"
                >
                    {title}
                </h3>
                <p
                    className="text-gray-400 text-sm line-clamp-3"
                >
                    {excerpt}
                </p>
                <button
                    className="mt-4 py-2 px-2 bg-color-neonBlue hover:bg-color-neonCyan text-black font-bold rounded transition-all"
                    onClick={ () => window.open(url, "_blank") }
                >
                    Read More <span className="ml-4 animate-pulse"> →</span>
                </button>
            </div>
        </div>
    )
}