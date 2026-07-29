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
                  <span className="font-semibold text-gray-900 dark:text-white text-base">
                    {item.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ${
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
                <div
                  className={`transition-all duration-200 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 border-t border-gray-200 dark:border-gray-700' : 'max-h-0 opacity-0 pointer-events-none'
                  } overflow-hidden`}
                >
                  <div className="p-5 text-gray-700 dark:text-gray-300 text-sm leading-relaxed bg-white dark:bg-gray-900">
                    {item.a}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
