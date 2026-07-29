import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPageCount, getBlogPostsForPage } from '@/data/blog-posts'
import { notFound } from 'next/navigation'
import { BlogSchema } from '@/components/SchemaMarkup'

type BlogPageProps = {
  params: { page: string }
}

export function generateStaticParams() {
  const totalPages = getBlogPageCount()

  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
    page: String(index + 2),
  }))
}

export default function UaBlogPaginationPage({ params }: BlogPageProps) {
  const pageNumber = parseInt(params.page, 10)
  const totalPages = getBlogPageCount()

  if (isNaN(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound()
  }

  const posts = getBlogPostsForPage(pageNumber, 'ua')

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <BlogSchema posts={posts} lang="ua" />
      <SetLanguageClient lang="ua" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogIndex currentPage={pageNumber} />
      </main>
      <Footer />
    </div>
  )
}
