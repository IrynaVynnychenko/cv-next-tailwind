import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog - Iryna Vynnychenko | Senior Web- & Frontend-Entwicklerin',
  description:
    'Praxisnahe Artikel zu Webentwicklung, Performance und der Suche nach Entwicklerinnen und Entwicklern - für Founder und Product Owner.',
  alternates: getBlogIndexAlternates('de'),
}

export default function DeBlogPage() {
  const posts = getBlogPostsForPage(1, 'de')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="de" />
      <SetLanguageClient lang="de" />
        <BlogIndex currentPage={1} />
    </SiteFrame>
  )
}
