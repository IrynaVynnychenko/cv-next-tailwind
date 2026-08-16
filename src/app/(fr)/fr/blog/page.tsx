import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog — Iryna Vynnychenko | Développeuse Web & Frontend Senior',
  description:
    'Articles pratiques sur le développement web, la performance et le choix d’une développeuse — pour fondateurs et product owners.',
  alternates: getBlogIndexAlternates('fr'),
}

export default function FrBlogPage() {
  const posts = getBlogPostsForPage(1, 'fr')

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <BlogSchema posts={posts} lang="fr" />
      <SetLanguageClient lang="fr" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogIndex currentPage={1} />
      </main>
      <Footer />
    </div>
  )
}
