import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { SkillsSection } from '@/components/skills-section'
import { FeaturedProjects } from '@/components/featured-projects'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 grid-background relative">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <SkillsSection />
      <FeaturedProjects />
      <CTASection />
      <Footer />
    </main>
  )
}
