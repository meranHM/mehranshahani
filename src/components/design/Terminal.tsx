import { TerminalProps } from "@/types/types"
import FadeInSection from "./FadeInSection"


export default function Terminal({ children, className, anchor }: TerminalProps) {
    return (
        <FadeInSection
            className={`w-full ${className || ""} z-50 mx-auto mt-10 bg-color-terminalBlack rounded-lg neon-border overflow-hidden`}
        >
            <div
                className="flex justify-between items-center px-3 py-2 border-b border-color-neonGreen rounded-t-lg"
            >
                <div className="flex gap-1 md:gap-2">
                    <span className="w-2 md:w-3 h-2 md:h-3 bg-red-500 rounded-full"></span>
                    <span className="w-2 md:w-3 h-2 md:h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full"></span>
                </div>
                <span 
                    className="text-xs text-color-neonGreen"
                >
                        root@cyber-portfolio: {anchor || "~"}
                </span>
                <div className="w-12"/>
            </div>
            {children}
        </FadeInSection>
    )
}