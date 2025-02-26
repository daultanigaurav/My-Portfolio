"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    techStack: ["React", "Node.js", "MongoDB"],
    liveLink: "https://project1.com",
    githubLink: "https://github.com/daultanigaurav/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    techStack: ["Vue.js", "Express", "PostgreSQL"],
    liveLink: "https://project2.com",
    githubLink: "https://github.com/daultanigaurav/project2",
  },
  // {
  //   title: "Project 3",
  //   description: "A brief description of Project 2",
  //   techStack: ["Vue.js", "Express", "PostgreSQL"],
  //   liveLink: "https://project2.com",
  //   githubLink: "https://github.com/daultanigaurav/project2",
  // },
  // {
  //   title: "Project 4",
  //   description: "A brief description of Project 2",
  //   techStack: ["Vue.js", "Express", "PostgreSQL"],
  //   liveLink: "https://project2.com",
  //   githubLink: "https://github.com/daultanigaurav/project2",
  // },
  // {
  //   title: "Project 5",
  //   description: "A brief description of Project 2",
  //   techStack: ["Vue.js", "Express", "PostgreSQL"],
  //   liveLink: "https://project2.com",
  //   githubLink: "https://github.com/daultanigaurav/project2",
  // },
  // {
  //   title: "Project 6",
  //   description: "A brief description of Project 2",
  //   techStack: ["Vue.js", "Express", "PostgreSQL"],
  //   liveLink: "https://project2.com",
  //   githubLink: "https://github.com/daultanigaurav/project2",
  // },
  // {
  //   title: "Project 7",
  //   description: "A brief description of Project 2",
  //   techStack: ["Vue.js", "Express", "PostgreSQL"],
  //   liveLink: "https://project2.com",
  //   githubLink: "https://github.com/daultanigaurav/project2",
  // },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

