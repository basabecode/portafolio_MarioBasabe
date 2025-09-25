import { Compass, PenTool, Code2, BarChart3, ArrowRight } from 'lucide-react'

interface ExperienceProps {
  isVisible: boolean
}

const phases = [
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
      'Desarrollo iterativo con QA continuo, performance budgeting y automatización CI/CD. Codificación limpia y testeable.',
    deliverables: ['Codebase escalable', 'Testing & QA', 'Documentación viva'],
  },
  {
    icon: BarChart3,
    title: '04 · Optimizar',
    description:
      'Dashboards en producción, experimentos A/B y roadmap basado en insights. Coaching a equipos internos.',
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
      <div className="page-shell">
        <div
          className={`flex flex-col items-center gap-6 pb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <span className="pill-badge">Proceso</span>
          <h2
            id="experiencia-title"
            className="text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Un framework colaborativo para entregar valor continuo
          </h2>
          <p className="max-w-3xl text-balance text-sm text-white/70 sm:text-base">
            Integro equipos de producto, diseño y tecnología a través de un proceso claro que va del descubrimiento al crecimiento. Cada fase incluye entregables tangibles y medición constante.
          </p>
        </div>

        <div
          className={`grid gap-6 transition-all duration-700 lg:grid-cols-2 xl:grid-cols-4 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-3 opacity-95'
          }`}
        >
          {phases.map(phase => {
            const Icon = phase.icon
            return (
              <article
                key={phase.title}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(12,16,28,0.85)] p-6 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-secondary/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="relative space-y-3">
                  <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                  <p className="text-sm text-white/65">{phase.description}</p>
                </div>
                <ul className="relative space-y-2 text-sm text-white/70">
                  {phase.deliverables.map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-secondary" />
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
