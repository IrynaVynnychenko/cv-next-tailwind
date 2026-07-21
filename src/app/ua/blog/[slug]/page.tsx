import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogPostDetailClient from '@/components/BlogPostDetailClient'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { blogPosts, getBlogPost } from '@/data/blog-posts'

type BlogPostPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug, 'ua')

  if (!post) {
    return { title: 'Статтю не знайдено' }
  }

  return {
    title: `${post.title} — Ірина Винниченко | Senior Web & Frontend Розробниця`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  }
}

export default function UaBlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <SetLanguageClient lang="ua" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogPostDetailClient slug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
