import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog — Iryna Vynnychenko | Sviluppatrice Web e Frontend Senior',
  description:
    'Articoli pratici su sviluppo web, performance e come scegliere uno sviluppatore — per founder e product owner.',
  alternates: getBlogIndexAlternates('it'),
}

export default function ItBlogPage() {
  const posts = getBlogPostsForPage(1, 'it')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="it" />
      <SetLanguageClient lang="it" />
        <BlogIndex currentPage={1} />
    </SiteFrame>
  )
}
