import type { Metadata } from "next"
import { JetBrains_Mono, Orbitron, Press_Start_2P } from "next/font/google"
import "./globals.css"
import ClientLayout from "@/components/ClientLayout"


const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-mono",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbit",
})

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-press-start",
})


export const metadata: Metadata = {
  metadataBase: new URL("https://mehranshahani.com"),
  title: "Mehran Shahani",
  description: "A portfolio website belonging to Mehran Shahani",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Mehran Shahani",
    description: "Creative frontend developer with a cyberpunk and terminal-inspired portfolio",
    url: "https://mehranshahani.com",
    siteName: "Mehran Shahani",
    images: [
      {
        url: "/metatags-image.webp",
        width: 1200,
        height: 630,
        alt: "Mehran Shahani Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehran Shahani",
    description: "Creative frontend developer with a cyberpunk and terminal-inspired portfolio",
    images: ["/metatags-image.webp"],
  },
}

export const viewport = {
  themeColor: "#0A0F1D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrains.variable} ${orbitron.variable} ${pressStart2P.variable} antialiased`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
