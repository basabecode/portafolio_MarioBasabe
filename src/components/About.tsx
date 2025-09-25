import { GraduationCap, Rocket, Workflow, Target, Users, Cpu } from 'lucide-react'

interface AboutProps {
  isVisible: boolean
}

type TimelineItem = {
  period: string
  title: string
  description: string
}

const TIMELINE: TimelineItem[] = [
  {
    period: '2024 — Actualidad',
    title: 'Principal Full Stack · Netcraft',
    description:
      'Lidero squads multidisciplinarios para construir plataformas headless y design systems multibrand orientados a clientes enterprise.',
  },
  {
    period: '2021 — 2023',
    title: 'Senior Frontend · Webflow Studio',
    description:
      'Implementé librerías de componentes UI, pipelines CI/CD y procesos de QA automatizados que redujeron bugs críticos en 63%.',
  },
  {
    period: '2018 — 2021',
    title: 'Freelance · Productos a medida',
    description:
      'Diseñé e implementé experiencias end-to-end para startups latinoamericanas: discovery, UX research, desarrollo y despliegues productivos.',
  },
]

const SKILLSET = [
  {
    name: 'Product strategy & discovery',
    percentage: 92,
  },
  {
    name: 'Frontend engineering',
    percentage: 95,
  },
  {
    name: 'Backend & DevOps',
    percentage: 86,
  },
  {
    name: 'UX / UI design systems',
    percentage: 90,
  },
]

const PILLARS = [
  {
    icon: Target,
    title: 'KPIs claros',
    description:
      'Cada iteración responde a métricas de negocio con tableros compartidos y aprendizaje continuo.',
  },
  {
    icon: Users,
    title: 'Usuarios al centro',
    description:
      'Investigación constante con usuarios reales para construir experiencias memorables.',
  },
  {
    icon: Cpu,
    title: 'Calidad técnica',
    description:
      'Clean code, testing, CI/CD y documentación viva para equipos distribuidos.',
  },
]

const About = ({ isVisible }: AboutProps) => {
  return (
    <section
      id="sobre"
      data-observe-section
      className="section-shell"
      aria-labelledby="sobre-title"
    >
      <div className="page-shell flex flex-col gap-16">
        <header
          className={`flex flex-col items-center gap-6 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
            Sobre mí
          </p>
          <h2
            id="sobre-title"
            className="max-w-2xl text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white"
          >
            Construyo productos con visión estratégica y foco obsesivo en los detalles
          </h2>
          <p className="max-w-3xl text-balance text-[1.125rem] leading-[1.6] text-white/70">
            Partner técnico y creativo para equipos que necesitan lanzar experiencias digitales sólidas. Combino investigación, diseño y desarrollo para acortar el camino entre la idea y un producto que entrega valor.
          </p>
        </header>

        <div
          className={`grid gap-10 lg:grid-cols-[1.1fr_0.9fr] ${
            isVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-3 opacity-95'
          }`}
        >
          <div className="space-y-10">
            <article className="rounded-[2rem] border border-white/10 bg-[rgba(10,14,24,0.85)] p-8 shadow-[0_30px_70px_-55px_rgba(8,12,24,0.85)]">
              <p className="text-base text-white/75">
                <span className="font-semibold text-white">Mario Basabe</span> es desarrollador full stack con enfoque en productos digitales premium. Facilito discovery, prototipos de alta fidelidad y arquitecturas listas para escalar con equipos cross-funcionales.
              </p>
              <p className="mt-6 text-base text-white/75">
                He trabajado con startups emergentes y corporaciones globales, integrando sistemas de diseño, analytics en tiempo real y procesos de entrega continua. Mi misión es convertir ideas complejas en experiencias fluidas, performantes y medibles.
              </p>
            </article>

            <div className="space-y-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
                <GraduationCap className="h-6 w-6 text-secondary" aria-hidden="true" />
                Trayectoria y aprendizajes clave
              </h3>
              <ol className="relative space-y-6 border-l border-white/10 pl-6">
                {TIMELINE.map(item => (
                  <li key={item.title} className="relative">
                    <span className="absolute -left-[11px] top-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" aria-hidden="true" />
                    <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/70">
                      <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                        {item.period}
                      </span>
                      <span className="text-sm font-semibold text-white">{item.title}</span>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="space-y-8">
            <article className="rounded-[2rem] border border-white/10 bg-[rgba(10,14,26,0.9)] p-8 shadow-[0_30px_70px_-55px_rgba(8,12,24,0.85)]">
              <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-white">
                <Rocket className="h-6 w-6 text-primary" aria-hidden="true" />
                Skill map
              </h3>
              <div className="space-y-5">
                {SKILLSET.map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>{skill.name}</span>
                      <span className="text-white/50">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <div className="space-y-5">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
                <Workflow className="h-6 w-6 text-accent" aria-hidden="true" />
                Principios de trabajo
              </h3>
              <div className="grid gap-4">
                {PILLARS.map(pillar => {
                  const Icon = pillar.icon
                  return (
                    <div
                      key={pillar.title}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/70"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-secondary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-white">{pillar.title}</p>
                        <p className="text-sm">{pillar.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
