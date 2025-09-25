import { ExternalLink, Github, Rocket, Sparkles, ArrowUpRight } from 'lucide-react'

interface ProjectsProps {
  isVisible: boolean
}

type ProjectVisual = {
  gradient: string
  pattern: string
  accent: string
  stats: string[]
}

type Project = {
  title: string
  summary: string
  description: string
  tech: string[]
  metrics: string
  links: {
    live?: string
    repo?: string
  }
  badge: string
  visual: ProjectVisual
}

const featured: Project[] = [
  {
    title: 'Aurora Commerce',
    summary: 'E-commerce headless para moda premium',
    description:
      'Migración completa a arquitectura headless con Next.js, diseño atómico y orquestación de contenido con Sanity. Implementamos pagos con Stripe y dashboard de métricas en tiempo real.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Sanity CMS', 'Edge Functions'],
    metrics: '+42% tasa de conversión en 8 semanas',
    links: {
      live: 'https://example.com',
      repo: 'https://github.com',
    },
    badge: 'Producto destacado',
    visual: {
      gradient: 'linear-gradient(135deg, #4338CA 0%, #14B8A6 50%, #8B5CF6 100%)',
      pattern:
        'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0%, transparent 55%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.3) 0%, transparent 65%)',
      accent: '#38BDF8',
      stats: ['Checkout modular', 'CMS headless', 'Stripe analytics'],
    },
  },
  {
    title: 'Pulse Analytics',
    summary: 'Plataforma de analytics para SaaS B2B',
    description:
      'Dashboard responsive con filtros dinámicos y visualizaciones optimizadas. Integramos pipelines ETL, alertas en tiempo real y data governance multi-tenant.',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'WebSockets'],
    metrics: '-35% tiempo de decisión gracias a automatización de insights',
    links: {
      live: 'https://example.com',
    },
    badge: 'Caso de éxito',
    visual: {
      gradient: 'linear-gradient(140deg, #111827 0%, #1E293B 35%, #38BDF8 100%)',
      pattern:
        'radial-gradient(circle at 15% 80%, rgba(56,189,248,0.24) 0%, transparent 55%), radial-gradient(circle at 70% 20%, rgba(148,163,184,0.25) 0%, transparent 60%)',
      accent: '#38BDF8',
      stats: ['Panel en tiempo real', 'Alertas inteligentes', 'Modo oscuro'],
    },
  },
  {
    title: 'Upstage Talent',
    summary: 'Plataforma de hiring con IA asistida',
    description:
      'Onboarding guiado, matching inteligente y automatización de entrevistas. Se diseñó un CMS interno y librería de componentes compartida entre squads.',
    tech: ['Next.js', 'OpenAI', 'Supabase', 'Framer Motion', 'Radix UI'],
    metrics: '+28% candidatos contratados en el primer trimestre',
    links: {
      live: 'https://example.com',
      repo: 'https://github.com',
    },
    badge: 'Innovación',
    visual: {
      gradient: 'linear-gradient(140deg, #7C3AED 0%, #DB2777 45%, #F97316 100%)',
      pattern:
        'radial-gradient(circle at 25% 15%, rgba(251,191,36,0.35) 0%, transparent 55%), radial-gradient(circle at 80% 75%, rgba(236,72,153,0.3) 0%, transparent 60%)',
      accent: '#F97316',
      stats: ['IA de matching', 'Entrevistas async', 'Design system'],
    },
  },
]

const otherProjects: Project[] = [
  {
    title: 'Atlas Docs',
    summary: 'Sistema de documentación viviente',
    description:
      'Docs técnicos versionados con MDX, búsquedas instantáneas y ejemplos interactivos con tests en vivo.',
    tech: ['Next.js', 'MDX', 'Algolia'],
    metrics: 'Redujo soporte en 48%',
    links: {
      repo: 'https://github.com',
    },
    badge: 'Docs',
    visual: {
      gradient: 'linear-gradient(135deg, #1F2937 0%, #3B82F6 100%)',
      pattern:
        'radial-gradient(circle at 20% 20%, rgba(96,165,250,0.35) 0%, transparent 60%), radial-gradient(circle at 75% 80%, rgba(59,130,246,0.25) 0%, transparent 60%)',
      accent: '#60A5FA',
      stats: ['MDX live', 'Algolia search'],
    },
  },
  {
    title: 'Nimbus Planner',
    summary: 'Gestión de proyectos con IA copiloto',
    description:
      'Planificación inteligente con copiloto de tareas, dependencias visuales y analítica predictiva.',
    tech: ['React', 'TensorFlow', 'Firebase'],
    metrics: '+18% productividad de equipos',
    links: {
      repo: 'https://github.com',
      live: 'https://example.com',
    },
    badge: 'Productividad',
    visual: {
      gradient: 'linear-gradient(135deg, #0F172A 0%, #2563EB 45%, #14B8A6 100%)',
      pattern:
        'radial-gradient(circle at 80% 20%, rgba(14,165,233,0.32) 0%, transparent 60%), radial-gradient(circle at 25% 70%, rgba(45,212,191,0.28) 0%, transparent 60%)',
      accent: '#38BDF8',
      stats: ['Copiloto IA', 'Predicciones'],
    },
  },
  {
    title: 'Marea Streaming',
    summary: 'Landing multiservicio para OTT',
    description:
      'Experiencia marketing con diseño 3D, streaming adaptativo y subscripciones globales.',
    tech: ['Remix', 'AWS Media', 'Tailwind'],
    metrics: '+120k usuarios en lanzamiento',
    links: {
      live: 'https://example.com',
    },
    badge: 'Media',
    visual: {
      gradient: 'linear-gradient(135deg, #4C1D95 0%, #DB2777 40%, #FB923C 100%)',
      pattern:
        'radial-gradient(circle at 20% 80%, rgba(251,191,36,0.35) 0%, transparent 55%), radial-gradient(circle at 70% 20%, rgba(244,114,182,0.35) 0%, transparent 55%)',
      accent: '#FB923C',
      stats: ['3D hero', 'Subs globales'],
    },
  },
]

