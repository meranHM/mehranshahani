import { 
    miniTerminalMessageHero, 
    miniTerminalMessageSkills, 
    miniTerminalMessageProjects,
    miniTerminalMessageBlog } from "@/data"
import MiniTerminal from "@/components/design/MiniTerminal"
import Hero from "@/components/home/Hero"
import ScrollFadeInSection from "@/components/design/ScrollFadeInSection"
import ProjectsSection from "@/components/home/ProjectsSection"
import CTASection from "@/components/home/CTASection"
import SkillSet from "@/components/home/SkillSet"
import BlogSection from "@/components/home/BlogSection"
import { Metadata } from "next"


export const generateMetadata = (): Metadata => ({
  title: "Home",
  description: "Explore Mehran Shahani's portfolio — a creative web developer skilled in modern frontend technologies. Discover my skills, featured projects, and how to get in touch.",
  keywords: ["Mehran Shahani", "web developer", "frontend developer", "React", "Next.js", "portfolio", "TypeScript", "TailwindCSS"],
  openGraph: {
    title: "Home",
    description: "Explore Mehran Shahani's portfolio — a creative web developer skilled in modern frontend technologies. Discover my skills, featured projects, and how to get in touch.",
    url: "https://mehranshahani.com/home",
    images: ["/metatags-image.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home",
    description: "Explore Mehran Shahani's portfolio — a creative web developer skilled in modern frontend technologies. Discover my skills, featured projects, and how to get in touch.",
    images: ["/metatags-image.webp"],
  }
})

  
export default function HomePage() {
  const showBlogSection = false

  return (
      <div className="container relative">
        <ScrollFadeInSection
          className="pb-20 mb-28 mt-20"
        >
          <MiniTerminal 
            message={miniTerminalMessageHero}
            anchor="#hero"
            className="mb-6 md:mb-8"
          />
          <Hero />
        </ScrollFadeInSection>
  
        <ScrollFadeInSection>
          <MiniTerminal 
            message={miniTerminalMessageSkills}
            anchor="#skills"
            className="mb-6 md:mb-8"
          />
          <SkillSet />
        </ScrollFadeInSection>
  
        <ScrollFadeInSection
          className="mt-28 py-28"
        >
          <MiniTerminal 
            message={miniTerminalMessageProjects}
            anchor="#projects"
            className="mb-6 md:mb-8"
          />
          <ProjectsSection />
        </ScrollFadeInSection>
  
        <ScrollFadeInSection
          className="mt-28 py-28"
        >
          <CTASection />
        </ScrollFadeInSection>
  
        {showBlogSection && (<ScrollFadeInSection
          className="mt-28 py-28"
        >
          <MiniTerminal 
            message={miniTerminalMessageBlog}
            anchor="#logs"
            className="mb-6 md:mb-8"
          />
          <BlogSection />
        </ScrollFadeInSection>)}
      </div>
  )
}
  