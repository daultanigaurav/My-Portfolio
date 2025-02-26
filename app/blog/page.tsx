"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const posts = [
  {
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js",
    date: "2023-05-15",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "The Power of TypeScript",
    description: "Discover why TypeScript is becoming the go-to language for web development",
    date: "2023-06-01",
    slug: "the-power-of-typescript",
  },
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

