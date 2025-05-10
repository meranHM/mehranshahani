"use client"

import { useDispatch } from "react-redux"
import { deactivateRetro } from "@/lib/store/slices/retroSlice"


export default function RetroVersionClient() {
    const dispatch = useDispatch()
    const date = new Date()
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    const handleExitRetro = () => {
        document.body.classList.remove("bg-white")
        dispatch(deactivateRetro())
    }

    return (
        <div className="text-black min-h-screen font-serif bg-[#fefefe] px-4 py-8 max-w-3xl mx-auto border-r-2 border-l-2">
          <header className="text-center border-b border-black pb-4 mb-6">
            <h1 className="text-4xl font-bold uppercase">The Mehran Times</h1>
            <p className="text-sm mt-2">Est. 2025 | Web Developer Edition</p>
          </header>

          <p className="italic text-sm text-gray-600 mt-1">Published: {formattedDate}</p>
          <hr className="my-4 border-black" />

          <main>
            <section className="mb-10">
              <h2 className="text-2xl font-bold uppercase border-b border-black mb-2">About the Developer</h2>
              <p className="leading-relaxed text-justify">
                Mehran Shahani is a web developer passionate about crafting immersive digital
                experiences. With a flair for turning ideas into code, he specializes in modern
                front-end technologies like React, Redux, Next.js, TypeScript, and Tailwind CSS. In this
                newspaper-style page, we honor the simplicity of the early web.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold uppercase border-b border-black mb-2">Technical Skillset</h2>
              <ul className="list-disc list-inside leading-loose">
                <li><strong>Languages:</strong> JavaScript, TypeScript, HTML5, CSS3</li>
                <li><strong>Frameworks & Libraries:</strong> React,React Router, Redux, Next.js</li>
                <li><strong>Styling:</strong> Tailwind CSS, Sass, Responsive Design</li>
                <li><strong>Tools & Practices:</strong> Git, GitHub, VSCode, REST APIs, Debugging</li>
                <li><strong>State Management:</strong> Redux Toolkit, Context API</li>
                <li><strong>Animations:</strong> Framer Motion, GSAP (beginner)</li>
                <li><strong>Soft Skills:</strong> Problem-Solving, Teamwork, Curiosity, UI/UX Attention</li>
              </ul>
            </section>
      
            <section className="mb-10">
              <h2 className="text-2xl font-bold uppercase border-b border-black mb-2">Recent Projects</h2>
              <ul className="list-disc pl-5 leading-loose">
                <li><strong>FocusFrame</strong> - A portfolio template for photographers and visual creatives.</li>
                <li><strong>Terminal Portfolio</strong> - A cyberpunk-themed interactive developer portfolio.</li>
                <li><strong>SlideForge</strong> - A SaaS product to create beautiful, client-ready presentations in minutes.</li>
                <li><strong>Coming Soon</strong> - More creative templates and surprises in the pipeline.</li>
              </ul>
            </section>
      
            <section className="mb-10">
              <h2 className="text-2xl font-bold uppercase border-b border-black mb-2">Contact</h2>
              <p>
                Have a project in mind? You can reach Mehran via
                <a href="mailto:mehranshahani6@gmail.com" className="underline ml-1">mehranshahani6@gmail.com</a>
              </p>
            </section>
          </main>
          <footer className="text-center border-t border-black pt-4 mt-10 text-sm">
            <p>&copy; 2025 The Mehran Times. All Rights Reserved.</p>
            <button
              onClick={() => handleExitRetro()}
              className="mt-8 underline text-blue-700 hover:text-red-500"
            >
              Exit Retro Mode
            </button>
          </footer>
        </div>
    )
}