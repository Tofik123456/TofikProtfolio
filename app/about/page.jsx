import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { 
  Code2, 
  Database, 
  GitBranch, 
  Layers, 
  Users, 
  Zap,
  GraduationCap,
  MapPin,
  Mail,
  Phone
} from 'lucide-react'

export const metadata = {
  title: 'About | Tofik Umar',
  description: 'Learn more about Tofik Umar - Frontend Developer specializing in React.js, Next.js, and modern web technologies.',
}

const skills = [
  {
    category: 'Frameworks',
    icon: Code2,
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Tools',
    icon: GitBranch,
    items: ['Postman', 'Git', 'GitHub'],
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['Firebase', 'Supabase'],
  },
  {
    category: 'Methodologies',
    icon: Layers,
    items: ['Microservices'],
  },
]

const softSkills = [
  { name: 'Problem-Solving', icon: Zap },
  { name: 'Team Leadership', icon: Users },
  { name: 'Quick Learner', icon: GraduationCap },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Get to know more about my background, skills, and passion for web development.
            </p>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800">
                <Image
                  src="/images/tof.jpeg"
                  alt="Tofik Umar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Tofik Umar
              </h2>
              <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6">
                Frontend Developer
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Hardworking and honest with a strong interest in web design and data analysis seeking opportunities to apply my skills in AI powered stock trading and frontend development. Passionate about learning and growing in the field of technology.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <MapPin className="w-4 h-4" />
                  <span>Ghaziabad, India</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:tofikumar5452@gmail.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                    tofikumar5452@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+918958402219" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                    +91 8958402219
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6" />
              Education
            </h2>
            <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Bachelor&apos;s in Computer Application
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-1">
                IME College Sahibabad, Ghaziabad
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Expected Graduation: 2025
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg">
                      <skill.icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                    </div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
              Soft Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="p-3 bg-zinc-200 dark:bg-zinc-700 rounded-full mb-4">
                    <skill.icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <span className="font-medium text-zinc-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
              <div className="flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <div className="p-3 bg-zinc-200 dark:bg-zinc-700 rounded-full mb-4">
                  <Zap className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                </div>
                <span className="font-medium text-zinc-900 dark:text-white text-center">
                  Results Under Pressure
                </span>
              </div>
              <div className="flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <div className="p-3 bg-zinc-200 dark:bg-zinc-700 rounded-full mb-4">
                  <Users className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                </div>
                <span className="font-medium text-zinc-900 dark:text-white text-center">
                  Teamwork & Collaboration
                </span>
              </div>
              <div className="flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <div className="p-3 bg-zinc-200 dark:bg-zinc-700 rounded-full mb-4">
                  <Code2 className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                </div>
                <span className="font-medium text-zinc-900 dark:text-white text-center">
                  Quality Focused
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
