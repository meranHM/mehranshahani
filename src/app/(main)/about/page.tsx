import FadeInSection from "@/components/design/FadeInSection"
import PersonalStatement from "@/components/about/PersonalStatement"
import SkillsetModules from "@/components/about/SkillsetModules"
import SystemProfile from "@/components/about/SystemProfile"
import Timeline from "@/components/about/Timeline"


export default function AboutPage() {
  return (
    <section className="relative z-[888]">
      <FadeInSection
        className="mb-48 mt-44 md:mt-20 md:py-20"
      >
        <h1 className="sr-only">About Mehran Shahani</h1>
        <SystemProfile />
      </FadeInSection>

      <FadeInSection
        className="mt-20 py-20"
      >
        <SkillsetModules />
      </FadeInSection>

      <FadeInSection
        className="mt-20 py-20"
      >
        <PersonalStatement />
      </FadeInSection>

      <FadeInSection
        className="mt-20 py-20"
      >
        <Timeline />
      </FadeInSection>
    </section>
  )
}
