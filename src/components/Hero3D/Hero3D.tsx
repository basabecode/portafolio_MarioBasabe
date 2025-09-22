import React, { useState, useEffect } from 'react'
import { ArrowDown, Code, Palette, Zap, Terminal } from 'lucide-react'

interface Hero3DProps {
  name?: string
  className?: string
}

const Hero3D: React.FC<Hero3DProps> = ({
  name = 'Mario Basabe',
  className = '',
}) => {
  const [typewriterText, setTypewriterText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showName, setShowName] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const fullText = 'Hola, mi nombre es '

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    } else if (currentIndex === fullText.length) {
      // Después de completar "Hola, mi nombre es ", mostrar el nombre
      setTimeout(() => {
        setShowName(true)
      }, 500)
    }
  }, [currentIndex, fullText])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      id="home"
      className={`hero-container relative w-full overflow-hidden ${className}`}
      style={{ height: '100vh' }}
    >
      {/* Modern minimalist background */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle mesh pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Dynamic light following mouse */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-5 transition-all duration-1000 ease-out pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      </div>

      {/* Modern responsive layout */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl w-full">
          {/* Main hero content - responsive */}
          <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center h-full min-h-[500px] sm:min-h-[600px]">
            {/* Text content - responsive spacing */}
            <div className="hero-text text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1 px-2 sm:px-0">
              {/* Typewriter with responsive styling */}
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-500 uppercase tracking-[0.2em] font-light">
                  <Terminal size={12} className="sm:w-[14px] sm:h-[14px]" />
                  <span></span>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 font-mono leading-relaxed">
                  {typewriterText}
                  {!showName && currentIndex >= fullText.length && (
                    <span className="animate-pulse text-white">█</span>
                  )}
                </p>
              </div>

              {/* Modern name presentation - responsive */}
              {showName && (
                <div className="space-y-6 animate-fade-in">
                  <h1 className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.85] tracking-tight text-white">
                    <span className="block">Mario</span>
                    <span className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.85] tracking-tight text-white">
                      Basabe
                    </span>
                  </h1>

                  {/* Subtitle with responsive typography */}
                  <div className="space-y-2 sm:space-y-3 ml-1 sm:ml-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 sm:w-12 h-px bg-white"></div>
                      <span className="text-base sm:text-lg md:text-xl text-white font-light tracking-wide">
                        Full Stack Developer
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 sm:w-8 h-px bg-gray-500"></div>
                      <span className="text-sm sm:text-base md:text-lg text-gray-400 font-light tracking-wider">
                        VibeCoding
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Modern skills tags - responsive */}
              {showName && (
                <div
                  className="hero-skills flex flex-wrap justify-center lg:justify-start gap-2 ml-0 sm:ml-1 lg:ml-2 animate-fade-in"
                  style={{ animationDelay: '0.5s' }}
                >
                  {['Frontend', 'Backend', 'UI/UX'].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-3 py-1 text-xs uppercase tracking-wider text-gray-400 border border-gray-700 rounded-none font-light hover:text-white hover:border-gray-500 transition-colors duration-300"
                      style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Modern CTA - responsive */}
              {showName && (
                <div
                  className="hero-cta pt-4 sm:pt-6 ml-0 sm:ml-1 lg:ml-2 animate-fade-in flex justify-center lg:justify-start"
                  style={{ animationDelay: '1s' }}
                >
                  <button
                    className="group relative inline-flex items-center gap-3 sm:gap-4 text-white hover:text-gray-300 transition-colors duration-300"
                    onClick={() => {
                      document
                        .querySelector('#sobre')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <span className="text-base sm:text-lg font-light tracking-wide">
                      Ver mi trabajo
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-8 sm:w-12 h-px bg-white group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></div>
                      <ArrowDown
                        size={14}
                        className="sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform duration-300"
                      />
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Image section - responsive approach */}
            <div className="relative order-1 lg:order-2 flex justify-center mt-8 lg:mt-0">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500 animate-pulse"></div>

                {/* Image container */}
                <div className="relative">
                  <img
                    src="/img_gris_gafas.webp"
                    alt={name}
                    className="hero-image w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    style={{
                      filter:
                        'grayscale(20%) contrast(1.1) brightness(1.1) saturate(1.2)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out both;
          }
        `,
        }}
      />
    </div>
  )
}

export default Hero3D
