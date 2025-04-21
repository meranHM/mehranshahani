import CategorySection from "@/components/projects/CategorySection"
import { projectsObj } from "@/constants/projects"
import FadeInSection from "@/components/design/FadeInSection"


export default function ProjectsPage() {
  return (
    <>
    <FadeInSection className="mb-20">
      <CategorySection 
        title={"Portfolio"} 
        projects={projectsObj.portfolio}
      />
    </FadeInSection>

    <FadeInSection className="mb-20">  
      <CategorySection 
        title={"SaaS"} 
        projects={projectsObj.saas}
      />
    </FadeInSection>

    <FadeInSection className="mb-20">
      <CategorySection 
        title={"E-commerce"} 
        projects={projectsObj.ecommerce}
      />
    </FadeInSection>

    <FadeInSection className="mb-20"> 
      <CategorySection 
        title={"Dashboard"} 
        projects={projectsObj.dashboards}
      />
    </FadeInSection> 

    <FadeInSection className="mb-20"> 
      <CategorySection 
        title={"Web Apps"} 
        projects={projectsObj.webapps}
      />
    </FadeInSection>

    <FadeInSection className="mb-20">  
      <CategorySection 
        title={"Landing Pages"} 
        projects={projectsObj.landings}
      />

    </FadeInSection>

    <FadeInSection className="mb-20">
      <CategorySection 
        title={"Fun and Experimental"} 
        projects={projectsObj.fun}
      />
    </FadeInSection>
    </>
  )
}
