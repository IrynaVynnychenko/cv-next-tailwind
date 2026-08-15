import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog — Iryna Vynnychenko | Desarrolladora Web y Frontend Senior',
  description:
    'Artículos prácticos sobre desarrollo web, rendimiento y contratación — para fundadores y product owners.',
  alternates: getBlogIndexAlternates('es'),
}

export default function EsBlogPage() {
  const posts = getBlogPostsForPage(1, 'es')

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <BlogSchema posts={posts} lang="es" />
      <SetLanguageClient lang="es" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogIndex currentPage={1} />
      </main>
      <Footer />
    </div>
  )
}
