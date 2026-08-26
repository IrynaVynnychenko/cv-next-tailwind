'use client'

import Link from 'next/link'
import { getRelatedPosts } from '@/data/blog-posts'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { getBlogPostPath } from '@/lib/i18n'

export default function RelatedPosts({ slug }: { slug: string }) {
  const { language } = useLanguage()
  const posts = getRelatedPosts(slug, language)
  const title = translations[language].blog.relatedTitle

  if (posts.length === 0) return null

  return (
    <nav className="mt-12 border-t border-edge pt-8" aria-labelledby="related-posts-heading">
      <h2 id="related-posts-heading" className="mb-4 text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <ul className="border-y border-edge">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-edge last:border-b-0">
            <Link
              href={getBlogPostPath(language, post.slug)}
              className="flex items-center justify-between gap-4 py-4 text-sm font-medium transition-colors hover:text-muted-foreground"
            >
              <span>{post.title}</span>
              <span className="shrink-0 text-muted-foreground" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
