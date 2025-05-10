import MainTerminal from "@/components/landing/MainTerminal"
import { MovingBackground } from "@/components/design/MovingBackground"


export default function LandingPage() {
  return (
    <>
      <section 
        className="h-screen relative overflow-hidden"
        id="landing"
      >
        <div 
          className="container flex flex-col items-center justify-center h-full"
        >
          <MainTerminal />
        </div>
        <MovingBackground />
      </section>
    </>
  )
}