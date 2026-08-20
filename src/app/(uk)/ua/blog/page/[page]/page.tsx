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
    return { title: 'Сторінку не знайдено' }
  }

  return {
    title: `Блог - Сторінка ${pageNumber} - Ірина Винниченко | Senior Web & Frontend розробниця`,
    description:
      'Корисні статті про веброзробку, швидкість сайтів і найм розробників - для фаундерів і власників продуктів.',
    alternates: getBlogIndexAlternates('ua', pageNumber),
  }
}

export default function UaBlogPaginationPage({ params }: BlogPageProps) {
  const pageNumber = parseInt(params.page, 10)
  const totalPages = getBlogPageCount()

  if (isNaN(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound()
  }

  const posts = getBlogPostsForPage(pageNumber, 'ua')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="ua" />
      <SetLanguageClient lang="ua" />
        <BlogIndex currentPage={pageNumber} />
    </SiteFrame>
  )
}
