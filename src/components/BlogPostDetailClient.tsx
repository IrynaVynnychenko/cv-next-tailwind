'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import BlogPostContent from '@/components/BlogPostContent'
import ContactInfo from '@/components/ContactInfo'
import { getBlogPost } from '@/data/blog-posts'
import { getServiceIdForSlug, services } from '@/data/services'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { getBlogIndexPath, LOCALE_TAGS, withLangPrefix, type Language } from '@/lib/i18n'

type BlogPostDetailClientProps = {
  slug: string
}

function formatDate(dateString: string, lang: Language) {
  return new Date(dateString).toLocaleDateString(LOCALE_TAGS[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const ctaCopy = {
  title: {
    en: 'Ready to discuss your project?',
    ua: 'Готові обговорити проєкт?',
    de: 'Sprechen wir über Ihr Projekt',
    fr: 'On discute de votre projet ?',
    es: '¿Hablamos de tu proyecto?',
    it: 'Parliamo del tuo progetto?',
    tr: 'Projenizi konuşalım mı?',
  },
  desc: {
    en: "I'm a senior web engineer specializing in React and Next.js - available for freelance projects worldwide.",
    ua: 'Я senior веброзробниця, спеціалізуюсь на React і Next.js - відкрита до фриланс-проєктів по всьому світу.',
    de: 'Ich bin Senior-Webentwicklerin mit Schwerpunkt React und Next.js - verfügbar für Freelance-Projekte weltweit.',
    fr: 'Je suis ingénieure web senior, spécialisée en React et Next.js - disponible en freelance partout dans le monde.',
    es: 'Soy ingeniera web senior, especializada en React y Next.js - disponible para proyectos freelance en cualquier país.',
    it: 'Sono un’ingegnera web senior, specializzata in React e Next.js - disponibile per progetti freelance in tutto il mondo.',
    tr: 'React ve Next.js konusunda uzman kıdemli bir web geliştiriciyim - dünya çapında freelance projelere açığım.',
  },
  orderApp: {
    en: 'Order a web application',
    ua: 'Замовити вебзастосунок',
    de: 'Webanwendung beauftragen',
    fr: 'Commander une application web',
    es: 'Encargar una aplicación web',
    it: 'Commissiona un’applicazione web',
    tr: 'Web uygulaması yaptırın',
  },
  oneClick: {
    en: 'Hire in 1 click',
    ua: 'Найняти в 1 клік',
    de: 'Mit einem Klick beauftragen',
    fr: 'Engager en 1 clic',
    es: 'Contratar en 1 clic',
    it: 'Assumi in 1 clic',
    tr: 'Tek tıkla işe alın',
  },
  orderAppDesc: {
    en: 'Ready to build a modern, fast, and scalable web application for your business? Start a secure contract on Upwork today.',
    ua: 'Потрібен сучасний, швидкий і масштабований вебзастосунок? Почнімо безпечний контракт на Upwork уже сьогодні.',
    de: 'Eine moderne, schnelle und skalierbare Webanwendung für Ihr Business? Starten Sie noch heute einen sicheren Vertrag auf Upwork.',
    fr: 'Une application web moderne, rapide et évolutive pour votre activité ? Lancez dès aujourd’hui un contrat sécurisé sur Upwork.',
    es: '¿Necesitas una aplicación web moderna, rápida y escalable? Empieza hoy un contrato seguro en Upwork.',
    it: 'Ti serve un’applicazione web moderna, veloce e scalabile? Avvia oggi un contratto sicuro su Upwork.',
    tr: 'İşletmeniz için modern, hızlı ve ölçeklenebilir bir web uygulaması mı lazım? Bugün Upwork’te güvenli bir sözleşme başlatın.',
  },
  oneClickDesc: {
    en: 'Hire me as your developer in 1 click. Start a secure Upwork contract to build high-converting web solutions for your business.',
    ua: 'Найміть мене як розробницю в один клік. Безпечний контракт на Upwork - і зробимо вебрішення з високою конверсією.',
    de: 'Beauftragen Sie mich mit einem Klick. Sicherer Upwork-Vertrag für Web-Lösungen mit starker Conversion.',
    fr: 'Engagez-moi en un clic. Un contrat Upwork sécurisé pour des solutions web qui convertissent.',
    es: 'Contrátame en un clic. Un contrato seguro en Upwork para soluciones web que convierten.',
    it: 'Assumimi in un clic. Un contratto sicuro su Upwork per soluzioni web che convertono.',
    tr: 'Beni tek tıkla geliştiriciniz olarak işe alın. İşletmeniz için dönüşüm odaklı web çözümleri - güvenli Upwork sözleşmesiyle.',
  },
  orderUpwork: {
    en: 'Order a web application',
    ua: 'Замовити на Upwork',
    de: 'Auf Upwork beauftragen',
    fr: 'Commander sur Upwork',
    es: 'Encargar en Upwork',
    it: 'Commissiona su Upwork',
    tr: 'Upwork’te yaptırın',
  },
  hireUpwork: {
    en: 'Hire Me on Upwork',
    ua: 'Найняти на Upwork',
    de: 'Auf Upwork beauftragen',
    fr: 'M’engager sur Upwork',
    es: 'Contrátame en Upwork',
    it: 'Assumimi su Upwork',
    tr: 'Upwork üzerinden çalışalım',
  },
} as const satisfies Record<string, Record<Language, string>>

export default function BlogPostDetailClient({ slug }: BlogPostDetailClientProps) {
  const { language } = useLanguage()
  const post = getBlogPost(slug, language)
  const t = translations[language].blog
  const serviceId = getServiceIdForSlug(slug)
  const service = serviceId ? services[serviceId] : null

  if (!post) {
    notFound()
  }

  return (
    <article className="pt-20">
      <div className="pattern-hatch h-8 w-full border-x border-edge" />
      <div className="screen-line-before screen-line-after border-x border-edge p-4">
        <Link
          href={getBlogIndexPath(language)}
          className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.backToBlog}
        </Link>

        <header className="mb-8 border-b border-edge pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date, language)}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mb-4 text-3xl font-semibold tracking-tight">{post.title}</h1>
          <p className="mb-4 leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span key={tag} className="inline-flex h-6 items-center rounded-md bg-muted px-[0.45rem] text-xs font-medium text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <BlogPostContent sections={post.content} />

        {service && (
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-edge bg-muted/40 p-5 md:flex-row md:items-center">
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-semibold">{service.blogCtaTitle[language]}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.blogCtaText[language]}</p>
            </div>
            <Link
              href={withLangPrefix(language, service.path)}
              className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              {service.cardTitle[language]}
            </Link>
          </div>
        )}

        {(slug === 'lazy-lead-phenomenon-2026-attraction-strategies' || slug === 'what-is-web-application-modern-guide') && (
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-edge bg-muted/40 p-5 md:flex-row md:items-center">
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-semibold">
                {slug === 'what-is-web-application-modern-guide'
                  ? ctaCopy.orderApp[language]
                  : ctaCopy.oneClick[language]}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {slug === 'what-is-web-application-modern-guide'
                  ? ctaCopy.orderAppDesc[language]
                  : ctaCopy.oneClickDesc[language]}
              </p>
            </div>
            <a
              href="https://www.upwork.com/freelancers/irynavynnychenko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              {slug === 'what-is-web-application-modern-guide'
                ? ctaCopy.orderUpwork[language]
                : ctaCopy.hireUpwork[language]}
            </a>
          </div>
        )}

        <div className="mt-12 border-t border-edge pt-8">
          <ContactInfo
            title={ctaCopy.title[language]}
            description={ctaCopy.desc[language]}
          />
        </div>
      </div>
    </article>
  )
}
