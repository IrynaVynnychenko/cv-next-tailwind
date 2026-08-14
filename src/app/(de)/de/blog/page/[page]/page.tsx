import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
      'Praktische Artikel zu Webentwicklung, Performance-Optimierung und Recruiting — für Founder und Product Owner.',
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <BlogSchema posts={posts} lang="de" />
      <SetLanguageClient lang="de" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogIndex currentPage={pageNumber} />
      </main>
      <Footer />
    </div>
  )
}
