import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  Home,
  Sparkles,
  Cpu,
  FolderGit2,
  MessagesSquare,
  UserRound,
  Send,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react'

const NAVIGATION_CONTENT: Record<
  string,
  {
    label: string
    icon: LucideIcon
  }
> = {
  home: { label: 'Inicio', icon: Home },
  servicios: { label: 'Servicios', icon: Sparkles },
  stack: { label: 'Tecnologías', icon: Cpu },
  proyectos: { label: 'Proyectos', icon: FolderGit2 },
  testimonios: { label: 'Testimonios', icon: MessagesSquare },
  sobre: { label: 'Sobre mí', icon: UserRound },
  contacto: { label: 'Contacto', icon: Send },
}

interface NavbarProps {
  activeSection: string
  navItems: string[]
  onNavigate: (id: string) => void
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

    const Icon = config.icon
    const isActive = activeSection === id
    const isSobre = id === 'sobre'

    return (
      <button
        key={id}
        type="button"
        onClick={() => onNavigate(id)}
        className={`group relative flex items-center gap-2 rounded-full py-2 text-sm font-medium transition-all duration-300 ${
          isSobre ? 'px-8' : 'px-6'
        } ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
        aria-current={isActive ? 'page' : undefined}
      >
        <span
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isActive
              ? 'bg-white/20 opacity-100 backdrop-blur-xl shadow-lg shadow-primary/20'
              : 'bg-white/10 opacity-0 group-hover:opacity-100'
          }`}
        />
        <span className="relative flex items-center gap-2 whitespace-nowrap">
          <Icon className={`h-4 w-4 ${isActive ? 'text-primary' : 'text-white/50'}`} />
          {config.label}
        </span>
        <span
          className={`pointer-events-none absolute -bottom-2 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent shadow-lg shadow-primary/30 transition-all duration-300 ${
            isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        />
      </button>
    )
  }

  return (
    <nav
      className={`relative flex w-full justify-center transition-colors duration-300 ${
        scrolled
          ? 'bg-[rgba(8,12,20,0.95)] backdrop-blur-xl border-b border-white/10 shadow-[0_30px_80px_-40px_rgba(15,20,40,0.95)]'
          : 'bg-transparent'
      }`}
      aria-label="Navegación principal"
    >
      <div className="page-shell flex items-center justify-between gap-6 py-4">
        <div className="flex items-center gap-3 lg:flex-1">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="relative flex h-12 w-24 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-black shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Logo Mario Basabe"
          >
            <img
              src="/MB_plata.png"
              alt="Mario Basabe"
              className="h-full w-full object-contain p-1"
              draggable={false}
            />
          </button>
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.32em] text-white/60">
              Mario Basabe
            </span>
            <span className="flex items-center gap-2 text-sm text-white">
              Full Stack Developer
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-emerald-300">
                Disponible
              </span>
            </span>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-center gap-6">
          {navItems.map(renderNavButton)}
        </div>

        <div className="hidden lg:flex flex-1 justify-end">
          <a
            href="https://wa.me/573003094854"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
          >
            Hablemos
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-white/30 hover:bg-white/15"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full mt-3 px-4 pb-4 lg:hidden">
          <div className="page-shell px-0">
            <div className="rounded-3xl border border-white/10 bg-[rgba(10,15,26,0.95)] p-4 shadow-2xl">
              <div className="flex flex-col gap-2">
                {navItems
                  .map(id => ({ id, config: NAVIGATION_CONTENT[id] }))
                  .filter(section => Boolean(section.config))
                  .map(({ id, config }) => {
                    if (!config) return null
                    const Icon = config.icon
                    const isActive = activeSection === id

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => {
                          onNavigate(id)
                          setIsMenuOpen(false)
                        }}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                          isActive
                            ? 'bg-white/10 text-white shadow-lg shadow-primary/20'
                            : 'bg-transparent text-white/70 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="font-semibold whitespace-nowrap">{config.label}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    )
                  })}
                <a
                  href="https://wa.me/573003094854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40"
                >
                  Hablemos
                  <ArrowUpRight className="h-4 w-4" />
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

