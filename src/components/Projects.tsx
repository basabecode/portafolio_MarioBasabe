import { Github, Link } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Plataforma de Comercio Electrónico",
      description: "Una plataforma de comercio electrónico completa construida con React, NextJS y un CMS sin cabeza. Incluye filtrado de productos, búsqueda, cuentas de usuario y proceso de compra.",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "Sanity.io"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      },
      featured: true
    },
    {
      title: "Plantilla de Portafolio Web",
      description: "Una plantilla de portafolio personalizable para desarrolladores y diseñadores, construida con React y librerías de animación. Incluye modo claro/oscuro y múltiples opciones de diseño.",
      tags: ["React", "Framer Motion", "Styled Components"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      },
      featured: true
    },
    {
      title: "App de Gestión de Tareas",
      description: "Aplicación de productividad para gestionar tareas y proyectos con funciones de colaboración en equipo. Incluye funcionalidad de arrastrar y soltar y actualizaciones en tiempo real.",
      tags: ["React", "TypeScript", "Firebase", "React DnD"],
      links: {
        github: "https://github.com"
      },
      featured: true
    },
    {
      title: "Panel del Clima",
      description: "Aplicación meteorológica que muestra condiciones actuales y pronósticos según la ubicación o búsqueda del usuario. Incluye mapas interactivos y visualización de datos.",
      tags: ["JavaScript", "Weather API", "Chart.js"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "Buscador de Recetas",
      description: "Aplicación web para descubrir recetas según ingredientes disponibles, restricciones dietéticas y tipos de comida.",
      tags: ["React", "REST API", "CSS Grid"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "App de Notas Markdown",
      description: "Aplicación para tomar notas con soporte markdown y funciones de organización.",
      tags: ["React", "LocalStorage", "Markdown"],
      links: {
        github: "https://github.com"
      }
    }
  ];

  // Separate featured and other projects
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <h2 className="flex items-center gap-2 text-2xl font-bold mb-10 text-slate-900">
        Algunos proyectos que he construido
      </h2>

      {/* Proyectos destacados */}
      <div className="space-y-24 mb-16">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-12 items-center gap-6 md:gap-10 ${
              index % 2 !== 0 ? 'md:text-right' : ''
            }`}
          >
            {/* Imagen del proyecto (placeholder) */}
            <div className={`md:col-span-7 rounded-lg overflow-hidden bg-slate-700 h-72 relative ${
              index % 2 !== 0 ? 'md:order-last' : ''
            }`}>
              <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px]"></div>
              <div className="absolute inset-0 flex items-center justify-center text-slate-300">Captura del proyecto</div>
            </div>

            {/* Info del proyecto */}
            <div className={`md:col-span-5 ${
              index % 2 !== 0 ? 'md:text-right md:items-end' : ''
            }`}>
              <p className="text-slate-600 font-mono mb-2">Proyecto destacado</p>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{project.title}</h3>
              <div className="bg-slate-200/70 p-6 rounded-lg mb-4">
                <p className="text-slate-700">{project.description}</p>
              </div>
              <ul className={`flex flex-wrap gap-3 mb-6 text-sm text-slate-600 ${
                index % 2 !== 0 ? 'justify-end' : ''
              }`}>
                {project.tags.map((tag, tagIndex) => (
                  <li key={tagIndex}>{tag}</li>
                ))}
              </ul>
              <div className={`flex gap-4 text-slate-800 ${
                index % 2 !== 0 ? 'justify-end' : ''
              }`}>
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <Github size={20} />
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <Link size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Otros proyectos */}
      <h3 className="text-xl font-bold mb-8 text-slate-900 text-center">Otros proyectos destacados</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <div key={index} className="bg-slate-200/50 rounded-lg p-6 hover:translate-y-[-5px] transition-transform">
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-lg font-semibold text-slate-900">{project.title}</h4>
              <div className="flex gap-4 text-slate-800">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <Github size={18} />
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <Link size={18} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-slate-700 mb-6">{project.description}</p>
            <ul className="flex flex-wrap gap-2 text-xs text-slate-600">
              {project.tags.map((tag, tagIndex) => (
                <li key={tagIndex} className="bg-slate-200 px-2 py-1 rounded">{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

  );
}
export default Projects;
