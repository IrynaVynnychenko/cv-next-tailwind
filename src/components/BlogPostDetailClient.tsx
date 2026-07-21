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
    ? 'Я senior веб-розробниця, що спеціалізується на React та Next.js — відкрита до нових проєктів.'
    : "I'm a senior web developer specializing in React and Next.js — available for freelance projects worldwide."

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

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <ContactInfo
          title={ctaTitle}
          description={ctaDesc}
        />
      </div>
    </article>
  )
}
