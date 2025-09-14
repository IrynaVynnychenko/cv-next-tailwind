export default function Education() {
  const education = [
    {
      degree: "Frontend Web Development",
      institution: "Self-study and Online Courses",
      period: "2018 - 2019",
      description: "Self-directed learning of modern web technologies and frontend development through online courses and practice.",
      relevantCourses: [
        "HTML5 and CSS3",
        "JavaScript ES6+",
        "SCSS/SASS",
        "Responsive Web Design"
      ]
    }
  ]


  return (
    <section id="education" className="pt-4">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Education</h2>
        
        {/* Education Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Education</h3>
          <div className="space-y-8">
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
        </div>
      </div>
    </section>
  )
}
