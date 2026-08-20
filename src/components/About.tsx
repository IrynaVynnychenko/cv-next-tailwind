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
        <ul className="space-y-1.5">
          {t.whyItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-medium text-foreground">{t.bio2}</p>
      </div>
    </Panel>
  )
}
