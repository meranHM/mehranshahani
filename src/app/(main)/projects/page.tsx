import CategorySection from "@/components/projects/CategorySection"
import { allProjects } from "@/data/projects/allProjects"
import ScrollFadeInSection from "@/components/design/ScrollFadeInSection"


export default function ProjectsPage() {
  return (
    <>
      <ScrollFadeInSection className="mb-20">
        <CategorySection 
          title={"Portfolio"} 
          projects={allProjects.portfolio}
        />
      </ScrollFadeInSection>

      <ScrollFadeInSection className="mb-20">  
        <CategorySection 
          title={"SaaS"} 
          projects={allProjects.saas}
        />
      </ScrollFadeInSection>

      <ScrollFadeInSection className="mb-20">
        <CategorySection 
          title={"E-commerce"} 
          projects={allProjects.ecommerce}
        />
      </ScrollFadeInSection>
    </>
  )
}
