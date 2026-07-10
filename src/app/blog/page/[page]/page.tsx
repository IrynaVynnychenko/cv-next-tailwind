import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogIndex from '@/components/BlogIndex'
import { getBlogPageCount } from '@/data/blog-posts'

type BlogPaginatedPageProps = {
  params: { page: string }
}

export function generateStaticParams() {
  const totalPages = getBlogPageCount()

  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
    page: String(index + 2),
  }))
}

export function generateMetadata({ params }: BlogPaginatedPageProps): Metadata {
  const currentPage = Number(params.page)

  if (!Number.isInteger(currentPage) || currentPage < 2 || currentPage > getBlogPageCount()) {
    return { title: 'Page Not Found' }
  }

  return {
    title: `Blog — Page ${currentPage} — Iryna Vynnychenko | Senior Web & Frontend Developer`,
    description:
      'Practical insights on web development, performance, and hiring — written for founders and product owners building digital products.',
  }
}

export default function BlogPaginatedPage({ params }: BlogPaginatedPageProps) {
  const currentPage = Number(params.page)
  const totalPages = getBlogPageCount()

  if (!Number.isInteger(currentPage) || currentPage < 2 || currentPage > totalPages) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8">
        <BlogIndex currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  )
}
