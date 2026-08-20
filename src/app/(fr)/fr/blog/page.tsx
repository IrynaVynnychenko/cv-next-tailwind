import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog - Iryna Vynnychenko | Développeuse Web & Frontend Senior',
  description:
    'Articles pratiques sur le développement web, la performance et le choix d’une développeuse - pour fondateurs et product owners.',
  alternates: getBlogIndexAlternates('fr'),
}

export default function FrBlogPage() {
  const posts = getBlogPostsForPage(1, 'fr')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="fr" />
      <SetLanguageClient lang="fr" />
        <BlogIndex currentPage={1} />
    </SiteFrame>
  )
}
