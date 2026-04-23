'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Github, Utensils, ShoppingCart, UtensilsCrossed } from 'lucide-react'

const projects = [
  {
    title: 'Food Restaurant Website',
    description: 'A full-stack restaurant web app with dynamic cart functionality, add/update/remove features, and online payments.',
    tech: ['React.js', 'Firebase', 'JavaScript'],
    icon: Utensils,
  },
  {
    title: 'Foodie - Food Ordering',
    description: 'A responsive food ordering website with DOM manipulation, smooth scrolling, and modern UI using Flexbox and Grid.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    icon: UtensilsCrossed,
  },
  {
    title: 'Amazon Clone',
    description: 'An e-commerce clone with product listing, interactive features, and a responsive user-friendly interface.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    icon: ShoppingCart,
  }
]

export function FeaturedProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-zinc-100 dark:bg-zinc-800/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="px-4 py-2 text-xs font-medium uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mt-6 text-balance">
              Selected Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className={`group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project Icon Header */}
                <div className="h-48 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-700 opacity-0 group-hover:opacity-30 transition-opacity" />
                  <Icon className="w-16 h-16 text-zinc-500 dark:text-zinc-400 group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
