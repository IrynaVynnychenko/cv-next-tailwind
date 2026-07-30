'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import BlogPostContent from '@/components/BlogPostContent'
import ContactInfo from '@/components/ContactInfo'
import { getBlogPost } from '@/data/blog-posts'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

type BlogPostDetailClientProps = {
  slug: string
}

function formatDate(dateString: string, lang: 'en' | 'ua') {
  const locale = lang === 'ua' ? 'uk-UA' : 'en-US'
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostDetailClient({ slug }: BlogPostDetailClientProps) {
  const { language } = useLanguage()
  const post = getBlogPost(slug, language)
  const t = translations[language].blog

  if (!post) {
    notFound()
  }

  const ctaTitle = language === 'ua' ? 'Готові обговорити ваш проєкт?' : 'Ready to discuss your project?'
  const ctaDesc = language === 'ua' 
    ? 'Я senior веб-розробник, що спеціалізується на React та Next.js — відкрита до нових проєктів.'
    : "I'm a senior web engineer specializing in React and Next.js — available for freelance projects worldwide."

  return (
    <article className="pt-32 pb-12">
      <Link
        href="/blog/"
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
                ? (language === 'ua' ? 'Замовити розробку веб-додатка' : 'Order Web Application')
                : (language === 'ua' ? 'Дія в 1 клік' : 'Action in 1 Click')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {slug === 'what-is-web-application-modern-guide'
                ? (language === 'ua'
                    ? 'Готові створити сучасний, швидкий та масштабований веб-додаток для вашого бізнесу? Розпочнімо безпечну співпрацю на Upwork вже сьогодні.'
                    : 'Ready to build a modern, fast, and scalable web application for your business? Start a secure contract on Upwork today.')
                : (language === 'ua'
                    ? 'Залучіть мене як розробника в 1 клік! Почніть безпечний контракт на Upwork, щоб побудувати висококонверсійні рішення для вашого бізнесу.'
                    : 'Attract me as your developer in 1 click! Start a secure contract on Upwork to build high-converting web solutions for your business.')}
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
                ? (language === 'ua' ? 'Замовити на Upwork' : 'Order Web Application')
                : (language === 'ua' ? 'Найняти мене на Upwork' : 'Hire Me on Upwork')}
            </a>
          </div>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <ContactInfo
          title={ctaTitle}
          description={ctaDesc}
        />
      </div>
    </article>
  )
}
