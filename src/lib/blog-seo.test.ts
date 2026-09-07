import { describe, expect, it } from 'vitest'
import { getBlogPostMetadata, getBlogPostModified, getBlogPostWordCount } from '@/lib/blog-seo'
import { getBlogPost } from '@/data/blog-posts'
import { BASE_URL } from '@/lib/site'

const SLUG = 'core-web-vitals-and-revenue'

describe('getBlogPostWordCount', () => {
  it('counts words across the excerpt and all section paragraphs/lists', () => {
    const post = getBlogPost(SLUG, 'en')
    if (!post) throw new Error(`fixture post not found: ${SLUG}`)
    const count = getBlogPostWordCount(post)
    expect(count).toBeGreaterThan(50)
    expect(Number.isInteger(count)).toBe(true)
  })

  it('does not count consecutive whitespace as extra words', () => {
    const post = getBlogPost(SLUG, 'en')!
    const manualWordCount = [
      post.excerpt,
      ...post.content.flatMap((section) => [
        section.heading ?? '',
        ...section.paragraphs,
        ...(section.list ?? []),
      ]),
    ]
      .join('\n\n')
      .split(/\s+/)
      .filter(Boolean).length
    expect(getBlogPostWordCount(post)).toBe(manualWordCount)
  })
})

describe('getBlogPostModified', () => {
  it('returns updated when present', () => {
    expect(getBlogPostModified({ date: '2026-01-01', updated: '2026-02-01' })).toBe('2026-02-01')
  })

  it('falls back to date when updated is absent', () => {
    expect(getBlogPostModified({ date: '2026-01-01', updated: undefined })).toBe('2026-01-01')
  })

  it('falls back to date when updated is an empty string', () => {
    expect(getBlogPostModified({ date: '2026-01-01', updated: '' })).toBe('2026-01-01')
  })
})

describe('getBlogPostMetadata', () => {
  it('returns a not-found title (en) for an unknown slug', () => {
    const metadata = getBlogPostMetadata('this-slug-does-not-exist', 'en')
    expect(metadata).toEqual({ title: 'Post Not Found' })
  })

  it('returns a localized not-found title (ua) for an unknown slug', () => {
    const metadata = getBlogPostMetadata('this-slug-does-not-exist', 'ua')
    expect(metadata).toEqual({ title: 'Статтю не знайдено' })
  })

  it('builds full metadata for a real post in en', () => {
    const metadata = getBlogPostMetadata(SLUG, 'en')
    const post = getBlogPost(SLUG, 'en')!
    expect(metadata.title).toBe(`${post.title} - Iryna Vynnychenko | Senior Web & Frontend Engineer`)
    expect(metadata.description).toBe(post.excerpt)
    expect(metadata.alternates?.canonical).toBe(`${BASE_URL}/blog/${SLUG}/`)
    expect(metadata.openGraph?.locale).toBe('en_US')
    expect(metadata.openGraph?.type).toBe('article')
  })

  it('builds full metadata for a real post in a prefixed locale (de)', () => {
    const metadata = getBlogPostMetadata(SLUG, 'de')
    const post = getBlogPost(SLUG, 'de')!
    expect(metadata.title).toBe(`${post.title} - Iryna Vynnychenko | Senior Web- & Frontend-Entwicklerin`)
    expect(metadata.alternates?.canonical).toBe(`${BASE_URL}/de/blog/${SLUG}/`)
    expect(metadata.openGraph?.locale).toBe('de_DE')
  })
})
