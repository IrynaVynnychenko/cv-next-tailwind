'use client'

import { useLanguage } from '@/context/LanguageContext'
import { contactsPage } from '@/data/contacts-page'
import { chrome } from '@/data/chrome'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import { Panel } from './Panel'

export default function ContactsView() {
  const { language } = useLanguage()
  const p = contactsPage

  return (
    <article className="pt-20">
      <div className="pattern-hatch h-8 w-full border-x border-edge" />
      <div className="screen-line-before border-x border-edge px-4 pb-8 pt-6">
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{p.h1[language]}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{p.lead[language]}</p>
      </div>
      <Panel title={p.formTitle[language]}>
        <ContactForm />
      </Panel>
      <Panel title={p.channelsTitle[language]}>
        <div className="p-4">
          <ContactInfo title="" description={chrome[language].workTogetherText} />
        </div>
      </Panel>
    </article>
  )
}
