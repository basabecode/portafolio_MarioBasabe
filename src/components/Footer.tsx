
import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-600 border-t border-slate-300">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-900 transition-colors"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
        </a>
        <a
          href="mailto:hello@mariobasabe.com"
          className="hover:text-slate-900 transition-colors"
          aria-label="Email Me"
        >
          <Mail size={20} />
        </a>
      </div>
      <p className="text-sm">
        Diseñado y desarrollado por Mario Basabe
      </p>
      <p className="text-xs mt-2">
        © {new Date().getFullYear()} Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
