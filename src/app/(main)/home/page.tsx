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
  
  
  export default function HomePage() {
    return (
      <section className="relative">
        <ScrollFadeInSection
          className="pb-20 mb-28"
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
  
        <ScrollFadeInSection
          className="mt-28 py-28"
        >
          <MiniTerminal 
            message={miniTerminalMessageBlog}
            anchor="#logs"
            className="mb-6 md:mb-8"
          />
          <BlogSection />
        </ScrollFadeInSection>
      </section>
    )
  }
  