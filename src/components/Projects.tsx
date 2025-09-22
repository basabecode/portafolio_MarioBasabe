import {
  Github,
  Link,
  Folder,
  Star,
  Sparkles,
  ExternalLink,
  Code,
} from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Plataforma de Comercio Electrónico',
      description:
        'Una plataforma de comercio electrónico completa construida con React, NextJS y un CMS sin cabeza. Incluye filtrado de productos, búsqueda, cuentas de usuario y proceso de compra.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Stripe', 'Sanity.io'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
      featured: true,
    },
    {
      title: 'Plantilla de Portafolio Web',
      description:
        'Una plantilla de portafolio personalizable para desarrolladores y diseñadores, construida con React y librerías de animación. Incluye modo claro/oscuro y múltiples opciones de diseño.',
      tags: ['React', 'Framer Motion', 'Styled Components'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
      featured: true,
    },
    {
      title: 'App de Gestión de Tareas',
      description:
        'Aplicación de productividad para gestionar tareas y proyectos con funciones de colaboración en equipo. Incluye funcionalidad de arrastrar y soltar y actualizaciones en tiempo real.',
      tags: ['React', 'TypeScript', 'Firebase', 'React DnD'],
      links: {
        github: 'https://github.com',
      },
      featured: true,
    },
    {
      title: 'Panel del Clima',
      description:
        'Aplicación meteorológica que muestra condiciones actuales y pronósticos según la ubicación o búsqueda del usuario. Incluye mapas interactivos y visualización de datos.',
      tags: ['JavaScript', 'Weather API', 'Chart.js'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
    },
    {
      title: 'Buscador de Recetas',
      description:
        'Aplicación web para descubrir recetas según ingredientes disponibles, restricciones dietéticas y tipos de comida.',
      tags: ['React', 'REST API', 'CSS Grid'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
    },
    {
      title: 'App de Notas Markdown',
      description:
        'Aplicación para tomar notas con soporte markdown y funciones de organización.',
      tags: ['React', 'LocalStorage', 'Markdown'],
      links: {
        github: 'https://github.com',
      },
    },
  ]

  // Separate featured and other projects
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 scroll-mt-24 relative z-10">
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="group flex items-center gap-3 text-white">
            <div className="relative">
              <Folder
                size={28}
                className="text-purple-400 group-hover:rotate-12 transition-transform duration-300"
              />
              <div className="absolute -inset-2 bg-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
              Algunos proyectos que he construido
            </h2>
            <Sparkles size={20} className="text-purple-300 animate-pulse" />
          </div>
        </div>

        {/* Proyectos destacados */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-12 items-center gap-8 lg:gap-12 ${
                index % 2 !== 0 ? 'lg:text-right' : ''
              }`}
            >
              {/* Imagen del proyecto (placeholder) */}
              <div
                className={`lg:col-span-7 group relative ${
                  index % 2 !== 0 ? 'lg:order-last' : ''
                }`}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-black/50 backdrop-blur-sm border border-purple-400/30 rounded-2xl h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Code
                        size={48}
                        className="text-purple-400 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300"
                      />
                      <p className="text-white font-medium">
                        Captura del proyecto
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        Vista previa disponible pronto
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info del proyecto */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 !== 0 ? 'lg:text-right lg:items-end' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star size={16} className="text-purple-400" />
                  <p className="text-purple-400 font-mono text-sm uppercase tracking-wider">
                    Proyecto destacado
                  </p>
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6 hover:bg-white/10 transition-all duration-300">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul
                  className={`flex flex-wrap gap-3 mb-8 ${
                    index % 2 !== 0 ? 'justify-end' : ''
                  }`}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <li
                      key={tagIndex}
                      className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 hover:text-purple-300 hover:border-purple-400/30 transition-all duration-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div
                  className={`flex gap-6 ${
                    index % 2 !== 0 ? 'justify-end' : ''
                  }`}
                >
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-200"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Otros proyectos */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Otros proyectos destacados
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <Folder
                      size={24}
                      className="text-purple-400 group-hover:rotate-12 transition-transform duration-300"
                    />
                    <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                  </div>
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <li
                      key={tagIndex}
                      className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 hover:text-purple-300 hover:border-purple-400/30 transition-all duration-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects
