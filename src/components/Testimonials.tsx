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

const testimonials: Testimonial[] = [
  {
    quote:
      'Mario nos acompañó desde el discovery hasta el lanzamiento. El nivel de detalle en UX y la calidad del código superaron lo esperado; logramos duplicar la tasa de conversión en apenas dos iteraciones.',
    author: 'Camila Duarte',
    role: 'Chief Product Officer',
    company: 'Aurora Collective',
    project: 'Headless commerce',
  },
  {
    quote:
      'Integramos dashboards y analítica avanzada en tiempo récord. Mario tiene la habilidad de traducir objetivos de negocio en experiencias concretas y medibles. El equipo ahora depende de su sistema de diseño.',
    author: 'Luis Moreno',
    role: 'Director of Engineering',
    company: 'Pulse Analytics',
    project: 'SaaS B2B platform',
  },
  {
    quote:
      'Sus workshops de discovery nos dieron claridad estratégica. Diseñó un roadmap que alineó marketing, ventas y producto. El lanzamiento fue impecable y recibimos excelentes comentarios de nuestros usuarios.',
    author: 'Andrea Salazar',
    role: 'Head of Growth',
    company: 'Upstage Talent',
    project: 'Hiring platform',
  },
]

const Testimonials = ({ isVisible }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = testimonials.length

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % total)
    }, 6500)
    return () => clearInterval(interval)
  }, [total])

  const current = useMemo(() => testimonials[activeIndex], [activeIndex])

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
      <div className="page-shell">
        <div
          className={`flex flex-col items-center gap-6 pb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <span className="pill-badge">Testimonios</span>
          <h2
            id="testimonios-title"
            className="text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Colaboraciones transparentes, resultados medibles
          </h2>
          <p className="max-w-2xl text-balance text-sm text-white/70 sm:text-base">
            Clientes, partners y líderes de producto que aprecian un proceso claro, decisiones informadas y entregables listos para escalar.
          </p>
        </div>

        <div
          className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[rgba(10,16,26,0.9)] p-10 backdrop-blur-xl transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-secondary/10 opacity-0 transition-opacity duration-700" />
          <div className="relative flex flex-col gap-8">
            <Quote className="h-10 w-10 text-secondary" />
            <blockquote className="text-balance text-lg text-white/80 sm:text-xl">
              “{current.quote}”
            </blockquote>
            <div className="flex flex-col gap-1 text-left text-white">
              <span className="text-lg font-semibold">{current.author}</span>
              <span className="text-sm text-white/60">
                {current.role} · {current.company}
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                Proyecto: {current.project}
              </span>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                {testimonials.map((item, index) => (
                  <button
                    key={item.author}
                    onClick={() => goTo(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-10 bg-gradient-to-r from-primary to-secondary'
                        : 'w-3 bg-white/20 hover:bg-white/50'
                    }`}
                    aria-label={`Ver testimonio de ${item.author}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => goTo(activeIndex - 1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-white/40 hover:text-white"
                  aria-label="Testimonio anterior"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => goTo(activeIndex + 1)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-white/40 hover:text-white"
                  aria-label="Siguiente testimonio"
                >
                  <ArrowRight className="h-4 w-4" />
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
