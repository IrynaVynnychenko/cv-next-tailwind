import { MetadataRoute } from 'next'
import { rawBlogPosts } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vynnychenko.dev'
  const currentDate = new Date().toISOString().split('T')[0]

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/`,
          'uk-UA': `${baseUrl}/ua/`,
          'x-default': `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/ua/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/`,
          'uk-UA': `${baseUrl}/ua/`,
          'x-default': `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/`,
          'uk-UA': `${baseUrl}/ua/blog/`,
          'x-default': `${baseUrl}/blog/`,
        },
      },
    },
    {
      url: `${baseUrl}/ua/blog/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/`,
          'uk-UA': `${baseUrl}/ua/blog/`,
          'x-default': `${baseUrl}/blog/`,
        },
      },
    },
  ]

  const blogPostRoutes: MetadataRoute.Sitemap = rawBlogPosts.flatMap((post) => [
    {
      url: `${baseUrl}/blog/${post.slug}/`,
      lastModified: post.date || currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/${post.slug}/`,
          'uk-UA': `${baseUrl}/ua/blog/${post.slug}/`,
          'x-default': `${baseUrl}/blog/${post.slug}/`,
        },
      },
    },
    {
      url: `${baseUrl}/ua/blog/${post.slug}/`,
      lastModified: post.date || currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/${post.slug}/`,
          'uk-UA': `${baseUrl}/ua/blog/${post.slug}/`,
          'x-default': `${baseUrl}/blog/${post.slug}/`,
        },
      },
    },
  ])

  return [...staticRoutes, ...blogPostRoutes]
}