const Projects = ({ isVisible }: ProjectsProps) => {
  return (
    <section
      id="proyectos"
      data-observe-section
      className="section-shell"
      aria-labelledby="proyectos-title"
    >
      <div className="page-shell">
        <div
          className={`flex flex-col items-center gap-6 pb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <span className="pill-badge">Casos reales</span>
          <h2
            id="proyectos-title"
            className="text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Productos digitales que hablan por sí mismos
          </h2>
          <p className="max-w-3xl text-balance text-sm text-white/70 sm:text-base">
            Desde e-commerce y plataformas SaaS hasta experiencias inmersivas. Cada proyecto está pensado para generar valor tangible y construir una marca memorable.
          </p>
        </div>

        <div
          className={`space-y-12 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-3 opacity-95'
          }`}
        >
          {featured.map(project => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[rgba(10,14,24,0.92)] p-10 backdrop-blur-xl shadow-[0_40px_100px_-60px_rgba(15,20,40,0.85)] transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
                <div className="flex-1 space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[0.65rem]">
                      <Sparkles className="h-3.5 w-3.5 text-secondary" />
                      {project.badge}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[0.65rem]">
                      <Rocket className="h-3.5 w-3.5 text-primary" />
                      {project.metrics}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-base font-semibold text-white/80">
                      {project.summary}
                    </p>
                    <p className="max-w-2xl text-sm text-white/65">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: project.visual.accent }}
                        />
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition-all hover:border-primary/60 hover:text-white"
                      >
                        Ver producto
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
                      >
                        Repositorio
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative flex w-full max-w-xl flex-1 justify-center">
                  <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-55px_rgba(8,12,24,0.85)]">
                    <div
                      className="absolute inset-0 opacity-90"
                      style={{ backgroundImage: project.visual.gradient }}
                    />
                    <div
                      className="absolute inset-0 opacity-70 mix-blend-screen"
                      style={{ backgroundImage: project.visual.pattern }}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-6 rounded-[1.25rem] border border-white/15 bg-black/30 p-5 text-white">
                      <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-white/70">
                        <span>Preview</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                      <div className="space-y-3 text-sm text-white/80">
                        <p className="font-semibold text-white">
                          {project.title}
                        </p>
                        <p>{project.summary}</p>
                      </div>
                      <div className="grid gap-2">
                        {project.visual.stats.map(item => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.25em] text-white/70"
                          >
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: project.visual.accent }}
                            />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-14 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-3 opacity-95'
          }`}
        >
          <h3 className="mb-6 text-center text-2xl font-semibold text-white">
            Más proyectos relevantes
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map(project => (
              <article
                key={project.title}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-[rgba(12,16,28,0.88)] p-6 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative h-32 w-full overflow-hidden rounded-2xl border border-white/10">
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{ backgroundImage: project.visual.gradient }}
                  />
                  <div
                    className="absolute inset-0 opacity-65 mix-blend-screen"
                    style={{ backgroundImage: project.visual.pattern }}
                  />
                  <div className="relative flex h-full flex-col justify-between p-4 text-white">
                    <div className="text-[0.65rem] uppercase tracking-[0.35em] text-white/70">
                      Instant snapshot
                    </div>
                    <div className="flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-white/80">
                      {project.visual.stats.map(item => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2 py-1"
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: project.visual.accent }}
                          />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem]">
                      {project.badge}
                    </span>
                    <span>{project.metrics}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                  <p className="text-sm font-semibold text-white/80">{project.summary}</p>
                  <p className="text-sm text-white/65">{project.description}</p>
                </div>
                <div className="relative flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="relative mt-auto flex items-center gap-4 text-sm">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-white/70 transition-all hover:border-white/40 hover:text-white"
                    >
                      Live
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
                    >
                      Repo
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
