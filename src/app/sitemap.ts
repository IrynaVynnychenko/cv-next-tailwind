import { MetadataRoute } from 'next'
import { rawBlogPosts } from '@/data/blog-posts'
import { EXPERIENCE_PATH } from '@/data/experience-page'
import { CONTACTS_PATH } from '@/data/contacts-page'
import { SERVICE_ORDER, services } from '@/data/services'
import { writeGeoFeeds } from '@/lib/geo-feeds'
import { LANGUAGES, withLangPrefix } from '@/lib/i18n'
import { getLanguageAlternates } from '@/lib/seo'
import { BASE_URL } from '@/lib/site'

const baseUrl = BASE_URL

function altHome() {
  return getLanguageAlternates('/')
}

function altBlog() {
  return getLanguageAlternates('/blog/')
}

function altExperience() {
  return getLanguageAlternates(EXPERIENCE_PATH)
}

function altContacts() {
  return getLanguageAlternates(CONTACTS_PATH)
}

function altPost(slug: string) {
  return getLanguageAlternates(`/blog/${slug}/`)
}

export default function sitemap(): MetadataRoute.Sitemap {
  writeGeoFeeds()

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
      url: `${baseUrl}${withLangPrefix(lang, EXPERIENCE_PATH)}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: altExperience() },
    },
    {
      url: `${baseUrl}${withLangPrefix(lang, CONTACTS_PATH)}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages: altContacts() },
    },
    ...SERVICE_ORDER.map((id) => ({
      url: `${baseUrl}${withLangPrefix(lang, services[id].path)}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: { languages: getLanguageAlternates(services[id].path) },
    })),
  ])

  const blogPostRoutes: MetadataRoute.Sitemap = rawBlogPosts.flatMap((post) =>
    LANGUAGES.map((lang) => ({
      url: `${baseUrl}${withLangPrefix(lang, `/blog/${post.slug}/`)}`,
      lastModified: post.updated || post.date || currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: { languages: altPost(post.slug) },
    }))
  )

  return [...staticRoutes, ...blogPostRoutes]
}
