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
    },
    {
      url: `${baseUrl}/ua/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ua/blog/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  const blogPostRoutes: MetadataRoute.Sitemap = rawBlogPosts.flatMap((post) => [
    {
      url: `${baseUrl}/blog/${post.slug}/`,
      lastModified: post.date || currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ua/blog/${post.slug}/`,
      lastModified: post.date || currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ])

  return [...staticRoutes, ...blogPostRoutes]
}
