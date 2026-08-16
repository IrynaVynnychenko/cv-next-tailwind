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
    return { title: 'Page introuvable' }
  }

  return {
    title: `Blog — Page ${pageNumber} — Iryna Vynnychenko | Développeuse Web & Frontend Senior`,
    description:
      'Articles pratiques sur le développement web, la performance et le choix d’une développeuse — pour fondateurs et product owners.',
    alternates: getBlogIndexAlternates('fr', pageNumber),
  }
}

export default function FrBlogPaginationPage({ params }: BlogPageProps) {
  const pageNumber = parseInt(params.page, 10)
  const totalPages = getBlogPageCount()

  if (isNaN(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound()
  }

  const posts = getBlogPostsForPage(pageNumber, 'fr')

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <BlogSchema posts={posts} lang="fr" />
      <SetLanguageClient lang="fr" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogIndex currentPage={pageNumber} />
      </main>
      <Footer />
    </div>
  )
}
