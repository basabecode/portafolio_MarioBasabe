
import { useState } from "react";
import { FileText } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const jobs = [
    {
      company: "Netcraft",
      title: "Senior Front End Engineer",
      period: "January 2023 - Present",
      duties: [
        "Developed and maintained code for in-house and client websites primarily using React, JavaScript, TypeScript, and Tailwind CSS",
        "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
        "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences",
        "Worked with a team of developers to build a new company website using Next.js and GraphQL"
      ]
    },
    {
      company: "Webflow Studio",
      title: "Front End Developer",
      period: "May 2021 - December 2022",
      duties: [
        "Worked with a team of designers to create responsive websites and ensure an excellent user experience",
        "Implemented advanced animations and interactive elements using JavaScript and GSAP",
        "Collaborated with clients to understand their requirements and deliver high-quality results",
        "Optimized sites for maximum speed and scalability"
      ]
    },
    {
      company: "Freelance",
      title: "Web Developer",
      period: "August 2018 - April 2021",
      duties: [
        "Designed and developed responsive websites for small businesses and individuals",
        "Built custom themes and plugins for WordPress sites",
        "Provided maintenance and support services for existing client websites",
        "Implemented SEO best practices to improve client visibility in search engines"
      ]
    }
  ];
  
  return (
    <section id="experience" className="py-20 scroll-mt-24">
      <h2 className="flex items-center gap-2 text-2xl font-bold mb-10 text-slate-900">
        <FileText size={20} />
        Where I've Worked
      </h2>
      
      <div className="flex flex-col md:flex-row gap-4">
        {/* Tab Buttons */}
        <div className="md:w-48 flex md:flex-col overflow-x-auto md:overflow-visible mb-6 md:mb-0">
          {jobs.map((job, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap md:whitespace-normal ${
                activeTab === index
                  ? "border-slate-800 text-slate-900 font-medium"
                  : "border-slate-300 text-slate-600 hover:bg-slate-100/50 hover:text-slate-900"
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="flex-1">
          <h3 className="text-xl font-medium text-slate-900">
            {jobs[activeTab].title} <span className="text-slate-600">@ {jobs[activeTab].company}</span>
          </h3>
          <p className="text-sm text-slate-600 mt-1 mb-4 font-mono">
            {jobs[activeTab].period}
          </p>
          <ul className="space-y-4">
            {jobs[activeTab].duties.map((duty, index) => (
              <li key={index} className="flex gap-2 text-slate-700">
                <span className="text-slate-800 flex-shrink-0">▹</span>
                <span>{duty}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
