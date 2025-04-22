import { MiniTerminalProps } from "@/types/types"

export default function MiniTerminal({message, anchor, className}: MiniTerminalProps) {

  return (
    <div 
      id={anchor}
      className={`${className || ""}`}
    > 
      <div
        className="flex items-center justify-between px-3 py-2 bg-color-terminalHeader border-b border-color-neonGreen rounded-t-lg"
      >
          <span className="text-xs text-color-neonGreen tracking-widest">
            root@cyber-portfolio: {anchor}
          </span>
      </div>
      <div 
        className="py-2 px-7 overflow-hidden terminal-glow scanline"
      >
        <pre className="text-wrap text-xs md:text-lg animate-textFlicker">
          {message}
        </pre>
      </div>
    </div>
  )
}