import { Wand2, Layout, Gauge, Workflow } from 'lucide-react'

interface ServicesProps {
  isVisible: boolean
}

const SERVICES = [
  {
    icon: Wand2,
    title: 'Estrategia digital y discovery',
    description:
      'Workshops de co-creación, investigación con usuarios y definición de objetivos tácticos para asegurar foco y ROI desde el día uno.',
    highlights: ['Design sprints facilitados', 'Mapas de experiencia', 'KPIs accionables'],
  },
  {
    icon: Layout,
    title: 'Experiencias UI con código limpio',
    description:
      'Componentes accesibles, sistemas de diseño modulares y microinteracciones que refuerzan la narrativa de marca.',
    highlights: ['Design system escalable', 'Animaciones de alto rendimiento', 'WCAG 2.1 AA compliance'],
  },
  {
    icon: Gauge,
    title: 'Arquitecturas full stack escalables',
    description:
      'Backends robustos con Node.js y servicios serverless conectados a frontends performantes construidos con React y Next.js.',
    highlights: ['Observabilidad end-to-end', 'Automatización CI/CD', 'QA dirigido por métricas'],
  },
  {
    icon: Workflow,
    title: 'Optimización continua y analytics',
    description:
      'Experimentación, A/B testing y dashboards accionables para iterar rápido y convertir insights en mejoras medibles.',
    highlights: ['Implementación de analytics', 'Tests A/B en producción', 'Reportes ejecutivos'],
  },
]

const Services = ({ isVisible }: ServicesProps) => {
  return (
    <section
      id="servicios"
      data-observe-section
      className="section-shell"
      aria-labelledby="servicios-title"
    >
      <div className="page-shell flex flex-col gap-16">
        <header
          className={`flex flex-col items-center gap-6 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
            Servicios clave
          </p>
          <h2
            id="servicios-title"
            className="max-w-xl text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white"
          >
            Un enfoque integral para lanzar productos con impacto
          </h2>
          <p className="max-w-3xl text-balance text-[1.125rem] leading-[1.6] text-white/70">
            Cada proyecto inicia con discovery estratégico y evoluciona hacia un desarrollo iterativo respaldado por datos. Construimos experiencias memorables optimizadas para conversión, velocidad y escalabilidad.
          </p>
        </header>

        <div
          className={`grid gap-6 transition-all duration-700 sm:grid-cols-2 xl:grid-cols-4 ${
            isVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-3 opacity-95'
          }`}
        >
          {SERVICES.map(service => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group relative flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-[rgba(10,14,26,0.82)] p-6 shadow-[0_32px_70px_-50px_rgba(8,12,24,0.9)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="space-y-4 text-left">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-sm text-white/70">{service.description}</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    {service.highlights.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
