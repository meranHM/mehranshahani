"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { contactData } from "@/data"
import MatrixRain from "@/components/design/MatrixRain"
import ContactForm from "@/components/contact/ContactForm"
import Terminal from "@/components/design/Terminal"
import Meta from "@/components/Meta"

export default function ContactPage() {
  const [messageSent, setMessageSent] = useState(false)
  const [isPending, setIsPending] = useState<boolean>(false)

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)

    setTimeout(() => {
      setIsPending(false)
      setMessageSent(true)
      setTimeout(() => setMessageSent(false), 3000)
    }, 1000)
  }

  return (
    <>
      <Meta 
        title="Contact | Mehran Shahani"
        description="Establish communication with Mehran Shahani through a secure contact terminal. Send your message and connect over frontend development, React, Next.js, or collaboration opportunities."
        url="https://mehranshahani.com/contact"
        keywords="Contact Mehran Shahani, frontend developer contact, web developer contact, React developer Iran, Next.js developer, TypeScript freelancer"
      />

      <div
        className="container"
      >
        <Terminal
          anchor="contact"
        >
          <div
            className="relative min-h-screen text-green-400 flex flex-col items-center justify-center z-50 overflow-hidden"
          >
            <div className="absolute left-5 top-0 h-full w-10 flex flex-col">
              <MatrixRain />
            </div>

            <motion.div
              className="text-lg text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              📡 SIGNAL ONLINE - Ready to establish communication.
            </motion.div>

            <ContactForm 
              handleSubmit={handleSendMessage}
              isPending={isPending}
            />

            {messageSent && 
              <motion.div 
                className="mt-4 text-green-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 10 }}
              >
                ✅ Transmission Sent Successfully.
              </motion.div>
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
        </Terminal>
      </div>
    </>
  )
}
