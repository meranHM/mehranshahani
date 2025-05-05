import { blogPosts } from "@/data/blogPosts"
import BlogPostCard from "./BlogPostCard"
import Link from "next/link"


export default function BlogSection() {

  return (
    <section
        className="relative z-50 px-4 py-8 max-w-5xl mx-auto"
    >
        <h2
            className="text-3xl font-bold text-glow text-center mb-10"
        >
             Latest Logs 📜
        </h2>

        <div
            className="flex flex-col gap-8"
        >
                {blogPosts.map((post, index) => (
                    <BlogPostCard 
                        key={index}
                        image={post.image}
                        title={post.title}
                        excerpt={post.excerpt}
                        url={post.url}
                    />
                ))}
        </div>
    </section>
  )
}