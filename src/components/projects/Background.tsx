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
            <Asteriods 
                className="top-[30%] left-[10%] w-12 opacity-20"
            />
            <Asteriods 
                className="top-[10%] left-[40%] w-10 opacity-10"
            />
            <Asteriods 
                className="top-[90%] left-[70%] w-10 opacity-30"
            />
            <Asteriods 
                className="top-[10%] right-[10%] w-14 opacity-90"
            />
            <Comet />
        </div>
    )
}