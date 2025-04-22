import { CategorySectionProps } from "@/types/types"
import MatrixDivider from "@/components/design/MatrixDivider"
import ProjectCarousel from "@/components/projects/ProjectCarousel"

export default function CategorySection({ title, projects }: CategorySectionProps) {
  const ariaTitle = title.toLocaleLowerCase().replace(/\s/g, '-')

  return (
    <section
        className="w-full overflow-hidden flex flex-col items-center justify-center my-10 z-[888]"
        aria-labelledby={`category-${ariaTitle}`}
    >
        <div
            className="relative w-full flex items-center justify-between p-4 mb-6 border-b border-green-400"
        >
            <h2
              id={`category-${ariaTitle}`}
              className="text-green-400 text-xl font-bold"
            >
              {title}
            </h2>
        </div>
        <ProjectCarousel projects={projects}/>
        <MatrixDivider />
    </section>
  )
}