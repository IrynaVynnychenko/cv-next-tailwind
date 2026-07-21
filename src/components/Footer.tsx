'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="mt-auto max-w-5xl mx-auto w-full px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      {t.text}
    </footer>
  )
}
