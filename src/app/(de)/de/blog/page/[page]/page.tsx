import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPageCount, getBlogPostsForPage } from '@/data/blog-posts'
import { notFound } from 'next/navigation'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

type BlogPageProps = {
  params: { page: string }
}

export function generateStaticParams() {
  const totalPages = getBlogPageCount()

  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
    page: String(index + 2),
  }))
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const pageNumber = parseInt(params.page, 10)
  const totalPages = getBlogPageCount()

  if (isNaN(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    return { title: 'Seite nicht gefunden' }
  }

  return {
    title: `Blog — Seite ${pageNumber} — Iryna Vynnychenko | Senior Web- & Frontend-Entwicklerin`,
    description:
      'Praxisnahe Artikel zu Webentwicklung, Performance und der Suche nach Entwicklerinnen und Entwicklern — für Founder und Product Owner.',
    alternates: getBlogIndexAlternates('de', pageNumber),
  }
}

export default function DeBlogPaginationPage({ params }: BlogPageProps) {
  const pageNumber = parseInt(params.page, 10)
  const totalPages = getBlogPageCount()

  if (isNaN(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound()
  }

  const posts = getBlogPostsForPage(pageNumber, 'de')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="de" />
      <SetLanguageClient lang="de" />
        <BlogIndex currentPage={pageNumber} />
    </SiteFrame>
  )
}
