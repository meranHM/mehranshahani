import ScrollFadeInSection from "@/components/design/ScrollFadeInSection"
import PersonalStatement from "@/components/about/PersonalStatement"
import SkillsetModules from "@/components/about/SkillsetModules"
import SystemProfile from "@/components/about/SystemProfile"
import Timeline from "@/components/about/Timeline"
import { Metadata } from "next"


export const generateMetadata = (): Metadata => ({
  title: "About | Mehran Shahani",
  description: "Learn more about Mehran Shahani — a passionate frontend developer skilled in React, Next.js, and creative web design. Discover his background, journey, and mission.",
  keywords: ["Mehran Shahani", "about Mehran", "web developer bio", "frontend developer", "React", "Next.js", "TypeScript", "career timeline", "web development journey"],
  openGraph: {
    title: "About | Mehran Shahani",
    description: "Learn more about Mehran Shahani — a passionate frontend developer skilled in React, Next.js, and creative web design. Discover his background, journey, and mission.",
    url: "https://mehranshahani.com/about",
    images: ["/metatags-image.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Mehran Shahani",
    description: "Learn more about Mehran Shahani — a passionate frontend developer skilled in React, Next.js, and creative web design. Discover his background, journey, and mission.",
    images: ["/metatags-image.webp"],
  }
})


export default function AboutPage() {
  return (
      <div className="container relative z-50">
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
          className="my-20 py-20"
        >
          <Timeline />
        </ScrollFadeInSection>
      </div>
  )
}
