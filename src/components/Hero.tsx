
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="space-y-5">
        <p className="text-slate-600 font-mono">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
          Mario Basabe.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700">
          I build things for the web.
        </h2>
        <p className="max-w-xl text-slate-600 text-lg py-6">
          I'm a front-end developer specializing in building exceptional digital
          experiences. Currently, I'm focused on creating accessible, human-centered
          products.
        </p>
        <div>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="inline-flex items-center gap-2 border-2 border-slate-800 px-6 py-3 rounded font-medium hover:bg-slate-800 hover:text-[#DEB887] transition-colors cursor-pointer"
          >
            Check out my work
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
