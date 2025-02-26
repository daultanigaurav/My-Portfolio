const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "REST APIs",
    "GraphQL",
    "SQL",
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Skills</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  