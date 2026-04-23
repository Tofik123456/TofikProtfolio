'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

export function CTASection() {
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
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-300 dark:bg-zinc-700 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-400 dark:bg-zinc-600 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="px-4 py-2 text-xs font-medium uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">
            Get in Touch
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mt-6 mb-6 text-balance">
            Let&apos;s Work Together
          </h2>
          
          <p className="text-zinc-500 dark:text-zinc-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            I&apos;m currently looking for new opportunities to grow and contribute. If you have a project in mind or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:tofikumar5452@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all hover:scale-105 group"
            >
              <Mail className="w-5 h-5" />
              Send an Email
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+918958402219"
              className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:scale-105"
            >
              +91 8958402219
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
