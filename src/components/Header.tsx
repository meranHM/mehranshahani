"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigation } from "../constants"
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll"
import {  useState } from "react"
import { HamburgerMenu } from "./HamburgerMenu"
import MenuSvg from "@/components/MenuSvg"
import HeaderTerminal from "./HeaderTerminal"


export default function Header() {
  const location = usePathname()
  const [openNavigation, setOpenNavigation] = useState(false)

  
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll()
    setOpenNavigation(false)
  }


  return (
    <header 
        className={`fixed top-0 left-0 w-full z-[10000] font-orbit md:py-2 ${openNavigation ? "bg-color-terminalBlack" : "backdrop-blur-md bg-[#08121C]/80 shadow-[0px_0px_10px_2px_rgba(0,255,128,0.3)]"}`}
    >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <Link
              href="/"
              className="block w-[12rem] xl:mr-8" 
            >
              <img 
                className="neon-border rounded-lg"
                src="/ms-logo.webp" 
                width={50} 
                height={50} 
                alt="Mehran Shahani Logo" 
              />
            </Link>

            <nav
              className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 mt-5 lg:static lg:flex lg:mx-auto lg:mt-0`}
            >
              <div
                className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"
              >
                {navigation.map(item => (
                  <Link
                    key={item.id}
                    href={item.url}
                    onClick={handleClick}
                    className={`block relative text-2xl uppercase z-[999] transition-colors hover:glitch px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold lg:leading-5 xl:px-12 ${item.url === location
                      ? "z-2 lg:text-color-neonCyan"
                      : "lg: text-gray-500"
                    } `}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <HamburgerMenu />
            </nav>

            <HeaderTerminal 
              className="hidden lg:block"
            />

            <button
              className="ml-auto neon-border p-1 hover:glitch rounded-lg lg:hidden"
              onClick={toggleNavigation}
            >
              <div className="flex gap-1 mb-1 ml-[2px]">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                <span className="w-1 h-1 bg-green-500 rounded-full"></span>
              </div>
              <MenuSvg />
            </button>
        </div>

    </header>
  )
}