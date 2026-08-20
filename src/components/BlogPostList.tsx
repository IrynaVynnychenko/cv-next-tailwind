'use client'

import Link from 'next/link'
import type { BlogPost } from '@/data/blog-posts'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { getBlogPostPath, LOCALE_TAGS, type Language } from '@/lib/i18n'
import { Badge } from '@/components/Panel'

function formatDate(dateString: string, lang: Language) {
  return new Date(dateString).toLocaleDateString(LOCALE_TAGS[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

type BlogPostListProps = {
  posts: BlogPost[]
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  const { language } = useLanguage()
  const t = translations[language].blog

  return (
    <div className="border-x border-edge">
      {posts.map((post) => {
        const postHref = getBlogPostPath(language, post.slug)

        return (
          <article key={post.slug} className="border-b border-edge p-4 transition-colors hover:bg-accent-muted">
            <div className="mb-2 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date, language)}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="mb-2 text-lg font-semibold tracking-tight">
              <Link href={postHref} className="underline-offset-4 hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

            <div className="mb-3 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <Link href={postHref} className="text-sm font-medium underline-offset-4 hover:underline">
              {t.readMore}
            </Link>
          </article>
        )
      })}
    </div>
  )
}
