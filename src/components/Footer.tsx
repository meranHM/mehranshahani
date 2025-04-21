"use client"

import { useEffect, useState } from "react"

export default function Footer() {
  const [uptime, setUptime] = useState<number>(0)
  const [logs, setLogs] = useState<string[]>([
    "[SYS] Initializing...",
    "[NET] Connection secured.",
    "[SEC] Firewall active."
  ])

  const currentYear = new Date().getFullYear()


  useEffect(() => {
    const uptimeInterval = setInterval(() => {
      setUptime((prev) => prev + 1)
    }, 1000)

    const logsInterval = setInterval(() => {
      const newLogs =[
        "[SYS] Running system diagnostics...",
        "[NET] Packet transmission: SUCCESS",
        "[SEC] Intrusion detection: CLEAR",
        "[NET] 127.0.0.1: Connected",
        "[SEC] LOGIN ATTEMPT FAILED ⚠",
      ]
      const randomLog = newLogs[Math.floor(Math.random() * newLogs.length)]

      setLogs((prevLogs) => {
        if (randomLog.includes("LOGIN ATTEMPT FAILED")) {
          return [...prevLogs.slice(-3), randomLog]
        }
        return [...prevLogs.slice(-3), randomLog]
        
      })
    }, 8000)

    return () => {
      clearInterval(uptimeInterval)
      clearInterval(logsInterval)
    }
  }, [])

  return (
    

    <footer
      className="mt-6 md:mt-10 mb-2 py-2 container flex flex-col items-start gap-10 max-sm:flex-col bg-color-footerBlack border-t-[2px] border-[#00ffff4d] tracking-wider"
    >
      <div
        className="flex flex-col md:flex-row w-full gap-y-10 md:gap-x-10 lg:justify-between"
      >
        <div className="text-sm md:text-lg text-center">
          <p>-----------------------------------</p>
          <p className="text-nowrap">SYSTEM STATUS:&nbsp;
            <span className="text-color-neonPurple font-bold ">
            ONLINE ✅
            </span>
          </p>
          <p className="text-nowrap">UPTIME:&nbsp;
            <span className="text-color-neonPurple font-bold ">
              {uptime} SECONDS
            </span>
          </p>
          <p className="text-nowrap">SECURITY LEVEL:&nbsp;
            <span className="text-color-neonPurple font-bold ">
              ENCRYPTED 🔒
            </span>
          </p>
          <p>-----------------------------------</p>

        </div>
        <div
          className="text-sm text-color-neonGreen text-center max-w-[400px] mx-auto h-[100px] gap-1 my-auto overflow-hidden flex flex-col justify-center"
        >
          {logs.map((log, index) => (
            <p 
              key={index}
              className={`${log.includes("LOGIN ATTEMPT FAILED") ? "warning" : ""}`}
            >
                {log}
            </p>
          ))}
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center w-full "
      >
        <p className="text-nowrap text-xs md:text-base lg:text-lg">&copy; {currentYear} Mehran Shahani | All Rights Reserved</p>
      </div>
    </footer>
  )
}