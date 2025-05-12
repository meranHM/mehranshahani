import MainTerminal from "@/components/landing/MainTerminal"
import { MovingBackground } from "@/components/design/MovingBackground"


export default function LandingPage() {
  return (
      <section 
        className="min-h-[100dvh] md:h-screen landscape:py-3 landscape:min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
        id="landing"
      >
        <div 
          className="container flex flex-col items-center justify-center h-full landscape:min-h-[80dvh] landscape:px-10"
        >
          <MainTerminal />
        </div>
        <MovingBackground />
      </section>
  )
}