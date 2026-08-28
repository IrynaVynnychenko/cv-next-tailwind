'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { homeServices, SERVICE_ORDER, services, type ServiceId } from '@/data/services'
import { getBlogPostPath, getContactsPath, withLangPrefix } from '@/lib/i18n'
import { CONTACT_EMAIL } from '@/lib/contact'
import { Panel } from './Panel'
import ChatLinks from './ChatLinks'

export default function ServiceLanding({ id }: { id: ServiceId }) {
  const { language } = useLanguage()
  const s = services[id]
  const contactsHref = getContactsPath(language)

  return (
    <article className="pt-20">
      <div className="pattern-hatch h-8 w-full border-x border-edge" />
      <div className="screen-line-before border-x border-edge px-4 pb-8 pt-6">
        <p className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <span className="size-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
          {s.availability[language]}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{s.h1[language]}</h1>
        <p id="service-lead" className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{s.lead[language]}</p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Link
            href={contactsHref}
            className="inline-flex items-center gap-2 rounded-full border border-edge bg-background px-4 py-2 text-sm font-medium transition hover:bg-accent"
          >
            {s.ctaButton[language]}
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
          </Link>
          <ChatLinks />
        </div>
      </div>

      <Panel title={s.offersTitle[language]}>
        <ul>
          {s.offers.map((item) => (
            <li key={item.en} className="flex items-start gap-3 border-b border-edge px-4 py-4 last:border-b-0">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
              <span className="text-sm leading-relaxed">{item[language]}</span>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title={s.processTitle[language]}>
        <ol>
          {s.process.map((item, index) => (
            <li key={item.en} className="flex items-start gap-3 border-b border-edge px-4 py-4 last:border-b-0">
              <span className="mt-0.5 font-mono text-xs tabular-nums text-muted-foreground">{index + 1}</span>
              <span className="text-sm leading-relaxed">{item[language]}</span>
            </li>
          ))}
        </ol>
      </Panel>

      <Panel title={s.faqTitle[language]}>
        <div>
          {s.faq.map((item) => (
            <details key={item.q.en} className="group border-b border-edge last:border-b-0">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-accent-muted [&::-webkit-details-marker]:hidden">
                <h3 className="min-w-0 flex-1 pr-2 text-base font-medium">{item.q[language]}</h3>
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
              <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{item.a[language]}</p>
            </details>
          ))}
        </div>
      </Panel>

      <Panel title={s.articlesTitle[language]}>
        <ul>
          {s.articles.map((article) => (
            <li key={article.slug} className="border-b border-edge last:border-b-0">
              <Link
                href={getBlogPostPath(language, article.slug)}
                className="flex items-center justify-between gap-4 px-4 py-4 text-sm font-medium transition-colors hover:bg-accent-muted"
              >
                <span>{article.label[language]}</span>
                <span className="shrink-0 text-muted-foreground" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel id="contact" title={s.ctaTitle[language]}>
        <div className="space-y-4 p-4">
          <p className="text-sm leading-relaxed text-muted-foreground">{s.ctaText[language]}</p>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={contactsHref}
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {s.ctaButton[language]}
            </Link>
            <ChatLinks />
          </div>
          <p className="font-mono text-xs text-muted-foreground">{CONTACT_EMAIL}</p>
          <p>
            <Link
              href={getContactsPath(language)}
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              vynnychenko.dev
            </Link>
          </p>
          <p className="text-sm text-muted-foreground">
            {homeServices.also[language]}:{' '}
            {SERVICE_ORDER.filter((otherId) => otherId !== id).map((otherId, index) => (
              <span key={otherId}>
                {index > 0 ? ', ' : ''}
                <Link
                  href={withLangPrefix(language, services[otherId].path)}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {services[otherId].navLabel[language]}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </Panel>
    </article>
  )
}
