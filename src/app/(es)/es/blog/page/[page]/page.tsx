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
    return { title: 'Página no encontrada' }
  }

  return {
    title: `Blog — Página ${pageNumber} — Iryna Vynnychenko | Desarrolladora Web y Frontend Senior`,
    description:
      'Artículos prácticos sobre desarrollo web, rendimiento y cómo elegir desarrolladora — para fundadores y product owners.',
    alternates: getBlogIndexAlternates('es', pageNumber),
  }
}

export default function EsBlogPaginationPage({ params }: BlogPageProps) {
  const pageNumber = parseInt(params.page, 10)
  const totalPages = getBlogPageCount()

  if (isNaN(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound()
  }

  const posts = getBlogPostsForPage(pageNumber, 'es')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="es" />
      <SetLanguageClient lang="es" />
        <BlogIndex currentPage={pageNumber} />
    </SiteFrame>
  )
}
