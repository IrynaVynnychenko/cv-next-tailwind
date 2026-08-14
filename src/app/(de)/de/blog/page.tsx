import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogIndex from '@/components/BlogIndex'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPostsForPage } from '@/data/blog-posts'
import { BlogSchema } from '@/components/SchemaMarkup'
import { getBlogIndexAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog — Iryna Vynnychenko | Senior Web- & Frontend-Entwicklerin',
  description:
    'Praktische Artikel zu Webentwicklung, Performance-Optimierung und Recruiting — für Founder und Product Owner.',
  alternates: getBlogIndexAlternates('de'),
}

export default function DeBlogPage() {
  const posts = getBlogPostsForPage(1, 'de')

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <BlogSchema posts={posts} lang="de" />
      <SetLanguageClient lang="de" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogIndex currentPage={1} />
      </main>
      <Footer />
    </div>
  )
}
