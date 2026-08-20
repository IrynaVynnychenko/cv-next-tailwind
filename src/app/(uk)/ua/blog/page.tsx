import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Блог — Ірина Винниченко | Senior Web & Frontend розробниця',
  description:
    'Корисні статті про веброзробку, швидкість сайтів і найм розробників — для фаундерів і власників продуктів.',
  alternates: getBlogIndexAlternates('ua'),
}

export default function UaBlogPage() {
  const posts = getBlogPostsForPage(1, 'ua')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="ua" />
      <SetLanguageClient lang="ua" />
        <BlogIndex currentPage={1} />
    </SiteFrame>
  )
}
