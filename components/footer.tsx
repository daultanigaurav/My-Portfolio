import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/daultanigaurav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/daultanigaurav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

