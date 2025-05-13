import { Github, Link } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, NextJS, and a headless CMS. Features include product filtering, search, user accounts, and checkout process.",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "Sanity.io"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      },
      featured: true
    },
    {
      title: "Portfolio Website Template",
      description: "A customizable portfolio template for developers and designers, built with React and animation libraries. Includes dark/light mode and multiple layout options.",
      tags: ["React", "Framer Motion", "Styled Components"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      },
      featured: true
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects with team collaboration features. Includes drag and drop functionality and real-time updates.",
      tags: ["React", "TypeScript", "Firebase", "React DnD"],
      links: {
        github: "https://github.com"
      },
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A weather application displaying current conditions and forecasts based on user location or search. Features interactive maps and data visualization.",
      tags: ["JavaScript", "Weather API", "Chart.js"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "Recipe Finder",
      description: "A web application to discover recipes based on available ingredients, dietary restrictions, and meal types.",
      tags: ["React", "REST API", "CSS Grid"],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "Markdown Note App",
      description: "A note-taking application with markdown support and organization features.",
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
        Some Things I've Built
      </h2>

      {/* Featured Projects */}
      <div className="space-y-24 mb-16">
        {featuredProjects.map((project, index) => (
          <div 
            key={index} 
            className={`grid md:grid-cols-12 items-center gap-6 md:gap-10 ${
              index % 2 !== 0 ? 'md:text-right' : ''
            }`}
          >
            {/* Project Image (placeholder) */}
            <div className={`md:col-span-7 rounded-lg overflow-hidden bg-slate-700 h-72 relative ${
              index % 2 !== 0 ? 'md:order-last' : ''
            }`}>
              <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px]"></div>
              <div className="absolute inset-0 flex items-center justify-center text-slate-300">Project Screenshot</div>
            </div>

            {/* Project Info */}
            <div className={`md:col-span-5 ${
              index % 2 !== 0 ? 'md:text-right md:items-end' : ''
            }`}>
              <p className="text-slate-600 font-mono mb-2">Featured Project</p>
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

      {/* Other Projects */}
      <h3 className="text-xl font-bold mb-8 text-slate-900 text-center">Other Noteworthy Projects</h3>
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
};

export default Projects;
