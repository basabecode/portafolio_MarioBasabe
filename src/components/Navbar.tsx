import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const NAVIGATION_CONTENT: Record<string, { label: string }> = {
  home: { label: 'Inicio' },
  servicios: { label: 'Servicios' },
  proyectos: { label: 'Proyectos' },
  testimonios: { label: 'Testimonios' },
  sobre: { label: 'Sobre mí' },
  contacto: { label: 'Contacto' },
}

interface NavbarProps {
  activeSection: string
  navItems: string[]
  onNavigate: (id: string) => void
}

const CONTACT_CTA = {
  href: 'https://wa.me/573003094854',
  label: 'Contactar ahora',
}

const Navbar = ({ activeSection, navItems, onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32)

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const closeMenu = () => setIsMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    window.addEventListener('scroll', closeMenu)

    return () => {
      window.removeEventListener('resize', closeMenu)
      window.removeEventListener('scroll', closeMenu)
    }
  }, [isMenuOpen])

  const renderNavButton = (id: string) => {
    const config = NAVIGATION_CONTENT[id]
    if (!config) return null

    const isActive = activeSection === id

    return (
      <button
        key={id}
        type="button"
        onClick={() => onNavigate(id)}
        className={`group relative px-2 pb-2 pt-1 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
          isActive ? 'text-white' : 'text-white/70 hover:text-white/90'
        }`}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className="relative z-10 whitespace-nowrap">{config.label}</span>
        <span
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-primary via-secondary to-primary transition-opacity duration-200 ${
            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-80'
          }`}
          aria-hidden="true"
        />
      </button>
    )
  }

  return (
    <nav
      className={`relative flex w-full justify-center transition-colors duration-300 ${
        scrolled
          ? 'bg-[rgba(8,12,20,0.92)] backdrop-blur-xl border-b border-white/10 shadow-[0_24px_60px_-40px_rgba(12,14,22,0.9)]'
          : 'bg-transparent'
      }`}
      aria-label="Navegación principal"
    >
      <div className="page-shell flex items-center justify-between gap-4 py-3 lg:py-4">
        <div className="flex items-center gap-3 lg:gap-4">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black/80 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Ir al inicio"
          >
            <img
              src="/MB_plata.png"
              alt="Mario Basabe"
              className="h-full w-full object-contain p-2"
              draggable={false}
            />
          </button>
          <div className="flex flex-col">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/60">
              Mario Basabe
            </span>
            <span className="text-sm font-medium text-white/80">
              Full Stack Developer
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map(renderNavButton)}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-white/70">
            <span
              className="h-2.5 w-2.5 rounded-full bg-emerald-400"
              aria-hidden="true"
            />
            Disponible para nuevos proyectos
          </span>
          <a
            href={CONTACT_CTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-sm font-semibold text-slate-900 px-5 py-2.5 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            {CONTACT_CTA.label}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={CONTACT_CTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-200 hover:border-white/40 hover:text-white"
            aria-label="Contactar ahora"
          >
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full mt-3 px-4 pb-4 lg:hidden">
          <div className="page-shell px-0">
            <div className="rounded-3xl border border-white/12 bg-[rgba(10,15,26,0.95)] p-4 shadow-2xl">
              <div className="flex flex-col gap-2">
                {navItems
                  .map(id => ({ id, config: NAVIGATION_CONTENT[id] }))
                  .filter(({ config }) => Boolean(config))
                  .map(({ id, config }) => {
                    if (!config) return null
                    const isActive = activeSection === id

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => {
                          onNavigate(id)
                          setIsMenuOpen(false)
                        }}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-white/12 text-white'
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {config.label}
                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary transition-opacity ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    )
                  })}
                <a
                  href={CONTACT_CTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {CONTACT_CTA.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar


