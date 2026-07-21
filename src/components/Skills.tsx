'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

export default function Skills() {
  const { language } = useLanguage()
  const t = translations[language].skills

  return (
    <section id="skills" className="pt-4">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
          {t.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.categories.map((category) => (
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
            {t.aiTitle}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
            {t.aiDesc}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">
            {t.aiFooter}
          </p>
        </div>
      </div>
    </section>
  )
}
