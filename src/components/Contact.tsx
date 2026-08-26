'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { chrome } from '@/data/chrome'
import { getContactMailto, CONTACT_EMAIL } from '@/lib/contact'
import { Panel } from './Panel'
import { UpworkIcon } from './Icons'
import ChatLinks from './ChatLinks'

export default function Contact() {
  const { language } = useLanguage()
  const a = translations[language].about
  const c = chrome[language]

  return (
    <Panel id="contact" title={c.workTogether}>
      <div className="space-y-5 p-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{c.workTogetherText}</p>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={getContactMailto(language)}
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {c.getInTouch}
          </a>
          <ChatLinks />
          <a
            href="https://www.upwork.com/freelancers/irynavynnychenko"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-edge px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            <UpworkIcon className="size-4" />
            {a.hireMeOnUpwork}
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">{CONTACT_EMAIL}</p>
      </div>
    </Panel>
  )
}
