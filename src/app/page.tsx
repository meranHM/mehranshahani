import MainTerminal from "@/components/landing/MainTerminal"
import { MovingBackground } from "@/components/design/MovingBackground"
import Meta from "@/components/Meta"


export default function LandingPage() {
  return (
    <>
      <Meta 
        title="Mehran Shahani"
        description="A terminal-inspired portfolio by Mehran Shahani featuring interactive navigation and modern design."
      />

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