import { projects } from "@/data/projects"
import { notFound } from "next/navigation"


export default function ProjectDetails({ params }: { params: { id: string } }) {
    const project = projects.find(project => project.id === params.id)

    if (!project) return notFound()

    return (
        <div className="min-h-screen p-8 text-white bg-black font-press">
            <h1 className="text-4xl mb-4">{project.title}</h1>
            <p className="text-lg mb-4">{project.description}</p>
        </div>
    )
}