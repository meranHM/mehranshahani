"use client"

import FadeInDiv from "@/components/design/FadeInDiv"
import Terminal from "@/components/design/Terminal"

export default function ProjectDetails({ params }: { params: { id: string } }) {
    const { id } = params

    return (
        <Terminal>
            <FadeInDiv
                className="flex flex-col p-6 items-center"
            >
                <img 
                    src="/projects/cyberpunk-portfolio/thumbnail.png" 
                    alt=""
                    className="max-w-md rounded-2xl border border-color-neonCyan shadow-lg hover:rotate-1 hover:scale-105 transition-transform z-50"
                />
            </FadeInDiv>
        </Terminal>
    )
}