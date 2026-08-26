'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { FAQSchema } from '@/components/SchemaMarkup'
import { Panel } from './Panel'

export default function FAQ() {
  const { language } = useLanguage()
  const t = translations[language].faq

  return (
    <Panel id="faq" title={t.title}>
      <FAQSchema lang={language} />
      <p className="border-b border-edge px-4 py-3 text-sm text-muted-foreground">{t.subtitle}</p>
      <div>
        {t.items.map((item) => {
          const list = 'list' in item ? item.list : undefined
          return (
            <details key={item.q} className="group border-b border-edge last:border-b-0">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-accent-muted [&::-webkit-details-marker]:hidden">
                <h3 className="min-w-0 flex-1 pr-2 text-base font-medium">{item.q}</h3>
                <svg
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                {item.a && <p className={list?.length ? 'mb-3' : undefined}>{item.a}</p>}
                {list && list.length > 0 && (
                  <ul className="space-y-2">
                    {list.map((entry) => (
                      <li key={entry} className="flex items-start gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </details>
          )
        })}
      </div>
    </Panel>
  )
}
