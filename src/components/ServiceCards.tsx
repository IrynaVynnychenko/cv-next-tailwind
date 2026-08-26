'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { homeServices, SERVICE_ORDER, services } from '@/data/services'
import { withLangPrefix } from '@/lib/i18n'
import { Panel } from './Panel'

export default function ServiceCards() {
  const { language } = useLanguage()

  return (
    <Panel id="services" title={homeServices.title[language]}>
      <p className="border-b border-edge px-4 py-3 text-sm text-muted-foreground">{homeServices.subtitle[language]}</p>
      <div className="grid md:grid-cols-2">
        {SERVICE_ORDER.map((id, index) => {
          const s = services[id]
          return (
            <Link
              key={id}
              href={withLangPrefix(language, s.path)}
              className={`group flex flex-col gap-2 p-4 transition-colors hover:bg-accent-muted ${
                index === 0 ? 'border-b border-edge md:border-b-0 md:border-r' : ''
              }`}
            >
              <h3 className="font-medium underline-offset-4 group-hover:underline">{s.cardTitle[language]}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.cardText[language]}</p>
            </Link>
          )
        })}
      </div>
    </Panel>
  )
}
