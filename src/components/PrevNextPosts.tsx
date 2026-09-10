'use client'

import Link from 'next/link'
import { getAdjacentPosts } from '@/data/blog-posts'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { getBlogPostPath } from '@/lib/i18n'

export default function PrevNextPosts({ slug }: { slug: string }) {
  const { language } = useLanguage()
  const { prev, next } = getAdjacentPosts(slug, language)
  const t = translations[language].blog

  if (!prev && !next) return null

  return (
    <nav className="mt-8 grid grid-cols-1 gap-3 border-t border-edge pt-8 sm:grid-cols-2" aria-label={`${t.prevPost} / ${t.nextPost}`}>
      {prev ? (
        <Link
          href={getBlogPostPath(language, prev.slug)}
          className="flex flex-col gap-1 border border-edge p-4 text-sm transition-colors hover:text-muted-foreground"
        >
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">← {t.prevPost}</span>
          <span className="font-medium">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={getBlogPostPath(language, next.slug)}
          className="flex flex-col gap-1 border border-edge p-4 text-right text-sm transition-colors hover:text-muted-foreground sm:items-end"
        >
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{t.nextPost} →</span>
          <span className="font-medium">{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}
