import { Code, PenTool, User, Sparkles } from 'lucide-react'

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
  ]

  return (
    <section id="about" className="py-20 scroll-mt-24 relative z-0">
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-12 sm:mb-16">
          <div className="group flex items-center gap-2 sm:gap-3 text-white">
            <div className="relative">
              <User
                size={24}
                className="sm:w-7 sm:h-7 text-emerald-400 group-hover:rotate-12 transition-transform duration-300"
              />
              <div className="absolute -inset-2 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
              Sobre mí
            </h2>
            <Sparkles
              size={16}
              className="sm:w-5 sm:h-5 text-emerald-300 animate-pulse"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                ¡Hola! Soy Mario, desarrollador front-end apasionado por crear
                experiencias de usuario atractivas. Mi camino en el desarrollo
                web comenzó en 2018 cuando decidí crear un sitio web
                personalizado para un pequeño negocio. ¡Resulta que armar una
                landing page me enseñó mucho sobre HTML y CSS!
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                Hoy en día he tenido el privilegio de trabajar en una startup,
                una agencia mediana y una gran corporación. Mi enfoque principal
                es construir productos y experiencias digitales accesibles e
                inclusivas para una variedad de clientes.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                Recientemente lancé un curso que cubre todo lo necesario para
                construir una aplicación web con el ecosistema de React.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                Cuando no estoy frente al computador, normalmente estoy
                escalando, jugando baloncesto o explorando nuevas cafeterías en
                la ciudad.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-fit hover:bg-white/10 transition-all duration-300 group">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-6">
                <h3 className="flex items-center gap-3 font-semibold mb-6 text-white">
                  <div className="relative">
                    <Code size={20} className="text-emerald-400" />
                    <div className="absolute -inset-1 bg-emerald-400/20 rounded-full blur-sm" />
                  </div>
                  Habilidades y Tecnologías
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {skills.map((skill, index) => (
                    <li
                      key={index}
                      className="text-gray-300 flex items-center gap-3 hover:text-emerald-300 transition-colors duration-200 group/item"
                    >
                      <span className="text-emerald-400 group-hover/item:scale-125 transition-transform duration-200">
                        ▸
                      </span>
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="flex items-center gap-3 font-semibold mb-6 text-white">
                    <div className="relative">
                      <PenTool size={20} className="text-blue-400" />
                      <div className="absolute -inset-1 bg-blue-400/20 rounded-full blur-sm" />
                    </div>
                    Design Tools
                  </h3>
                  <ul className="grid grid-cols-1 gap-3">
                    <li className="text-gray-300 flex items-center gap-3 hover:text-blue-300 transition-colors duration-200 group/item">
                      <span className="text-blue-400 group-hover/item:scale-125 transition-transform duration-200">
                        ▸
                      </span>
                      <span className="font-medium">Figma</span>
                    </li>
                    <li className="text-gray-300 flex items-center gap-3 hover:text-blue-300 transition-colors duration-200 group/item">
                      <span className="text-blue-400 group-hover/item:scale-125 transition-transform duration-200">
                        ▸
                      </span>
                      <span className="font-medium">Adobe XD</span>
                    </li>
                    <li className="text-gray-300 flex items-center gap-3 hover:text-blue-300 transition-colors duration-200 group/item">
                      <span className="text-blue-400 group-hover/item:scale-125 transition-transform duration-200">
                        ▸
                      </span>
                      <span className="font-medium">Photoshop</span>
                    </li>
                    <li className="text-gray-300 flex items-center gap-3 hover:text-blue-300 transition-colors duration-200 group/item">
                      <span className="text-blue-400 group-hover/item:scale-125 transition-transform duration-200">
                        ▸
                      </span>
                      <span className="font-medium">Illustrator</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
