import { ArrowUpRight } from 'lucide-react'

interface HeroSectionProps {
  isVisible: boolean
}

const HERO_PRIMARY_H1 = 'Transformo ideas en experiencias digitales que convierten'

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
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-36"
    >
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-primary/30 via-transparent to-secondary/20 blur-[110px]" />
        <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-secondary/30 via-transparent to-accent/20 blur-[120px]" />
        <div className="grid-overlay pointer-events-none absolute inset-6 rounded-[2.5rem]" />
      </div>

      <div
        className={`page-shell transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-95'
        }`}
      >
        <div className="grid items-center gap-y-14 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
          <div className="flex flex-col gap-10 text-center lg:col-span-7 lg:text-left">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/60 lg:justify-start">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" aria-hidden="true" />
                  Stack actual · React · Next.js · Node
                </span>
              </div>

              <h1 className="mx-auto max-w-[16ch] text-[clamp(2.75rem,5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.01em] text-white lg:mx-0">
                {HERO_PRIMARY_H1}
              </h1>

              <p className="mx-auto max-w-[62ch] text-[1.125rem] leading-[1.6] text-white/70 lg:mx-0">
                Soy Mario, desarrollador full stack con foco en productos medibles. Diseño y construyo experiencias digitales de principio a fin, apoyadas en investigación, sistemas de diseño y ciclos de iteración continua para impulsar crecimiento real.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button
                type="button"
                onClick={() => handleNavigate('contacto')}
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_22px_50px_-22px_rgba(255,255,255,0.45)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              >
                Contactar ahora
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('proyectos')}
                className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/50 hover:text-white"
              >
                Ver proyectos
              </button>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
              <div className="flex items-center justify-center gap-2 text-sm text-white/60 lg:justify-start">
                {['Productos digitales', 'Sistemas de diseño', 'Medición continua'].map(item => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-left text-sm text-white/80 lg:justify-start">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  2024
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Conversión promedio
                  </p>
                  <p className="text-base font-semibold text-white">+34% en lanzamientos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-transparent to-secondary/20 blur-3xl" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/12 bg-[rgba(8,12,24,0.85)] shadow-[0_30px_80px_-45px_rgba(12,15,30,0.85)]">
                <img
                  src="/img_gris_gafas.webp"
                  alt="Retrato de Mario Basabe"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 rounded-[2.5rem] ring-2 ring-white/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
