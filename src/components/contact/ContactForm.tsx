"use client"

import { useState, useRef } from "react"
import { motion,} from "framer-motion"
import { ContactFormProps } from "@/types/types"
import { ChangeEvent, FormEvent } from "react"


export default function ContactForm({ handleSubmit, isPending }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const nameInputRef = useRef<HTMLInputElement>(null)


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        handleSubmit(e)
        setFormData({ name: "", email: "", message: "" })

        // Focusing back to the first input
        setTimeout(() => {
            if (!nameInputRef.current) return

            nameInputRef.current.focus()
        }, 300)
    }

    return (
            <motion.form
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500 w-full max-w-md z-50"
                onSubmit={onSubmit}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
            >
                <label 
                    className="block text-sm mb-2"
                    htmlFor="name"
                >
                    Name:
                </label>
                <input
                    onChange={handleChange}
                    value={formData.name}
                    name="name"
                    ref={nameInputRef}
                    className="w-full p-2 bg-black text-green-400 border border-green-500 rounded mb-4"
                    type="text" 
                    required 
                />

                <label 
                    className="block text-sm mb-2"
                    htmlFor="email"
                >
                    Email:
                </label>
                <input
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    className="w-full p-2 bg-black text-green-400 border border-green-500 rounded mb-4"
                    type="email"
                    required
                />

                <label 
                    className="block text-sm mb-2"
                    htmlFor="message"
                >
                    Message:
                </label>
                <textarea
                    onChange={handleChange}
                    value={formData.message}
                    className="w-full p-2 bg-black text-green-400 border border-green-500 rounded mb-4"
                    name="message"
                    rows={4} 
                    required
                ></textarea>

                <button
                    className={`w-full bg-green-600 ${isPending ? "opacity-50 cursor-not-allowed" : "hover:animate-glitch"} text-black font-bold py-2 rounded`}
                    type="submit"
                    aria-label="Send message"
                    disabled={isPending}
                >
                    {isPending ? "Transmitting..." : "Encrypt & Send"}
                </button>
            </motion.form>
    )
}