import { useState } from 'react'
import {
  FileText,
  Briefcase,
  Calendar,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  const jobs = [
    {
      company: 'Netcraft',
      title: 'Senior Front End Engineer',
      period: 'January 2023 - Present',
      duties: [
        'Developed and maintained code for in-house and client websites primarily using React, JavaScript, TypeScript, and Tailwind CSS',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
        'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences',
        'Worked with a team of developers to build a new company website using Next.js and GraphQL',
      ],
    },
    {
      company: 'Webflow Studio',
      title: 'Front End Developer',
      period: 'May 2021 - December 2022',
      duties: [
        'Worked with a team of designers to create responsive websites and ensure an excellent user experience',
        'Implemented advanced animations and interactive elements using JavaScript and GSAP',
        'Collaborated with clients to understand their requirements and deliver high-quality results',
        'Optimized sites for maximum speed and scalability',
      ],
    },
    {
      company: 'Freelance',
      title: 'Web Developer',
      period: 'August 2018 - April 2021',
      duties: [
        'Designed and developed responsive websites for small businesses and individuals',
        'Built custom themes and plugins for WordPress sites',
        'Provided maintenance and support services for existing client websites',
        'Implemented SEO best practices to improve client visibility in search engines',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 scroll-mt-24 relative z-10">
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-16">
          <div className="group flex items-center gap-3 text-white">
            <div className="relative">
              <Briefcase
                size={28}
                className="text-blue-400 group-hover:rotate-12 transition-transform duration-300"
              />
              <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Donde he trabajado
            </h2>
            <Sparkles size={20} className="text-blue-300 animate-pulse" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Buttons */}
          <div className="lg:w-64 flex lg:flex-col overflow-x-auto lg:overflow-visible mb-6 lg:mb-0 gap-2">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative px-6 py-4 text-left rounded-xl transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                  activeTab === index
                    ? 'bg-white/10 backdrop-blur-sm border border-emerald-400/50 text-white transform scale-105'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-emerald-400/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50'
                        : 'bg-gray-500'
                    }`}
                  />
                  <span className="font-medium">{job.company}</span>
                  {activeTab === index && (
                    <ChevronRight
                      size={16}
                      className="text-emerald-400 animate-pulse lg:hidden"
                    />
                  )}
                </div>
                {activeTab === index && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur opacity-50 -z-10" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative">
                  <FileText
                    size={24}
                    className="text-emerald-400 group-hover:rotate-12 transition-transform duration-300"
                  />
                  <div className="absolute -inset-2 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {jobs[activeTab].title}
                  </h3>
                  <p className="text-emerald-400 font-medium text-lg">
                    @ {jobs[activeTab].company}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar size={16} className="text-gray-400" />
                    <p className="text-gray-400 font-mono text-sm">
                      {jobs[activeTab].period}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {jobs[activeTab].duties.map((duty, index) => (
                  <li
                    key={index}
                    className="flex gap-4 text-gray-300 hover:text-white transition-colors duration-200 group/item"
                  >
                    <span className="text-emerald-400 flex-shrink-0 mt-1 group-hover/item:scale-125 transition-transform duration-200">
                      ▸
                    </span>
                    <span className="leading-relaxed">{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
