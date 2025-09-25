import { Wand2, Layout, Gauge, Workflow } from 'lucide-react'

interface ServicesProps {
  isVisible: boolean
}

const services = [
  {
    icon: Wand2,
    title: 'Estrategia digital & discovery',
    description:
      'Workshops de co-creación, investigación con usuarios y definición de objetivos tácticos para asegurar foco y ROI desde el día uno.',
    highlights: ['Design sprints facilitados', 'Mapas de experiencia', 'KPIs accionables'],
  },
  {
    icon: Layout,
    title: 'Experiencias UI con código limpio',
    description:
      'Componentes accesibles, sistema de diseño modular y microinteracciones que refuerzan la narrativa de la marca.',
    highlights: ['Design system escalable', 'Animaciones de alto rendimiento', 'WCAG 2.1 AA compliance'],
  },
  {
    icon: Gauge,
    title: 'Arquitecturas escalables full stack',
    description:
      'Backends robustos con Node.js y servicios serverless, conectados a frontends performantes con React y Next.js.',
    highlights: ['Observabilidad end-to-end', 'Automatización CI/CD', 'QA dirigido por métricas'],
  },
  {
    icon: Workflow,
    title: 'Optimización continua & analytics',
    description:
      'Experimentación, A/B testing y dashboards en vivo para iterar rápido y convertir insights en mejoras medibles.',
    highlights: ['Implementación analytics', 'Test A/B en producción', 'Reportes ejecutivos'],
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
      <div className="page-shell">
        <div
          className={`flex flex-col items-center gap-6 pb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <span className="pill-badge">Servicios clave</span>
          <h2
            id="servicios-title"
            className="text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Un enfoque integral para lanzar productos con impacto
          </h2>
          <p className="max-w-2xl text-balance text-sm text-white/70 sm:text-base">
            Cada colaboración inicia con una fase de descubrimiento estratégica y evoluciona hacia un desarrollo iterativo respaldado por datos. Diseñamos experiencias memorables optimizadas para conversión, velocidad y escalabilidad.
          </p>
        </div>

        <div
          className={`grid gap-6 transition-all duration-700 sm:grid-cols-2 xl:grid-cols-4 ${
            isVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-3 opacity-95'
          }`}
        >
          {services.map(service => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-[rgba(12,16,30,0.85)] p-6 shadow-[0_30px_80px_-50px_rgba(10,15,26,0.9)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 hover:border-white/25"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-white/5 to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="relative space-y-4">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/65">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-white/70">
                    {service.highlights.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
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
