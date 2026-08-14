'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { getLangFromPath, type Language } from '@/lib/i18n'

export type { Language }

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const CYCLE: Language[] = ['en', 'de', 'ua']

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLanguageState(getLangFromPath(window.location.pathname))
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const toggleLanguage = () => {
    const idx = CYCLE.indexOf(language)
    setLanguage(CYCLE[(idx + 1) % CYCLE.length])
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
