import { ArrowUpRight, ArrowDownRight, Sparkles, ShieldCheck } from 'lucide-react'

interface HeroSectionProps {
  isVisible: boolean
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  const handleNavigate = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      data-observe-section
      className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-40"
    >
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-primary/40 via-secondary/30 to-transparent blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-secondary/40 via-accent/30 to-transparent blur-[140px]" />
        <div className="grid-overlay absolute inset-6 rounded-[2.5rem]" />
      </div>

      <div
        className={`page-shell flex flex-col gap-16 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-95'
        }`}
      >
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-white/70">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              VibeCoding Studio
            </div>

            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Transformo ideas en experiencias digitales excepcionales
              </h1>
              <p className="max-w-2xl text-balance text-base text-white/70 sm:text-lg">
                Soy Mario, desarrollador full stack con enfoque en productos de alto impacto. Combino diseño estratégico, ingeniería robusta y medición constante para lanzar soluciones digitales que generan resultados reales.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button
                onClick={() => handleNavigate('proyectos')}
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition-transform duration-300 hover:-translate-y-1"
              >
                Ver mis proyectos
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-rotate-12" />
              </button>
              <button
                onClick={() => handleNavigate('contacto')}
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white"
              >
                Contactar ahora
                <ArrowDownRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/70 sm:justify-start">
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'UI Systems'].map(item => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/60"
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left sm:justify-start">
                <ShieldCheck className="h-6 w-6 text-secondary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Código 100% estandarizado
                  </p>
                  <p className="text-sm font-semibold text-white">
                    +8 años construyendo productos escalables
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative h-[360px] w-[360px] max-w-[90vw] rounded-full border border-white/10 bg-[rgba(8,12,24,0.8)] p-4 shadow-[0_40px_90px_-50px_rgba(15,20,40,0.9)] sm:h-[420px] sm:w-[420px]">
              <div className="blur-gradient-ring" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/40 via-transparent to-secondary/30 opacity-70" />
              <img
                src="/img_gris_gafas.webp"
                alt="Mario Basabe"
                className="relative z-10 h-full w-full rounded-full object-cover object-center"
              />
              <div className="hero-floating-card absolute -left-6 top-20 inline-flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left shadow-lg shadow-black/40 z-20">
                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/60">
                  Stack actual
                </p>
                <p className="text-sm font-semibold text-white">
                  React · Next.js · Node
                </p>
              </div>
              <div className="hero-floating-card absolute -right-6 bottom-16 inline-flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg shadow-black/40 z-20">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                  Resultados 2024
                </p>
                <p className="text-lg font-semibold text-white">
                  +34% conversión promedio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
