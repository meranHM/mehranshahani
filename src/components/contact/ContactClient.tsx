"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { contactData } from "@/data"
import ContactForm from "./ContactForm"
import MatrixRain from "../design/MatrixRain"
import FadeInDiv from "../design/FadeInDiv"



export default function ContactClient() {
    const [messageSent, setMessageSent] = useState<boolean>(false)
    const [isPending, setIsPending] = useState<boolean>(false)
    
    const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>, formData: any) => {
    e.preventDefault()
    setIsPending(true)

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (result.success) {
        setMessageSent(true)
        setTimeout(() => setMessageSent(false), 3000)
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong.")
    } finally {
        setIsPending(false)
    }
  }

    return (
        <div
            className="relative text-green-400 flex flex-col items-center justify-center z-50 overflow-hidden px-4 py-6 md:py-20"
        >
          <div className="absolute left-5 top-0 h-full w-10 flex flex-col">
            <MatrixRain />
          </div>

          <FadeInDiv
            className="text-base md:text-lg text-center mb-6"
          >
            📡 SIGNAL ONLINE <span className="hidden md:block">- Ready to establish communication.</span>
          </FadeInDiv>

          <ContactForm 
            handleSubmit={handleSendMessage}
            isPending={isPending}
          />

          {messageSent && 
            <FadeInDiv 
              className="mt-4 text-green-300"
            >
              ✅ Transmission Sent Successfully.
            </FadeInDiv>
          }

          <div className="flex space-x-6 mt-8">
            {contactData.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="text-green-400 text-3xl hover:text-green-300 transition duration-200 z-[50]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.2 }}
              >
                <item.icon />
              </motion.a>
            ))}
          </div>

          <div className="absolute right-0 top-0 h-full w-10 flex flex-col">
            <MatrixRain />
          </div>
      </div>
    )
}