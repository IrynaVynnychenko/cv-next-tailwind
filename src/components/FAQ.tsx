'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { FAQSchema } from '@/components/SchemaMarkup'
import { Panel } from './Panel'

export default function FAQ() {
  const { language } = useLanguage()
  const t = translations[language].faq
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Panel id="faq" title={t.title}>
      <FAQSchema lang={language} />
      <p className="border-b border-edge px-4 py-3 text-sm text-muted-foreground">{t.subtitle}</p>
      <div>
        {t.items.map((item, index) => {
          const isOpen = openIndex === index
          const list = 'list' in item ? item.list : undefined
          return (
            <div key={item.q} className="border-b border-edge last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-accent-muted"
                aria-expanded={isOpen}
              >
                <span className="pr-2 font-medium">{item.q}</span>
                <svg
                  className={`size-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
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
              )}
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
