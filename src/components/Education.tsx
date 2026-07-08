export default function Education() {
  const education = [
    {
      degree: "Junior Frontend JS Developer",
      institution: "DAN.IT education",
      period: "2020 - 2021",
      description: "Intensive frontend JavaScript development program.",
      relevantCourses: ["JavaScript", "React", "Frontend Development"]
    },
    {
      degree: "JavaScript",
      institution: "ProCode IT",
      period: "2019",
      description: "JavaScript fundamentals and modern ES6+ development.",
      relevantCourses: ["JavaScript ES6+", "DOM Manipulation", "Async Programming"]
    },
    {
      degree: "HTML, CSS, jQuery — Front End Developer",
      institution: "freeCodeCamp",
      period: "2018 - 2019",
      description: "Self-paced frontend development curriculum with hands-on projects.",
      relevantCourses: ["HTML5", "CSS3", "Responsive Web Design", "jQuery"]
    }
  ]

  const certifications = [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      period: "Sep 2025"
    }
  ]

  return (
    <section id="education" className="pt-4">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Education</h2>
        
        <div className="space-y-8 mb-10">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <h5 className="text-base text-gray-600 dark:text-gray-400 mb-3 font-medium">
                    {edu.institution}
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                </div>
                <div className="lg:ml-6 lg:flex-shrink-0">
                  <span className="inline-block text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-md font-medium">
                    {edu.period}
                  </span>
                </div>
              </div>
              
              <div>
                <h6 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Courses:</h6>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">{cert.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-md font-medium w-fit">
                  {cert.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
