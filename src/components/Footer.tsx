'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { SERVICE_ORDER, services } from '@/data/services'
import { translations } from '@/data/translations'
import { getExperiencePath, withLangPrefix } from '@/lib/i18n'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="screen-line-before w-full border-x border-edge px-4 py-8 text-center font-mono text-xs text-muted-foreground">
      <nav className="mb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <Link href={getExperiencePath(language)} className="hover:text-foreground">
          {translations[language].nav.experience}
        </Link>
        {SERVICE_ORDER.map((id) => (
          <Link
            key={id}
            href={withLangPrefix(language, services[id].path)}
            className="hover:text-foreground"
          >
            {services[id].navLabel[language]}
          </Link>
        ))}
      </nav>
      {t.text}
    </footer>
  )
}
