import { MetadataRoute } from 'next'
import { rawBlogPosts } from '@/data/blog-posts'

const baseUrl = 'https://vynnychenko.dev'

function altHome() {
  return {
    en: `${baseUrl}/`,
    'en-US': `${baseUrl}/`,
    'uk-UA': `${baseUrl}/ua/`,
    de: `${baseUrl}/de/`,
    'de-DE': `${baseUrl}/de/`,
    'x-default': `${baseUrl}/`,
  }
}

function altBlog() {
  return {
    en: `${baseUrl}/blog/`,
    'en-US': `${baseUrl}/blog/`,
    'uk-UA': `${baseUrl}/ua/blog/`,
    de: `${baseUrl}/de/blog/`,
    'de-DE': `${baseUrl}/de/blog/`,
    'x-default': `${baseUrl}/blog/`,
  }
}

function altPost(slug: string) {
  return {
    en: `${baseUrl}/blog/${slug}/`,
    'en-US': `${baseUrl}/blog/${slug}/`,
    'uk-UA': `${baseUrl}/ua/blog/${slug}/`,
    de: `${baseUrl}/de/blog/${slug}/`,
    'de-DE': `${baseUrl}/de/blog/${slug}/`,
    'x-default': `${baseUrl}/blog/${slug}/`,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0]

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: { languages: altHome() },
    },
    {
      url: `${baseUrl}/ua/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages: altHome() },
    },
    {
      url: `${baseUrl}/de/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages: altHome() },
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: { languages: altBlog() },
    },
    {
      url: `${baseUrl}/ua/blog/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: { languages: altBlog() },
    },
    {
      url: `${baseUrl}/de/blog/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: { languages: altBlog() },
    },
  ]

  const blogPostRoutes: MetadataRoute.Sitemap = rawBlogPosts.flatMap((post) => [
    {
      url: `${baseUrl}/blog/${post.slug}/`,
      lastModified: post.date || currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: { languages: altPost(post.slug) },
    },
    {
      url: `${baseUrl}/ua/blog/${post.slug}/`,
      lastModified: post.date || currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: { languages: altPost(post.slug) },
    },
    {
      url: `${baseUrl}/de/blog/${post.slug}/`,
      lastModified: post.date || currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: { languages: altPost(post.slug) },
    },
  ])

  return [...staticRoutes, ...blogPostRoutes]
}
