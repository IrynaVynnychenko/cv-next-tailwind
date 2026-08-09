'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { FAQSchema } from '@/components/SchemaMarkup'

export default function FAQ() {
  const { language } = useLanguage()
  const t = translations[language].faq
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="pt-4">
      <FAQSchema lang={language} />
      <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
          {t.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
          {t.subtitle}
        </p>

        <div className="space-y-4">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index
            const list = 'list' in item ? item.list : undefined
            return (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gray-50 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 dark:text-white text-base pr-4">
                    {item.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="border-t border-gray-200 dark:border-gray-700 p-5 text-gray-700 dark:text-gray-300 text-sm leading-relaxed bg-white dark:bg-gray-900">
                    {item.a && <p className={list?.length ? 'mb-3' : undefined}>{item.a}</p>}
                    {list && list.length > 0 && (
                      <ul className="space-y-2">
                        {list.map((entry) => (
                          <li key={entry} className="flex items-start">
                            <span className="text-gray-400 dark:text-gray-500 mr-2 mt-0.5">•</span>
                            <span>{entry}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
