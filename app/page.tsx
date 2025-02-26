"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Gaurav Daultani</span>
        </h1>
        <h2 className="text-2xl mb-6">Full-Stack Developer</h2>
        <p className="text-lg mb-8 max-w-md mx-auto">
          I create modern web applications with a focus on user experience and performance.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/contact">Contact Me</a>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

