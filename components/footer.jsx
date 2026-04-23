import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Tofik Umar
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Frontend Developer based in Ghaziabad, India
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:tofikumar5452@gmail.com"
              className="p-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            </a>
            <a
              href="tel:+918958402219"
              className="p-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            {new Date().getFullYear()} Tofik Umar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
