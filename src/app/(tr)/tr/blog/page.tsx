import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog — Iryna Vynnychenko | Kıdemli Web ve Frontend Geliştirici',
  description:
    'Web geliştirme, performans ve geliştirici seçimi üzerine pratik yazılar — kurucular ve product owner’lar için.',
  alternates: getBlogIndexAlternates('tr'),
}

export default function TrBlogPage() {
  const posts = getBlogPostsForPage(1, 'tr')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="tr" />
      <SetLanguageClient lang="tr" />
        <BlogIndex currentPage={1} />
    </SiteFrame>
  )
}
