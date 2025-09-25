import { Github, Linkedin, Mail, ArrowUpRight, Heart, FileText } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  const quickLinks = [
    { label: 'Servicios', id: 'servicios' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Testimonios', id: 'testimonios' },
    { label: 'Sobre mí', id: 'sobre' },
  ]

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="relative border-t border-white/10 bg-[rgba(5,8,18,0.95)] py-16 text-white/70">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(108,99,255,0.18),transparent_55%)] opacity-80" />
      <div className="page-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
              <img
                src="/MB_plata.png"
                alt="Mario Basabe"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Mario Basabe
              </span>
              <span className="text-sm text-white">Full Stack Developer</span>
            </div>
          </div>
          <p className="text-sm text-white/60">
            Portafolio y laboratorio creativo donde desarrollo productos digitales para marcas que buscan diferenciarse. Diseño, ingeniería y estrategia trabajando juntos.
          </p>
          <button
            onClick={() => handleNavigate('contacto')}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-white/40"
          >
            Agenda una sesión de discovery
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-rotate-12 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
            Navegación
          </h3>
          <ul className="grid gap-3 text-sm">
            {quickLinks.map(link => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavigate(link.id)}
                  className="text-left text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
            Contacto directo
          </h3>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:hello@mariobasabe.com"
              className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              hello@mariobasabe.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <Github className="h-4 w-4" />
              github.com/mariobasabe
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              linkedin.com/in/mariobasabe
            </a>
            <a
              href="/MarioBasabe_CV.pdf"
              className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <FileText className="h-4 w-4" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6">
        <div className="page-shell flex flex-col items-center gap-3 text-sm text-white/50 sm:flex-row sm:justify-between">
          <span>
            © {year} Mario Basabe — Diseñado y desarrollado con pasión
          </span>
          <span className="inline-flex items-center gap-2">
            <Heart className="h-4 w-4 text-accent" />
            Código limpio, resultados medibles
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
