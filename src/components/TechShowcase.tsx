import {
  MonitorSmartphone,
  Server,
  Cloud,
  Palette,
  Boxes,
  Database,
} from 'lucide-react'

interface TechShowcaseProps {
  isVisible: boolean
}

const TECH_GROUPS = [
  {
    title: 'Frontend experience',
    icon: MonitorSmartphone,
    technologies: [
      'React',
      'HTML',
      'TypeScript',
      'Tailwind',
      'CSS',
      'JavaScript',
    ],
    color: 'from-primary/80 to-secondary/60',
  },
  {
    title: 'Backend & data',
    icon: Server,
    technologies: [
      'Node.js',
      'Express',
      'Next.js',
      'PostgreSQL',
      'MongoDB',
      'Supabase',
    ],
    color: 'from-secondary/80 to-accent/60',
  },
  {
    title: 'IA DevOps & cloud',
    icon: Cloud,
    technologies: ['AWS', 'Vercel', 'Docker', 'LLMs', 'Netlify', 'GitHub'],
    color: 'from-accent/80 to-primary/60',
  },
]

const DESIGN_TOOLS = [
  { label: 'Design systems', icon: Boxes },
  { label: 'UI libraries', icon: Palette },
  { label: 'Data visualization', icon: Database },
]

const TechShowcase = ({ isVisible }: TechShowcaseProps) => {
  return (
    <section
      id="stack"
      data-observe-section
      className="section-shell"
      aria-labelledby="tech-stack-title"
    >
      <div className="page-shell flex flex-col gap-16">
        <header
          className={`flex flex-col items-center gap-6 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
            Stack técnico
          </p>
          <h2
            id="tech-stack-title"
            className="max-w-2xl text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white"
          >
            Tecnología cuidada para entregar velocidad, calidad y métricas
          </h2>
          <p className="max-w-3xl text-balance text-[1.125rem] leading-[1.6] text-white/70">
            Selecciono cada herramienta con base en objetivos de negocio,
            velocidad de iteración y mantenibilidad. Accesibilidad, performance
            y analítica se integran desde el primer commit.
          </p>
        </header>

        <div
          className={`grid gap-6 transition-all duration-700 lg:grid-cols-3 ${
            isVisible
              ? 'translate-y-0 opacity-100 delay-150'
              : 'translate-y-3 opacity-95'
          }`}
        >
          {TECH_GROUPS.map(group => {
            const Icon = group.icon
            return (
              <article
                key={group.title}
                className="relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-[rgba(10,14,24,0.85)] p-6 shadow-[0_26px_70px_-55px_rgba(8,12,24,0.85)]"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${group.color} opacity-[0.15]`}
                  aria-hidden="true"
                />
                <div className="relative flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="relative flex flex-wrap gap-2">
                  {group.technologies.map(tech => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 px-3 py-1 text-[0.75rem] uppercase tracking-[0.18em] text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="relative text-sm text-white/70">
                  Integrado con pipelines de QA, componentes accesibles y
                  medición continua de performance.
                </p>
              </article>
            )
          })}
        </div>

        <div
          className={`grid gap-4 overflow-hidden rounded-3xl border border-white/10 bg-[rgba(8,12,22,0.82)] p-6 transition-all duration-700 sm:grid-cols-3 ${
            isVisible
              ? 'translate-y-0 opacity-100 delay-200'
              : 'translate-y-3 opacity-95'
          }`}
        >
          {DESIGN_TOOLS.map(tool => {
            const Icon = tool.icon
            return (
              <div key={tool.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-white/70">
                  {tool.label}
                </p>
              </div>
            )
          })}
          <p className="col-span-full text-sm text-white/65">
            Diseño de sistemas, librerías UI internas y componentes auditados
            para accesibilidad y rendimiento.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TechShowcase
