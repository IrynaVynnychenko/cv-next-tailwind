'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import BlogPostContent from '@/components/BlogPostContent'
import ContactInfo from '@/components/ContactInfo'
import { getBlogPost } from '@/data/blog-posts'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { getBlogIndexPath, LOCALE_TAGS, type Language } from '@/lib/i18n'

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
    ua: 'Готові обговорити ваш проєкт?',
    de: 'Bereit, Ihr Projekt zu besprechen?',
    fr: 'Prêt à discuter de votre projet ?',
  },
  desc: {
    en: "I'm a senior web engineer specializing in React and Next.js — available for freelance projects worldwide.",
    ua: 'Я senior веб-розробниця зі спеціалізацією на React та Next.js — відкрита до нових проєктів.',
    de: 'Ich bin Senior-Webentwicklerin mit Fokus auf React und Next.js — verfügbar für Freelance-Projekte weltweit.',
    fr: 'Je suis ingénieure web senior spécialisée en React et Next.js — disponible pour des projets freelance partout dans le monde.',
  },
  orderApp: {
    en: 'Order a web application',
    ua: 'Замовити розробку веб-додатка',
    de: 'Webanwendung beauftragen',
    fr: 'Commander une application web',
  },
  oneClick: {
    en: 'Hire in 1 click',
    ua: 'Найм в 1 клік',
    de: 'Mit 1 Klick beauftragen',
    fr: 'Engager en 1 clic',
  },
  orderAppDesc: {
    en: 'Ready to build a modern, fast, and scalable web application for your business? Start a secure contract on Upwork today.',
    ua: 'Готові створити сучасний, швидкий та масштабований веб-додаток для вашого бізнесу? Розпочнімо безпечну співпрацю на Upwork вже сьогодні.',
    de: 'Bereit, eine moderne, schnelle und skalierbare Webanwendung für Ihr Business zu bauen? Starten Sie noch heute einen sicheren Vertrag auf Upwork.',
    fr: 'Prêt à construire une application web moderne, rapide et évolutive pour votre entreprise ? Démarrez dès aujourd’hui un contrat sécurisé sur Upwork.',
  },
  oneClickDesc: {
    en: 'Hire me as your developer in 1 click. Start a secure Upwork contract to build high-converting web solutions for your business.',
    ua: 'Найміть мене як розробницю в 1 клік. Почніть безпечний контракт на Upwork, щоб побудувати висококонверсійні рішення для вашого бізнесу.',
    de: 'Beauftragen Sie mich als Entwicklerin mit 1 Klick! Starten Sie einen sicheren Upwork-Vertrag für conversionstarke Web-Lösungen.',
    fr: 'Engagez-moi comme développeuse en 1 clic. Démarrez un contrat Upwork sécurisé pour construire des solutions web à fort taux de conversion.',
  },
  orderUpwork: {
    en: 'Order a web application',
    ua: 'Замовити на Upwork',
    de: 'Auf Upwork beauftragen',
    fr: 'Commander sur Upwork',
  },
  hireUpwork: {
    en: 'Hire Me on Upwork',
    ua: 'Найняти мене на Upwork',
    de: 'Auf Upwork beauftragen',
    fr: 'M’engager sur Upwork',
  },
} as const

export default function BlogPostDetailClient({ slug }: BlogPostDetailClientProps) {
  const { language } = useLanguage()
  const post = getBlogPost(slug, language)
  const t = translations[language].blog

  if (!post) {
    notFound()
  }

  return (
    <article className="pt-32 pb-12">
      <Link
        href={getBlogIndexPath(language)}
        className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
      >
        {t.backToBlog}
      </Link>

      <header className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
          <time dateTime={post.date}>{formatDate(post.date, language)}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          {post.title}
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <BlogPostContent sections={post.content} />

      {(slug === 'lazy-lead-phenomenon-2026-attraction-strategies' || slug === 'what-is-web-application-modern-guide') && (
        <div className="mt-12 p-6 rounded-2xl border border-green-500/20 dark:border-green-500/10 bg-green-50/50 dark:bg-green-950/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              {slug === 'what-is-web-application-modern-guide'
                ? ctaCopy.orderApp[language]
                : ctaCopy.oneClick[language]}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {slug === 'what-is-web-application-modern-guide'
                ? ctaCopy.orderAppDesc[language]
                : ctaCopy.oneClickDesc[language]}
            </p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <a
              href="https://www.upwork.com/freelancers/irynavynnychenko"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-xl text-white bg-[#14a800] hover:bg-[#129600] active:bg-[#108400] transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg hover:shadow-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 font-sans"
            >
              {slug === 'what-is-web-application-modern-guide'
                ? ctaCopy.orderUpwork[language]
                : ctaCopy.hireUpwork[language]}
            </a>
          </div>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <ContactInfo
          title={ctaCopy.title[language]}
          description={ctaCopy.desc[language]}
        />
      </div>
    </article>
  )
}
