
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
        About Me
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Hello! I'm Mario, a front-end developer with a passion for creating
            engaging user experiences. My journey in web development began back
            in 2018 when I decided to create a custom website for a small
            business — turns out hacking together a landing page taught me a lot
            about HTML & CSS!
          </p>
          <p className="text-slate-700 leading-relaxed">
            Fast-forward to today, and I've had the privilege of working at a
            start-up, a mid-size agency, and a large corporation. My main focus
            these days is building accessible, inclusive products and digital
            experiences for a variety of clients.
          </p>
          <p className="text-slate-700 leading-relaxed">
            I also recently launched a course that covers everything you need to
            build a web app with the React ecosystem.
          </p>
          <p className="text-slate-700 leading-relaxed">
            When I'm not at the computer, I'm usually rock climbing, playing
            basketball, or exploring new coffee shops in the city.
          </p>
        </div>
        <div className="border-2 border-slate-700 rounded-lg p-6 h-fit">
          <h3 className="flex items-center gap-2 font-semibold mb-4 text-slate-900">
            <Code size={18} />
            Skills & Technologies
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
