
import { Code, PenTool, User } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
  ];

  return (
    <section id="about" className="py-20 scroll-mt-24">
      <h2 className="flex items-center gap-2 text-2xl font-bold mb-10 text-slate-900">
        <User size={20} />
  Sobre mí
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4">
          <p className="text-slate-700 leading-relaxed">
            ¡Hola! Soy Mario, desarrollador front-end apasionado por crear experiencias de usuario atractivas. Mi camino en el desarrollo web comenzó en 2018 cuando decidí crear un sitio web personalizado para un pequeño negocio. ¡Resulta que armar una landing page me enseñó mucho sobre HTML y CSS!
          </p>
          <p className="text-slate-700 leading-relaxed">
            Hoy en día he tenido el privilegio de trabajar en una startup, una agencia mediana y una gran corporación. Mi enfoque principal es construir productos y experiencias digitales accesibles e inclusivas para una variedad de clientes.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Recientemente lancé un curso que cubre todo lo necesario para construir una aplicación web con el ecosistema de React.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Cuando no estoy frente al computador, normalmente estoy escalando, jugando baloncesto o explorando nuevas cafeterías en la ciudad.
          </p>
        </div>
        <div className="border-2 border-slate-700 rounded-lg p-6 h-fit">
          <h3 className="flex items-center gap-2 font-semibold mb-4 text-slate-900">
            <Code size={18} />
            Habilidades y Tecnologías
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="text-slate-700 flex items-center gap-2"
              >
                <span className="text-slate-800">▹</span> {skill}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h3 className="flex items-center gap-2 font-semibold mb-4 text-slate-900">
              <PenTool size={18} />
              Design Tools
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              <li className="text-slate-700 flex items-center gap-2">
                <span className="text-slate-800">▹</span> Figma
              </li>
              <li className="text-slate-700 flex items-center gap-2">
                <span className="text-slate-800">▹</span> Adobe XD
              </li>
              <li className="text-slate-700 flex items-center gap-2">
                <span className="text-slate-800">▹</span> Photoshop
              </li>
              <li className="text-slate-700 flex items-center gap-2">
                <span className="text-slate-800">▹</span> Illustrator
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
