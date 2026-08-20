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
    return { title: 'Pagina non trovata' }
  }

  return {
    title: `Blog - Pagina ${pageNumber} - Iryna Vynnychenko | Sviluppatrice Web e Frontend Senior`,
    description:
      'Articoli pratici su sviluppo web, performance e come scegliere uno sviluppatore - per founder e product owner.',
    alternates: getBlogIndexAlternates('it', pageNumber),
  }
}

export default function ItBlogPaginationPage({ params }: BlogPageProps) {
  const pageNumber = parseInt(params.page, 10)
  const totalPages = getBlogPageCount()

  if (isNaN(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound()
  }

  const posts = getBlogPostsForPage(pageNumber, 'it')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="it" />
      <SetLanguageClient lang="it" />
        <BlogIndex currentPage={pageNumber} />
    </SiteFrame>
  )
}
