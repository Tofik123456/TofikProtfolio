import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'Projects | Tofik Umar',
  description: 'Explore projects built by Tofik Umar - Frontend Developer specializing in React.js, Next.js, and modern web technologies.',
}

const projects = [
  {
    title: 'Food Restaurant Website',
    description: 'A full-stack restaurant web app with dynamic cart functionality, add/update/remove features, and online payment integration.',
    technologies: ['React.js', 'Firebase', 'CSS3'],
    features: [
      'Dynamic cart functionality',
      'Add/update/remove features',
      'Online payment integration',
      'Real-time database sync',
    ],
  },
  {
    title: 'Foodie - Food Ordering Website',
    description: 'A responsive food ordering website with modern UI design using Flexbox, Grid, and media queries. Features smooth scrolling and interactive menu.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'DOM manipulation & event handling',
      'Smooth scrolling animations',
      'Modern responsive UI',
      'Interactive menu actions',
    ],
  },
  {
    title: 'Amazon Clone',
    description: 'An e-commerce website clone featuring product listing, UI layout, and interactive features with a responsive user-friendly interface.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Product listing & layout',
      'Interactive UI features',
      'DOM manipulation',
      'Responsive design',
    ],
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              A collection of projects that showcase my skills in frontend development and web design.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-col gap-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-zinc-50 dark:bg-zinc-800/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                  {/* Project Image */}
                  <div className="lg:w-1/2 bg-zinc-200 dark:bg-zinc-700 aspect-video lg:aspect-auto lg:min-h-80 flex items-center justify-center">
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-zinc-300 dark:bg-zinc-600 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-zinc-600 dark:text-zinc-300">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Project Preview
                      </p>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h2>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="mb-6 space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-3xl p-12 border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Interested in working together?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a
                href="mailto:tofikumar5452@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors group"
              >
                Get In Touch
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
