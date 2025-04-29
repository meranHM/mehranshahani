import ScrollFadeInSection from "@/components/design/ScrollFadeInSection"
import PersonalStatement from "@/components/about/PersonalStatement"
import SkillsetModules from "@/components/about/SkillsetModules"
import SystemProfile from "@/components/about/SystemProfile"
import Timeline from "@/components/about/Timeline"


export default function AboutPage() {
  return (
    <section className="relative z-[888]">
      <ScrollFadeInSection
        className="mb-48 mt-44 md:mt-20 md:py-20"
      >
        <h1 className="sr-only">About Mehran Shahani</h1>
        <SystemProfile />
      </ScrollFadeInSection>

      <ScrollFadeInSection
        className="mt-20 py-20"
      >
        <SkillsetModules />
      </ScrollFadeInSection>

      <ScrollFadeInSection
        className="mt-20 py-20"
      >
        <PersonalStatement />
      </ScrollFadeInSection>

      <ScrollFadeInSection
        className="mt-20 py-20"
      >
        <Timeline />
      </ScrollFadeInSection>
    </section>
  )
}
