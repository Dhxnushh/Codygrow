import { NavBar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about'
import { ServicesSection } from '@/Components/services'
import { Footer } from '@/Components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-[#0B1221]">
        <NavBar />
        <HeroSection />
      </div>
      <AboutSection />
      <ServicesSection/>
      <Footer/>
    </main>
  )
}

