import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

interface TestimonialsProps {
  isVisible: boolean
}

type Testimonial = {
  quote: string
  author: string
  role: string
  company: string
  project: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Mario nos acompañó desde el discovery hasta el lanzamiento. El detalle en UX y la calidad del código superaron lo esperado; duplicamos la conversión en apenas dos iteraciones.',
    author: 'Camila Duarte',
    role: 'Chief Product Officer',
    company: 'Aurora Collective',
    project: 'Headless commerce',
  },
  {
    quote:
      'Integramos dashboards y analítica avanzada en tiempo récord. Mario traduce objetivos de negocio en experiencias medibles. El equipo ahora depende de su sistema de diseño.',
    author: 'Luis Moreno',
    role: 'Director of Engineering',
    company: 'Pulse Analytics',
    project: 'Plataforma SaaS B2B',
  },
  {
    quote:
      'Sus workshops de discovery nos dieron claridad estratégica. Diseñó un roadmap que alineó marketing, ventas y producto. El lanzamiento fue impecable y los usuarios lo confirmaron.',
    author: 'Andrea Salazar',
    role: 'Head of Growth',
    company: 'Upstage Talent',
    project: 'Hiring platform',
  },
]

const Testimonials = ({ isVisible }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = TESTIMONIALS.length

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % total)
    }, 6500)
    return () => clearInterval(interval)
  }, [total])

  const current = useMemo(() => TESTIMONIALS[activeIndex], [activeIndex])

  const goTo = (index: number) => {
    setActiveIndex((index + total) % total)
  }

  return (
    <section
      id="testimonios"
      data-observe-section
      className="section-shell"
      aria-labelledby="testimonios-title"
    >
      <div className="page-shell flex flex-col gap-12">
        <header
          className={`flex flex-col items-center gap-6 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
            Testimonios
          </p>
          <h2
            id="testimonios-title"
            className="max-w-2xl text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white"
          >
            Colaboraciones transparentes, resultados medibles
          </h2>
          <p className="max-w-3xl text-balance text-[1.125rem] leading-[1.6] text-white/70">
            Clientes, partners y líderes de producto que aprecian procesos claros, decisiones informadas y entregables listos para escalar.
          </p>
        </header>

        <div
          className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(10,14,24,0.9)] p-10 shadow-[0_34px_80px_-60px_rgba(9,12,22,0.85)] transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-secondary/15 opacity-[0.2]" aria-hidden="true" />
          <div className="relative flex flex-col gap-8">
            <Quote className="h-10 w-10 text-secondary" aria-hidden="true" />
            <blockquote className="text-balance text-[1.3rem] leading-[1.6] text-white/80 sm:text-[1.45rem]">
              “{current.quote}”
            </blockquote>
            <div className="flex flex-col gap-1 text-white">
              <span className="text-lg font-semibold">{current.author}</span>
              <span className="text-sm text-white/60">
                {current.role} · {current.company}
              </span>
              <span className="text-xs uppercase tracking-[0.32em] text-white/50">
                Proyecto: {current.project}
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                {TESTIMONIALS.map((item, index) => (
                  <button
                    key={item.author}
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-10 bg-gradient-to-r from-primary to-secondary'
                        : 'w-3 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ver testimonio de ${item.author}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => goTo(activeIndex - 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  aria-label="Testimonio anterior"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  onClick={() => goTo(activeIndex + 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  aria-label="Siguiente testimonio"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
