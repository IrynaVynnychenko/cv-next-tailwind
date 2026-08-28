'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { getContactsPath, withLangPrefix } from '@/lib/i18n'

export default function ExperienceHashRedirect() {
  const { language } = useLanguage()

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#contact') {
      window.location.replace(getContactsPath(language))
      return
    }
    if (hash !== '#experience' && hash !== '#education') return
    window.location.replace(`${withLangPrefix(language, '/experience/')}${hash}`)
  }, [language])

  return null
}
