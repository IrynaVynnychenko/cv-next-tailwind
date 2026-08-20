'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { Panel } from './Panel'

export default function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <Panel id="about" title={translations[language].nav.about}>
      <div className="space-y-4 p-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
        <p>{t.tagline}</p>
        <p>{t.fullCycle}</p>
        <p className="font-medium text-foreground">{t.bio2}</p>
      </div>
    </Panel>
  )
}
