import { useState, useEffect, useCallback } from 'react'
import Navbar from '@/components/Navbar'
import Hero3D from '../components/Hero3D'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section')
    const scrollPosition = window.scrollY + 200

    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight &&
        sectionId
      ) {
        setActiveSection(sectionId)
      }

      // Check if section is in viewport for animations
      if (
        sectionId &&
        scrollPosition >= sectionTop - window.innerHeight * 0.3
      ) {
        setVisibleSections(prev => new Set([...prev, sectionId]))
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // Trigger initial check
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div className="min-h-screen relative overflow-x-hidden z-0">
      {/* Global Background - Fixed and Full Coverage */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Hero section - Full screen without containers */}
      <section id="home" className="relative z-10">
        <div className="absolute top-0 left-0 right-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar activeSection={activeSection} />
          </div>
        </div>
        <Hero3D />
      </section>

      {/* Rest of the content with container and dramatic animations */}
      <div className="relative z-10">
        <main>
          <section
            id="sobre"
            className={`pt-24 transition-all duration-1500 ease-out transform ${
              visibleSections.has('sobre')
                ? 'translate-x-0 opacity-100 scale-100 rotate-0'
                : '-translate-x-full opacity-0 scale-75 -rotate-12'
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Efecto de onda de fondo */}
              <div
                className={`absolute inset-0 wave-overlay ${
                  visibleSections.has('sobre') ? '' : 'opacity-0'
                }`}
              />
              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  visibleSections.has('sobre')
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
              >
                <About />
              </div>
            </div>
          </section>

          <section
            id="experiencia"
            className={`pt-24 transition-all duration-1500 ease-out transform delay-200 ${
              visibleSections.has('experiencia')
                ? 'translate-x-0 opacity-100 scale-100 rotate-0'
                : 'translate-x-full opacity-0 scale-75 rotate-12'
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Efecto de partículas flotantes */}
              <div
                className={`absolute -top-10 -left-10 w-4 h-4 bg-blue-400 rounded-full animate-float ${
                  visibleSections.has('experiencia')
                    ? 'opacity-60'
                    : 'opacity-0'
                }`}
              />
              <div
                className={`absolute -top-5 -right-5 w-3 h-3 bg-emerald-400 rounded-full animate-float-reverse delay-1000 ${
                  visibleSections.has('experiencia')
                    ? 'opacity-40'
                    : 'opacity-0'
                }`}
              />
              <div
                className={`absolute -bottom-5 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-float delay-500 ${
                  visibleSections.has('experiencia')
                    ? 'opacity-50'
                    : 'opacity-0'
                }`}
              />

              <div
                className={`transform transition-all duration-1000 delay-500 ${
                  visibleSections.has('experiencia')
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
              >
                <Experience />
              </div>
            </div>
          </section>

          <section
            id="proyectos"
            className={`pt-24 transition-all duration-1500 ease-out transform delay-300 ${
              visibleSections.has('proyectos')
                ? 'translate-x-0 opacity-100 scale-100 rotate-0'
                : '-translate-x-full opacity-0 scale-75 -rotate-12'
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              {/* Efecto de resplandor */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 transition-opacity duration-1000 ${
                  visibleSections.has('proyectos') ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <div
                className={`transform transition-all duration-1000 delay-700 ${
                  visibleSections.has('proyectos')
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
              >
                <Projects />
              </div>
            </div>
          </section>

          <section
            id="contacto"
            className={`pt-24 transition-all duration-1500 ease-out transform delay-500 ${
              visibleSections.has('contacto')
                ? 'translate-x-0 opacity-100 scale-100 rotate-0'
                : 'translate-x-full opacity-0 scale-75 rotate-12'
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Efectos de luz ambiental */}
              <div
                className={`absolute -top-20 -left-20 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl transition-opacity duration-1000 ${
                  visibleSections.has('contacto') ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div
                className={`absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl transition-opacity duration-1000 delay-300 ${
                  visibleSections.has('contacto') ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <div
                className={`transform transition-all duration-1000 delay-900 ${
                  visibleSections.has('contacto')
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
              >
                <Contact />
              </div>
            </div>
          </section>
        </main>

        <div
          className={`transition-all duration-1500 ease-out transform delay-700 ${
            visibleSections.has('contacto')
              ? 'translate-y-0 opacity-100 scale-100'
              : 'translate-y-full opacity-0 scale-90'
          }`}
        >
          <div className="relative">
            {/* Efecto final de brillo */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent transition-opacity duration-1000 delay-1000 ${
                visibleSections.has('contacto') ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
