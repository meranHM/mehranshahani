import { 
  ReactNode, 
  FormEvent,
  KeyboardEvent,
  ChangeEvent
} from "react"



export interface GlitchEffectProps {
    className?: string
    children: ReactNode
    id: string
  }

export interface CommandInputProps {
  handleKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
  userInput?: string
  className?: string
}

export interface CommandOutputProps {
  className?: string
}

export interface MenuSvgProps {
  openNavigation: boolean
}

export interface MiniTerminalProps {
  message: string
  anchor: string
  className?: string
}

export interface FadeInSectionProps {
  children: ReactNode
  className?: string
}

export interface ProgressBarProps {
  level: number
  color: string
  delay: number
}

export interface BlogPostCardProps {
  image: string
  title: string
  excerpt: string
  url: string
}

export interface GlitchTransitionProps {
  children: ReactNode
}

export interface ProjectCategory {
    title: string
    description: string
    techStack: string[]
    thumbnail: string
    liveDemo: string
    repo: string
    video?: string
    featured?: boolean
}

export interface ProjectCardProps {
  project: ProjectCategory
}

export interface CategorySectionProps {
  projects: ProjectCategory[]
  title: string
}

export interface ProjectsCarouselProps {
  projects: ProjectCategory[]
}

export interface TimelineItemProps {
  year: string
  title: string
  description: string
  future?: boolean
}

export interface HeaderTerminalProps {
  className?: string
}

export interface ContactFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  isPending: boolean
}




