import { Compass, PenTool, Code2, BarChart3, ArrowRight } from 'lucide-react'

interface ExperienceProps {
  isVisible: boolean
}

const PHASES = [
  {
    icon: Compass,
    title: '01 · Descubrir',
    description:
      'Workshops con stakeholders, entrevistas clave y definición de hipótesis. Artefactos: mapa de objetivos, journey maps, backlog priorizado.',
    deliverables: ['Research sessions', 'Canvas estratégico', 'Roadmap inicial'],
  },
  {
    icon: PenTool,
    title: '02 · Diseñar',
    description:
      'Prototipos de alta fidelidad, design system y microinteracciones validadas. Conexión directa con la arquitectura técnica.',
    deliverables: ['Design tokens', 'Component library', 'Prototipos navegables'],
  },
  {
    icon: Code2,
    title: '03 · Construir',
    description:
      'Desarrollo iterativo con QA continuo, performance budgeting y automatización CI/CD. Código limpio y testeable.',
    deliverables: ['Codebase escalable', 'Testing & QA', 'Documentación viva'],
  },
  {
    icon: BarChart3,
    title: '04 · Optimizar',
    description:
      'Dashboards en producción, experimentos A/B y roadmap basado en insights. Coaching para equipos internos.',
    deliverables: ['Dashboards', 'Plan de experimentos', 'Enablement sessions'],
  },
]

const Experience = ({ isVisible }: ExperienceProps) => {
  return (
    <section
      id="experiencia"
      data-observe-section
      data-nav-target="sobre"
      className="section-shell"
      aria-labelledby="experiencia-title"
    >
      <div className="page-shell flex flex-col gap-16">
        <header
          className={`flex flex-col items-center gap-6 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
            Proceso
          </p>
          <h2
            id="experiencia-title"
            className="max-w-2xl text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white"
          >
            Un framework colaborativo para entregar valor continuo
          </h2>
          <p className="max-w-3xl text-balance text-[1.125rem] leading-[1.6] text-white/70">
            Integro equipos de producto, diseño y tecnología a través de un proceso claro que va del descubrimiento al crecimiento. Cada fase incluye entregables tangibles y medición constante.
          </p>
        </header>

        <div
          className={`grid gap-6 transition-all duration-700 lg:grid-cols-2 xl:grid-cols-4 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-3 opacity-95'
          }`}
        >
          {PHASES.map(phase => {
            const Icon = phase.icon
            return (
              <article
                key={phase.title}
                className="flex h-full flex-col gap-5 rounded-[2rem] border border-white/10 bg-[rgba(10,14,24,0.85)] p-6 shadow-[0_30px_70px_-55px_rgba(8,12,24,0.85)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                  <p className="text-sm text-white/70">{phase.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  {phase.deliverables.map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
