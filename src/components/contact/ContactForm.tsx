"use client"

import { motion } from "framer-motion"
import { ContactFormProps } from "@/types/types"


export default function ContactForm({ handleSubmit }: ContactFormProps) {
    return (
        <motion.form
            className="bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500 w-full max-w-md z-[50]"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <label className="block text-sm mb-2">Name:</label>
            <input 
                className="w-full p-2 bg-black text-green-400 border border-green-500 rounded mb-4"
                type="text" 
                required 
            />

            <label className="block text-sm mb-2">Email:</label>
            <input 
                className="w-full p-2 bg-black text-green-400 border border-green-500 rounded mb-4"
                type="email"
                required
            />

            <label className="block text-sm mb-2">Message:</label>
            <textarea className="w-full p-2 bg-black text-green-400 border border-green-500 rounded mb-4" rows={4} required></textarea>

            <button
                className="w-full bg-green-600 hover:bg-green-400 text-black font-bold py-2 rounded"
                type="submit"
            >
                Encrypt & Send
            </button>
        </motion.form>
    )
}