import CategorySection from "@/components/projects/CategorySection"
import { allProjects } from "@/data/projects/allProjects"
import FadeInSection from "@/components/design/FadeInSection"


export default function ProjectsPage() {
  return (
    <>
    <FadeInSection className="mb-20">
      <CategorySection 
        title={"Portfolio"} 
        projects={allProjects.portfolio}
      />
    </FadeInSection>

    <FadeInSection className="mb-20">  
      <CategorySection 
        title={"SaaS"} 
        projects={allProjects.saas}
      />
    </FadeInSection>

    <FadeInSection className="mb-20">
      <CategorySection 
        title={"E-commerce"} 
        projects={allProjects.ecommerce}
      />
    </FadeInSection>
    </>
  )
}
