import { useMemo, useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import TechShowcase from '@/components/TechShowcase'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const NAVIGATION_IDS = [
  'home',
  'servicios',
  'stack',
  'proyectos',
  'testimonios',
  'sobre',
  'contacto',
]

type SectionVisibility = Record<string, boolean>

type SectionConfig = {
  id: string
  navTarget?: string
}

const SECTIONS_TO_OBSERVE: SectionConfig[] = [
  { id: 'home' },
  { id: 'servicios' },
  { id: 'stack' },
  { id: 'proyectos' },
  { id: 'testimonios' },
  { id: 'sobre' },
  { id: 'experiencia', navTarget: 'sobre' },
  { id: 'contacto' },
]

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [visibleSections, setVisibleSections] = useState<SectionVisibility>({
    home: true,
  })
  const [scrollProgress, setScrollProgress] = useState<number>(0)

  const visibleSet = useMemo(
    () => new Set(Object.keys(visibleSections)),
    [visibleSections]
  )

  useEffect(() => {
    const handleScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
    }

    handleScrollProgress()
    window.addEventListener('scroll', handleScrollProgress)
    return () => {
      window.removeEventListener('scroll', handleScrollProgress)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        let bestMatch: { target: string; distance: number } | null = null
        const viewportCenter = window.innerHeight / 2

        entries.forEach(entry => {
          const element = entry.target as HTMLElement
          const sectionId = element.getAttribute('id')
          if (!sectionId) return

          if (entry.isIntersecting) {
            setVisibleSections(prev => {
              if (prev[sectionId]) return prev
              return { ...prev, [sectionId]: true }
            })

            const navTarget =
              element.getAttribute('data-nav-target') || sectionId
            if (NAVIGATION_IDS.includes(navTarget)) {
              const rect = entry.boundingClientRect
              const elementCenter = rect.top + rect.height / 2
              const distance = Math.abs(elementCenter - viewportCenter)

              if (!bestMatch || distance < bestMatch.distance) {
                bestMatch = { target: navTarget, distance }
              }
            }
          }
        })

        if (bestMatch) {
          setActiveSection(bestMatch.target)
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75],
        rootMargin: '-35% 0px -35% 0px',
      }
    )

    const sectionNodes = SECTIONS_TO_OBSERVE.map(({ id }) =>
      document.getElementById(id)
    ).filter((node): node is HTMLElement => Boolean(node))

    sectionNodes.forEach(section => observer.observe(section))

    return () => {
      sectionNodes.forEach(section => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  const handleNavigate = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (!element) return

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-20 opacity-80" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(124,92,255,0.08)_0%,transparent_60%)]" />
      </div>

      <header className="nav-sticky fixed inset-x-0 top-0 z-50 flex flex-col items-center gap-3 py-4 backdrop-blur-lg">
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          navItems={NAVIGATION_IDS}
        />
        <div className="page-shell">
          <div className="h-0.5 w-full bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </header>

      <main className="relative z-10 flex flex-col gap-0">
        <HeroSection isVisible={visibleSet.has('home')} />
        <Services isVisible={visibleSet.has('servicios')} />
        <TechShowcase isVisible={visibleSet.has('stack')} />
        <Projects isVisible={visibleSet.has('proyectos')} />
        <Testimonials isVisible={visibleSet.has('testimonios')} />
        <About isVisible={visibleSet.has('sobre')} />
        <Experience isVisible={visibleSet.has('experiencia')} />
        <Contact isVisible={visibleSet.has('contacto')} />
      </main>

      <Footer />
    </div>
  )
}

export default Index
