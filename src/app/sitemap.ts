import { MetadataRoute } from 'next'
import { rawBlogPosts } from '@/data/blog-posts'
import { LANGUAGES, withLangPrefix } from '@/lib/i18n'
import { getLanguageAlternates } from '@/lib/seo'

const baseUrl = 'https://vynnychenko.dev'

function altHome() {
  return getLanguageAlternates('/')
}

function altBlog() {
  return getLanguageAlternates('/blog/')
}

function altTelegram() {
  return getLanguageAlternates('/telegram-mini-apps/')
}

function altAi() {
  return getLanguageAlternates('/ai-solutions/')
}

function altPost(slug: string) {
  return getLanguageAlternates(`/blog/${slug}/`)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0]

  const staticRoutes: MetadataRoute.Sitemap = LANGUAGES.flatMap((lang) => [
    {
      url: `${baseUrl}${withLangPrefix(lang, '/')}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: lang === 'en' ? 1.0 : 0.9,
      alternates: { languages: altHome() },
    },
    {
      url: `${baseUrl}${withLangPrefix(lang, '/blog/')}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
      alternates: { languages: altBlog() },
    },
    {
      url: `${baseUrl}${withLangPrefix(lang, '/telegram-mini-apps/')}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: { languages: altTelegram() },
    },
    {
      url: `${baseUrl}${withLangPrefix(lang, '/ai-solutions/')}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: { languages: altAi() },
    },
  ])

  const blogPostRoutes: MetadataRoute.Sitemap = rawBlogPosts.flatMap((post) =>
    LANGUAGES.map((lang) => ({
      url: `${baseUrl}${withLangPrefix(lang, `/blog/${post.slug}/`)}`,
      lastModified: post.date || currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: { languages: altPost(post.slug) },
    }))
  )

  return [...staticRoutes, ...blogPostRoutes]
}
