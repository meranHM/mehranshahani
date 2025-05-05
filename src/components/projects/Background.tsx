import Nebula from "./Nebula"
import Asteriods from "./Asteroids"
import Comet from "./Comet"


export default function Background() {
    return (
        <div
            className="fixed inset-0 overflow-hidden pointer-events-none"
        >
            <div 
                className="absolute inset-0 bg-black bg-[radial-gradiant(white_1px,transparent_1px)] bg-[length:3px_3px] animate-twinkle opacity-10"
            />
            <Nebula />
            <Asteriods />
            <Comet />
        </div>
    )
}