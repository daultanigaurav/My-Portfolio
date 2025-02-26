"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Python", level: 70 },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="text-lg mb-8">
          I'm a passionate Full-Stack Developer with experience in building modern web applications. I love learning new
          technologies and solving complex problems.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="w-full" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

