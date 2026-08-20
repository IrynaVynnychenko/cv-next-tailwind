import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog — Iryna Vynnychenko | Desarrolladora Web y Frontend Senior',
  description:
    'Artículos prácticos sobre desarrollo web, rendimiento y cómo elegir desarrolladora — para fundadores y product owners.',
  alternates: getBlogIndexAlternates('es'),
}

export default function EsBlogPage() {
  const posts = getBlogPostsForPage(1, 'es')

  return (
    <SiteFrame>
      <BlogSchema posts={posts} lang="es" />
      <SetLanguageClient lang="es" />
        <BlogIndex currentPage={1} />
    </SiteFrame>
  )
}
