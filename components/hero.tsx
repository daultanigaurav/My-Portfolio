import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Hi, I'm</span>{" "}
              <span className="block text-indigo-600 xl:inline">Gaurav Daultani</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
              A passionate developer creating amazing web experiences.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get in touch
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#projects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  View projects
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Your Name"
              width={400}
              height={400}
              className="rounded-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

