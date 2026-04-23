'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 relative">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-zinc-300 dark:bg-zinc-700 rounded-full blur-3xl opacity-20 animate-pulse-subtle" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-400 dark:bg-zinc-600 rounded-full blur-3xl opacity-15 animate-pulse-subtle animation-delay-500" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-6 opacity-0 animate-fade-in-up">
              <span className="px-4 py-2 text-xs font-medium uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">
                Available for work
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 text-balance opacity-0 animate-fade-in-up animation-delay-100">
              Hi, I&apos;m{' '}
              <span className="relative inline-block">
                Tofik Umar
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-zinc-900 dark:bg-white rounded-full" />
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-600 dark:text-zinc-400 mb-4 font-medium opacity-0 animate-fade-in-up animation-delay-200">
              Frontend Developer
            </p>
            
            <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in-up animation-delay-300">
              Passionate about crafting beautiful, performant web experiences using React.js, Next.js, and modern web technologies. Based in Ghaziabad, India.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-in-up animation-delay-400">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all hover:scale-105 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:scale-105"
              >
                About Me
              </Link>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-500">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 opacity-0 animate-scale-in animation-delay-300">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-zinc-300 dark:bg-zinc-700 rounded-full blur-2xl opacity-40" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 shadow-2xl">
                <Image
                  src="/images/tof.jpeg"
                  alt="Tofik Umar - Frontend Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animation-delay-800">
          <div className="flex flex-col items-center gap-2 text-zinc-500 dark:text-zinc-500">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
