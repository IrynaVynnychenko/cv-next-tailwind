import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPageCount } from '@/data/blog-posts'
import { notFound } from 'next/navigation'

type BlogPageProps = {
  params: { page: string }
}

export function generateStaticParams() {
  const pageCount = getBlogPageCount()
  return Array.from({ length: pageCount }, (_, i) => ({
    page: String(i + 1),
  }))
}

export default function UaBlogPaginationPage({ params }: BlogPageProps) {
  const pageNumber = parseInt(params.page, 10)
  const totalPages = getBlogPageCount()

  if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <SetLanguageClient lang="ua" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogIndex currentPage={pageNumber} />
      </main>
      <Footer />
    </div>
  )
}
