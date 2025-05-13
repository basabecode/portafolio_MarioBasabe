
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        <div className="space-y-5 flex-1">
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

        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="rounded-lg overflow-hidden border-4 border-slate-800 bg-slate-100 shadow-lg w-64 h-64 md:w-72 md:h-72">
            <Avatar className="w-full h-full rounded-none">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                alt="Mario Basabe" 
                className="object-cover"
              />
              <AvatarFallback className="text-4xl">MB</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
