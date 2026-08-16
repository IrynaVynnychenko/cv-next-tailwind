import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog — Iryna Vynnychenko | Kıdemli Web ve Frontend Geliştirici',
  description:
    'Web geliştirme, performans ve geliştirici seçimi üzerine pratik yazılar — kurucular ve product owner’lar için.',
  alternates: getBlogIndexAlternates('tr'),
}

export default function TrBlogPage() {
  const posts = getBlogPostsForPage(1, 'tr')

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <BlogSchema posts={posts} lang="tr" />
      <SetLanguageClient lang="tr" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogIndex currentPage={1} />
      </main>
      <Footer />
    </div>
  )
}
