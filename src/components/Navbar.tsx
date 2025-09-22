import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react'

interface NavbarProps {
  activeSection: string
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: 'home', icon: Home },
    { name: 'Sobre', href: 'sobre', icon: User },
    { name: 'Experiencia', href: 'experiencia', icon: Briefcase },
    { name: 'Proyectos', href: 'proyectos', icon: FolderOpen },
    { name: 'Contacto', href: 'contacto', icon: Mail },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
      style={{
        background: scrolled
          ? 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(15,23,42,0.9) 100%)'
          : 'transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center cursor-pointer group"
            >
              <div className="relative">
                {/* Glassmorphism container for logo */}
                <div
                  className={`relative w-10 h-10 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                    scrolled
                      ? 'bg-white/10 border-white/20 shadow-lg shadow-black/20'
                      : 'bg-white/5 border-white/10'
                  } group-hover:bg-white/20 group-hover:border-white/30 group-hover:scale-105`}
                >
                  <img
                    src="/MB_plata.png"
                    alt="Mario Basabe"
                    className="w-full h-full object-contain rounded-xl p-1 filter brightness-110"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Optional text logo */}
                <div className="hidden sm:block absolute left-12 top-1/2 -translate-y-1/2">
                  <span
                    className={`text-lg font-bold transition-all duration-300 ${
                      scrolled ? 'text-white drop-shadow-lg' : 'text-white/90'
                    } group-hover:text-emerald-300`}
                  >
                    PORTAFOLIO WEB
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map(item => {
                const Icon = item.icon
                const isActive = activeSection === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className={`group relative px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? `${
                            scrolled
                              ? 'bg-white/20 text-emerald-300 shadow-lg shadow-emerald-500/20 border border-emerald-400/30'
                              : 'bg-white/15 text-emerald-300 shadow-lg shadow-emerald-500/10 border border-emerald-400/20'
                          }`
                        : `${
                            scrolled
                              ? 'text-gray-200 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20'
                              : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10'
                          }`
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full" />
                    )}

                    {/* Hover glow effect */}
                    <div
                      className={`absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                        isActive
                          ? 'bg-gradient-to-r from-emerald-500/10 to-blue-500/10'
                          : 'bg-gradient-to-r from-white/5 to-white/10'
                      }`}
                    />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                scrolled
                  ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-4 pb-6 space-y-2 backdrop-blur-md rounded-b-2xl border-b border-x ${
                scrolled
                  ? 'bg-black/80 border-white/20'
                  : 'bg-black/60 border-white/10'
              }`}
            >
              {navItems.map(item => {
                const Icon = item.icon
                const isActive = activeSection === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20'
                    }`}
                  >
                    <div
                      className="flex items-center w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                      {/* Mobile active indicator */}
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full" />
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
