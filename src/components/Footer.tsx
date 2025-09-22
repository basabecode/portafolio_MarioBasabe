import { Github, Mail, Heart, Code, Coffee } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative py-16 text-center">
      <div className="relative z-10">
        <div className="flex justify-center space-x-8 mb-8 group">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:border-emerald-400/50 hover:bg-emerald-400/10 transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
            <div className="absolute -inset-1 bg-emerald-400/20 rounded-full blur opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="mailto:hello@mariobasabe.com"
            className="relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
            aria-label="Email Me"
          >
            <Mail size={24} />
            <div className="absolute -inset-1 bg-cyan-400/20 rounded-full blur opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 text-gray-300 mb-2">
            <span>Diseñado y desarrollado con</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>por</span>
            <span className="text-white font-semibold">Mario Basabe</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <Code size={14} className="text-emerald-400" />
              <span>React & TypeScript</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full" />
            <div className="flex items-center gap-1">
              <Coffee size={14} className="text-orange-400" />
              <span>Mucho café</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mario Basabe. Todos los derechos
            reservados.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150" />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
