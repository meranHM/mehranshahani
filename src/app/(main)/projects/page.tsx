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

    <FadeInSection className="mb-20"> 
      <CategorySection 
        title={"Dashboard"} 
        projects={allProjects.dashboard}
      />
    </FadeInSection> 

    <FadeInSection className="mb-20"> 
      <CategorySection 
        title={"Web Apps"} 
        projects={allProjects.webapp}
      />
    </FadeInSection>

    <FadeInSection className="mb-20">  
      <CategorySection 
        title={"Landing Pages"} 
        projects={allProjects.landing}
      />

    </FadeInSection>

    <FadeInSection className="mb-20">
      <CategorySection 
        title={"Fun and Experimental"} 
        projects={allProjects.fun}
      />
    </FadeInSection>
    </>
  )
}
