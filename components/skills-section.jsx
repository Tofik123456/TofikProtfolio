'use client'

import { useEffect, useRef, useState } from 'react'
import { Code2, Database, Wrench, Users } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'Firebase', 'Supabase']
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code']
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Team Leadership', 'Problem Solving', 'Quick Learner', 'Collaboration']
  }
]

export function SkillsSection() {
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
    <section ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="px-4 py-2 text-xs font-medium uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mt-6 mb-4 text-balance">
            Technologies I Work With
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Constantly learning and expanding my toolkit to build better digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className={`p-8 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-zinc-200 dark:bg-zinc-700 rounded-xl">
                    <Icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-200 dark:border-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
