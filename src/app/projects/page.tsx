import { Metadata } from "next"
import ProjectsClient from "@/components/projects/ProjectsClient"


export const generateMetadata = (): Metadata => ({
  title: "Projects | Mehran Shahani",
  description: "Explore Mehran Shahani's web development projects in an interactive retro space mini-game. Navigate through planets to discover creative React, Next.js, and TypeScript builds.",
  keywords: ["Mehran Shahani", "web development projects", "frontend projects", "React", "Next.js", "TypeScript", "TailwindCSS", "space game portfolio", "creative portfolio"],
  openGraph: {
    title: "Projects | Mehran Shahani",
    description: "Explore Mehran Shahani's web development projects in an interactive retro space mini-game. Navigate through planets to discover creative React, Next.js, and TypeScript builds.",
    url: "https://mehranshahani.com/projects",
    images: ["/metatags-image.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mehran Shahani",
    description: "Explore Mehran Shahani's web development projects in an interactive retro space mini-game. Navigate through planets to discover creative React, Next.js, and TypeScript builds.",
    images: ["/metatags-image.webp"],
  }
})

export default function ProjectsPage() {
  return <ProjectsClient />
}