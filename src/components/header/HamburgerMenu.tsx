"use client"

import { usePathname } from "next/navigation"

export function HamburgerMenu() {
  const location = usePathname()

    return (
      <div className="absolute inset-0 pointer-events-none bg-color-terminalBlack rounded-lg shadow-lg neon-border mx-5 mb-5 lg:hidden">
        <div
            className="flex items-center justify-between px-3 py-2 bg-color-terminalHeader border-b border-color-neonGreen rounded-t-lg"
            id="terminal-header"
        >
            <div className="flex gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-xs mr-2 text-color-neonGreen">root@cyber-portfolio:{location}</span>
        </div>
      </div>
    );
  };