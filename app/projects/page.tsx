"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Clubs-Hub",
    description: "A centralized platform for college students to explore events, discover clubs, and stay updated with opportunities in a seamless and professional way.",
    techStack: ["React", "Django", "PostgreSQL"],
    liveLink: "https://clubshub.vercel.app",
    githubLink: "https://github.com/daultanigaurav/clubs-hub",
  },
  {
    title: "ShareMyRide",
    description: "Connecting commuters for safer and more convenient travel with seamless booking experience.",
    techStack: ["React", "Django", "PostgreSQL"],
    liveLink: "https://sharemyride.vercel.app/",
    githubLink: "https://github.com/daultanigaurav/Sharemyride",
  },
   {
    title: "Grabitnow",
    description: "An e-commerce platform where buyers can negotiate prices on selected items through a chatbot-driven system",
    techStack: ["React", "Django", "PostgreSQL"],
    liveLink: "https://grabitnow.vercel.app/",
    githubLink: "https://github.com/daultanigaurav/grabitnow",
  },
  {
    title: "MetaMint",
    description: "Platform designed to reduce high cross-border transaction fees, offering a seamless way to send money and invest in NFTs and cryptocurrency.",
    techStack: ["React", "Django", "PostgreSQL" , "Ethers.js"],
    liveLink: "",
    githubLink: "https://github.com/daultanigaurav/metamint",
   },
  {
    title: "HostelFix",
    description: "The website is a portal for hostel students to quickly raise and resolve issues, ensuring timely solutions to enhance their living experience.",
    techStack: ["React", "Django", "PostgreSQL"],
    liveLink: "https://project2.com",
    githubLink: "https://github.com/daultanigaurav/hostelfix",
  },
  {
    title: "PureCraft",
    description: "A digital marketplace empowering local artisans to showcase their unique, handmade creations to the world, bridging the gap between tradition and modern consumers.",
    techStack: ["React", "Django", "PostgreSQL"],
    liveLink: "https://purecraft.vercel.app/",
    githubLink: "https://github.com/daultanigaurav/purecraft",
  },
  // {
  //   title: "Project 7",
  //   description: "A brief description of Project 2",
  //   techStack: ["Vue.js", "Express", "PostgreSQL"],
  //   liveLink: "https://project2.com",
  //   githubLink: "https://github.com/daultanigaurav/project2",
  // },
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

