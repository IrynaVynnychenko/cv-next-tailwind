'use client'

import ContactInfo from './ContactInfo'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact

  return (
    <section id="contact" className="pt-4">
      <div className="pb-12">
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              {t.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t.subtitle}
            </p>
          </div>
        </div>

        <ContactInfo />

        <div className="mt-8">
          <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
            {t.ctaTitle}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {t.ctaText}
          </p>
        </div>
      </div>
    </section>
  )
}
