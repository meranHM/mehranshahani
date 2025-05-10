import Terminal from "@/components/design/Terminal"
import ContactClient from "@/components/contact/ContactClient"
import { Metadata } from "next"


export const generateMetadata = (): Metadata => ({
  title: "Contact",
  description: "Establish communication with Mehran Shahani through a secure contact terminal. Send your message and connect over frontend development, React, Next.js, or collaboration opportunities.",
  keywords: ["Contact Mehran Shahani", "frontend developer contact", "web developer contact", "React developer Iran", "Next.js developer", "TypeScript freelancer"],
  openGraph: {
    title: "Contact",
    description: "Establish communication with Mehran Shahani through a secure contact terminal. Send your message and connect over frontend development, React, Next.js, or collaboration opportunities.",
    url: "https://mehranshahani.com/contact",
    images: ["/metatags-image.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description: "Establish communication with Mehran Shahani through a secure contact terminal. Send your message and connect over frontend development, React, Next.js, or collaboration opportunities.",
    images: ["/metatags-image.webp"],
  }
})


export default function ContactPage() {
  return (
      <div
        className="container"
      >
        <Terminal
          anchor="contact"
        >
          <ContactClient />
        </Terminal>
      </div>
  )
}
