import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import BlogIndex from '@/components/BlogIndex'
import { getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog — Iryna Vynnychenko | Senior Web & Frontend Engineer',
  description:
    'Practical insights on web development, performance, and hiring — written for founders and product owners building digital products.',
  alternates: getBlogIndexAlternates('en'),
}

export default function BlogPage() {
  const posts = getBlogPostsForPage(1, 'en')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="en" />
        <BlogIndex currentPage={1} />
    </SiteFrame>
  )
}
