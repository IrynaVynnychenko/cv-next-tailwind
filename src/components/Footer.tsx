'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="screen-line-before w-full border-x border-edge px-4 py-8 text-center font-mono text-xs text-muted-foreground">
      {t.text}
    </footer>
  )
}
