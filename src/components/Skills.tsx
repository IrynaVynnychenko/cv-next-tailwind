const skillCategories = [
  {
    title: 'Core Stack',
    items: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Full-stack Next.js (Server Components, Server Actions, API Routes)',
      'REST APIs: Fetch · Axios · JSON',
      'ES Modules (import/export)',
      'Browser DevTools (Network, Profiler, Memory)',
    ],
  },
  {
    title: 'Architecture',
    items: [
      'Component-based architecture',
      'Custom hooks',
      'Feature-based structure',
    ],
  },
  {
    title: 'State & Data',
    items: [
      'React Query / TanStack Query',
      'Redux',
      'Zustand',
      'Context API',
      'GraphQL integrations',
    ],
  },
  {
    title: 'UI Engineering',
    items: [
      'Custom UI Kits & Design System implementation',
      'Tailwind CSS · Styled Components · CSS/SCSS Modules',
      'Semantic HTML5 · CSS Grid / Flexbox · Modern Layouts',
      'Component lifecycle styling & Dynamic UI states',
      'Responsive & Adaptive engineering (Flawless Mobile UX)',
    ],
  },
  {
    title: 'Performance',
    items: [
      'SSR / SSG / CSR',
      'Code splitting & lazy loading',
      'Core Web Vitals optimization for SEO & conversion',
    ],
  },
  {
    title: 'Testing & Workflow',
    items: [
      'Git / GitHub',
      'CI/CD basics',
      'Jest',
      'React Testing Library',
    ],
  },
  {
    title: 'Animations & Interactions',
    items: [
      'GSAP · ScrollTrigger',
      'Framer Motion',
      'Micro-interactions & page transitions',
      'Scroll-based storytelling',
      'Interactive UI experiences',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="pt-4">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
          Skills & Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
          Senior-level frontend architecture across the full React / Next.js product stack
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                  >
                    <span className="text-gray-400 dark:text-gray-500 mr-2 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            AI as a productivity accelerator
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
            I leverage AI-assisted development tools (Cursor IDE, Claude Opus, ChatGPT, Antigravity CLI, Gemini)
            to automate repetitive tasks and accelerate setup and refactoring — while retaining full control
            over technical decisions, architecture, and final code quality.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">
            Faster delivery without sacrificing architecture or quality.
          </p>
        </div>
      </div>
    </section>
  )
}
