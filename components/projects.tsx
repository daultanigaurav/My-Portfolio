import Image from "next/image"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Projects</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-block px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

