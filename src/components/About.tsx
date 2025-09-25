import { GraduationCap, Rocket, Workflow, Target, Users, Cpu } from 'lucide-react'

interface AboutProps {
  isVisible: boolean
}

type TimelineItem = {
  period: string
  title: string
  description: string
}

const timeline: TimelineItem[] = [
  {
    period: '2024 â€” Actualidad',
    title: 'Principal Full Stack Â· Netcraft',
    description:
      'Lidero squads multidisciplinares construyendo plataformas headless y design systems multi-brand para clientes enterprise.',
  },
  {
    period: '2021 â€” 2023',
    title: 'Senior Frontend Â· Webflow Studio',
    description:
      'ImplementÃ© librerÃ­as de componentes UI, pipelines CI/CD y procesos de QA automatizados que redujeron bugs crÃ­ticos en 63%.',
  },
  {
    period: '2018 â€” 2021',
    title: 'Freelance Â· Productos a medida',
    description:
      'DiseÃ±Ã© e implementÃ© experiencias end-to-end para startups latinoamericanas, desde discovery y UX research hasta despliegues productivos.',
  },
]

const skillset = [
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

const pillars = [
  {
    icon: Target,
    title: 'KPIs claros',
    description:
      'Cada iteraciÃ³n responde a mÃ©tricas de negocio, con tableros compartidos y aprendizaje continuo.',
  },
  {
    icon: Users,
    title: 'Usuarios al centro',
    description:
      'InvestigaciÃ³n constante con usuarios reales para construir experiencias memorables.',
  },
  {
    icon: Cpu,
    title: 'Calidad tÃ©cnica',
    description:
      'Clean code, testing, CI/CD y documentaciÃ³n viva para equipos remotos.',
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
      <div className="page-shell">
        <div
          className={`flex flex-col items-center gap-6 pb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <span className="pill-badge">Sobre mÃ­</span>
          <h2
            id="sobre-title"
            className="text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Construyo productos con visiÃ³n estratÃ©gica y obsesiÃ³n por los detalles
          </h2>
          <p className="max-w-3xl text-balance text-sm text-white/70 sm:text-base">
            Partner tÃ©cnico y creativo para equipos que necesitan lanzar experiencias digitales sÃ³lidas. Combino investigaciÃ³n, diseÃ±o y desarrollo para acortar el camino entre la idea y un producto que entrega valor.
          </p>
        </div>

        <div
          className={`grid gap-10 lg:grid-cols-[1.1fr_0.9fr] ${
            isVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-3 opacity-95'
          }`}
        >
          <div className="space-y-10">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(12,16,28,0.85)] p-8 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 opacity-0 transition-opacity duration-700" />
              <div className="relative space-y-6 text-white/75">
                <p className="text-base">
                  <span className="font-semibold text-white">Mario Basabe</span> es desarrollador full stack con enfoque en productos digitales premium. Creo equipos mejor alineados facilitando discovery, prototipos de alta fidelidad y arquitectura sÃ³lida lista para escalar.
                </p>
                <p className="text-base">
                  He trabajado con startups emergentes y corporaciones globales, integrando sistemas de diseÃ±o, analytics en tiempo real y procesos de entrega continua. Mi misiÃ³n: convertir ideas complejas en experiencias fluidas, performantes y medibles.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
                <GraduationCap className="h-6 w-6 text-secondary" />
                Trayectoria & aprendizajes clave
              </h3>
              <ol className="relative space-y-6 border-l border-white/10 pl-6">
                {timeline.map(item => (
                  <li key={item.title} className="relative">
                    <span className="absolute -left-[11px] top-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/70">
                      <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                        {item.period}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {item.title}
                      </span>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-[rgba(12,15,26,0.9)] p-8 backdrop-blur-xl">
              <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-white">
                <Rocket className="h-6 w-6 text-primary" />
                Skill map
              </h3>
              <div className="space-y-5">
                {skillset.map(skill => (
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
            </div>

            <div className="space-y-5">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
                <Workflow className="h-6 w-6 text-accent" />
                Principios de trabajo
              </h3>
              <div className="grid gap-4">
                {pillars.map(pillar => {
                  const Icon = pillar.icon
                  return (
                    <div
                      key={pillar.title}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/70"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-secondary">
                        <Icon className="h-5 w-5" />
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
