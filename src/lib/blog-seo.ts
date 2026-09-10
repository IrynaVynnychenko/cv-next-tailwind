import type { Metadata } from 'next'
import type { BlogPost } from '@/data/blog-posts'
import { getBlogPost } from '@/data/blog-posts'
import type { Language } from '@/lib/i18n'
import { AUTHOR_NAME } from '@/lib/site'
import {
  getBlogPostAlternates,
  getOgLocale,
  getOpenGraphImages,
  getTwitterImageMetadata,
} from '@/lib/seo'

const TITLE_SUFFIX: Record<Language, string> = {
  en: 'Iryna Vynnychenko',
  ua: 'Ірина Винниченко',
  de: 'Iryna Vynnychenko',
  fr: 'Iryna Vynnychenko',
  es: 'Iryna Vynnychenko',
  it: 'Iryna Vynnychenko',
  tr: 'Iryna Vynnychenko',
}

// Google truncates <title> around ~60 characters in search results. Post headlines are already
// full sentences by design, so only tack on the brand suffix when there's room for it - never
// let it push an already-long title further past the point where it would just get cut off.
const TITLE_MAX_LENGTH = 65

function buildBlogPostTitle(postTitle: string, lang: Language): string {
  const withSuffix = `${postTitle} - ${TITLE_SUFFIX[lang]}`
  return withSuffix.length <= TITLE_MAX_LENGTH ? withSuffix : postTitle
}

const NOT_FOUND_TITLE: Record<Language, string> = {
  en: 'Post Not Found',
  ua: 'Статтю не знайдено',
  de: 'Artikel nicht gefunden',
  fr: 'Article introuvable',
  es: 'Artículo no encontrado',
  it: 'Articolo non trovato',
  tr: 'Yazı bulunamadı',
}

export function getBlogPostPlainText(post: BlogPost): string {
  const parts: string[] = [post.excerpt]
  for (const section of post.content) {
    if (section.heading) parts.push(section.heading)
    parts.push(...section.paragraphs)
    if (section.list) parts.push(...section.list)
  }
  return parts.filter(Boolean).join('\n\n')
}

export function getBlogPostWordCount(post: BlogPost): number {
  return getBlogPostPlainText(post).split(/\s+/).filter(Boolean).length
}

export function getBlogPostModified(post: Pick<BlogPost, 'date' | 'updated'>): string {
  return post.updated || post.date
}

export function getBlogPostMetadata(slug: string, lang: Language): Metadata {
  const post = getBlogPost(slug, lang)

  if (!post) {
    return { title: NOT_FOUND_TITLE[lang] }
  }

  const author = AUTHOR_NAME[lang]
  const alternates = getBlogPostAlternates(slug, lang)
  const modified = getBlogPostModified(post)

  return {
    title: buildBlogPostTitle(post.title, lang),
    description: post.excerpt,
    authors: [{ name: author, url: 'https://vynnychenko.dev' }],
    alternates,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: alternates.canonical,
      locale: getOgLocale(lang),
      images: getOpenGraphImages(author),
      publishedTime: post.date,
      modifiedTime: modified,
      authors: [author],
      tags: post.tags,
    },
    twitter: getTwitterImageMetadata(author),
  }
}
