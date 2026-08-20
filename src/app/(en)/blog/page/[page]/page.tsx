import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteFrame from '@/components/SiteFrame'
import BlogIndex from '@/components/BlogIndex'
import { getBlogPageCount, getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

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
    title: `Blog — Page ${currentPage} — Iryna Vynnychenko | Senior Web & Frontend Engineer`,
    description:
      'Practical insights on web development, performance, and hiring — written for founders and product owners building digital products.',
    alternates: getBlogIndexAlternates('en', currentPage),
  }
}

export default function BlogPaginatedPage({ params }: BlogPaginatedPageProps) {
  const currentPage = Number(params.page)
  const totalPages = getBlogPageCount()

  if (!Number.isInteger(currentPage) || currentPage < 2 || currentPage > totalPages) {
    notFound()
  }

  const posts = getBlogPostsForPage(currentPage, 'en')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="en" />
        <BlogIndex currentPage={currentPage} />
    </SiteFrame>
  )
}
