export default function Experience() {
  const experiences = [
    {
      title: "Frontend Web Developer",
      company: "Upwork",
      period: "2018 - Present",
      description: "Freelance senior frontend developer on Upwork — full-cycle delivery from design to live product. High-performance React/Next.js apps, product engineering, and long-term collaboration with clients worldwide.",
      achievements: [
        "4,200+ Upwork hours · 100+ launched projects · 100% Job Success Rate",
        "Full-stack Next.js: Server Components, Server Actions, API Routes",
        "Performance optimization targeting Core Web Vitals for SEO & conversion",
        "SSR / SSG / CSR, code splitting, lazy loading, debugging & profiling"
      ],
      technologies: ["TypeScript", "React", "Next.js", "TanStack Query", "Redux", "Zustand", "GraphQL", "Tailwind CSS", "GSAP", "Framer Motion", "Jest", "Git"],
      projects: [
        "https://www.niunkina.com/ - Business website for German cosmetologist (Next.js + TailwindCSS)",
        "https://plowguys.com/ - Snow & ice management website (Webflow)",
        "https://wellwheel.com.ua/ - Taxi service website for Kyiv drivers",
        "https://www.8host.com/en/ - Cloud hosting platform for VPS/VDS services"
      ]
    },
    {
      title: "Frontend Web Developer",
      company: "ETNA Network",
      period: "Apr 2021 - Jul 2022",
      description: "Frontend development for a DeFi, gaming, and NFT ecosystem with interconnected products across blockchain and web3.",
      achievements: [
        "Built user-facing interfaces for DeFi and NFT products",
        "Developed responsive, interactive UI for crypto ecosystem",
        "Collaborated with cross-functional team on multi-utility platform"
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "SCSS", "Git"],
    },
    {
      title: "Frontend Web Developer",
      company: "LexStatus",
      period: "Feb 2019 - Nov 2020",
      description: "Frontend development for a legal services company specializing in real estate documentation and property assessment in Ukraine.",
      achievements: [
        "Developed and maintained corporate website and client-facing interfaces",
        "Implemented responsive layouts for legal services platform",
        "Worked with design team on pixel-perfect implementations"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "SCSS", "Bootstrap"],
    }
  ]

  return (
    <section id="experience" className="pt-4">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Work Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-base text-gray-600 dark:text-gray-400 mb-3 font-medium">
                    {exp.company}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="lg:ml-6 lg:flex-shrink-0">
                  <span className="inline-block text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-md font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                <ul className="list-none space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-gray-400 dark:text-gray-500 mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {exp.projects && (
                <div>
                  <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Projects:</h5>
                  <div className="space-y-1">
                    {exp.projects.map((project, idx) => (
                      <div key={idx} className="text-sm">
                        {project.includes('http') ? (
                          <a
                            href={project.split(' - ')[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                          >
                            {project.split(' - ')[0]}
                          </a>
                        ) : (
                          <a
                            href={project}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                          >
                            {project}
                          </a>
                        )}
                        {project.includes(' - ') && (
                          <span className="text-gray-600 dark:text-gray-400 ml-2">
                            {project.split(' - ')[1]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
