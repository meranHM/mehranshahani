import { ReactNode } from "react"

export interface GlitchEffectProps {
    className?: string
    children: ReactNode
    id?: string
  }

export interface CommandInputProps {
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
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
    video: string
}

export interface CategorySectionProps {
  projects: ProjectCategory[]
  title: string
}

export interface ProjectsCarouselProps {
  projects: ProjectCategory[]
}

export interface HeaderTerminalProps {
  className?: string
}





