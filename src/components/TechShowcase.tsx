import { MonitorSmartphone, Server, Cloud, Palette, Boxes, Database } from 'lucide-react'

interface TechShowcaseProps {
  isVisible: boolean
}

const techGroups = [
  {
    title: 'Frontend experience',
    icon: MonitorSmartphone,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Three.js'],
    color: 'from-primary/80 to-secondary/60',
  },
  {
    title: 'Backend & data',
    icon: Server,
    technologies: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Prisma'],
    color: 'from-secondary/80 to-accent/60',
  },
  {
    title: 'DevOps & observabilidad',
    icon: Cloud,
    technologies: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Grafana', 'Sentry'],
    color: 'from-accent/80 to-primary/60',
  },
]

const designTools = [
  { label: 'Design systems', icon: Boxes },
  { label: 'UI Libraries', icon: Palette },
  { label: 'Data viz', icon: Database },
]

const TechShowcase = ({ isVisible }: TechShowcaseProps) => {
  return (
    <section
      id="stack"
      data-observe-section
      className="section-shell"
      aria-labelledby="tech-stack-title"
    >
      <div className="page-shell">
        <div
          className={`flex flex-col items-center gap-6 pb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <span className="pill-badge">Tech stack visual</span>
          <h2
            id="tech-stack-title"
            className="text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Tecnología pensada para escalar y medir resultados
          </h2>
          <p className="max-w-2xl text-balance text-sm text-white/70 sm:text-base">
            Selecciono tecnologías con base en objetivos de negocio, velocidad de iteración y mantenibilidad. Integro analítica, accesibilidad y performance desde el primer commit.
          </p>
        </div>

        <div
          className={`grid gap-6 transition-all duration-700 lg:grid-cols-3 ${
            isVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-3 opacity-95'
          }`}
        >
          {techGroups.map(group => {
            const Icon = group.icon
            return (
              <article
                key={group.title}
                className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-[rgba(12,15,28,0.85)] p-6 backdrop-blur-xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-20 transition-opacity duration-500 group-hover:opacity-40`}
                />
                <div className="relative flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="relative flex flex-wrap gap-2">
                  {group.technologies.map(tech => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="relative text-sm text-white/65">
                  Integrado con pipelines de QA, componentes accesibles y medición constante de performance.
                </div>
              </article>
            )
          })}
        </div>

        <div
          className={`mt-8 grid gap-4 overflow-hidden rounded-3xl border border-white/10 bg-[rgba(8,12,22,0.8)] p-6 backdrop-blur-xl transition-all duration-700 sm:grid-cols-3 ${
            isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-3 opacity-95'
          }`}
        >
          {designTools.map(tool => {
            const Icon = tool.icon
            return (
              <div key={tool.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-secondary" />
                </span>
                <p className="text-sm font-semibold text-white/80">{tool.label}</p>
              </div>
            )
          })}
          <p className="col-span-full text-sm text-white/60">
            Diseño de sistemas, librerías UI internas y componentes auditados para accesibilidad y rendimiento.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TechShowcase
