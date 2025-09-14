export default function Experience() {
  const experiences = [
    {
      title: "Freelance Frontend Developer",
      company: "Upwork",
      period: "2018 - Present",
      description: "Working as a freelancer on Upwork platform since 2018, developing professional websites and landing pages for clients worldwide. Specializing in pixel-perfect coding and responsive design.",
      achievements: [
        "3750+ hours of work on Upwork with 100% Job Success Rate",
        "Developed 50+ websites, landing pages, and e-commerce stores",
        "Expert in PSD to HTML / Figma to HTML / Figma to React.js / Figma to Next.js",
        "Specialization in long-term projects and flexible schedules"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Webflow", "SCSS", "Bootstrap", "Tailwind CSS"],
      projects: [
        "https://www.niunkina.com/ - Business website for German cosmetologist (Next.js + TailwindCSS)",
        "https://plowguys.com/ - Snow & ice management website (Webflow)",
        "https://wellwheel.com.ua/ - Taxi service website for Kyiv drivers",
        "https://www.8host.com/en/ - Cloud hosting platform for VPS/VDS services"
      ]
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
