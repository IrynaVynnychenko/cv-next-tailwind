'use client'

import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'
import type { Language } from '@/lib/i18n'
import { ReactNode } from 'react'

export default function Providers({
  children,
  lang = 'en',
}: {
  children: ReactNode
  lang?: Language
}) {
  return (
    <ThemeProvider>
      <LanguageProvider key={lang} initialLanguage={lang}>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
}
