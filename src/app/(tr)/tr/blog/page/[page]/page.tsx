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
    return { title: 'Sayfa bulunamadı' }
  }

  return {
    title: `Blog — Sayfa ${pageNumber} — Iryna Vynnychenko | Kıdemli Web ve Frontend Geliştirici`,
    description:
      'Web geliştirme, performans ve geliştirici seçimi üzerine pratik yazılar — kurucular ve product owner’lar için.',
    alternates: getBlogIndexAlternates('tr', pageNumber),
  }
}

export default function TrBlogPaginationPage({ params }: BlogPageProps) {
  const pageNumber = parseInt(params.page, 10)
  const totalPages = getBlogPageCount()

  if (isNaN(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound()
  }

  const posts = getBlogPostsForPage(pageNumber, 'tr')

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <BlogSchema posts={posts} lang="tr" />
      <SetLanguageClient lang="tr" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogIndex currentPage={pageNumber} />
      </main>
      <Footer />
    </div>
  )
}
