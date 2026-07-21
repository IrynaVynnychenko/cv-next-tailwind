import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogPostDetailClient from '@/components/BlogPostDetailClient'
import { getBlogPost, rawBlogPosts } from '@/data/blog-posts'

type BlogPostPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return rawBlogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug, 'en')

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} — Iryna Vynnychenko | Senior Web & Frontend Developer`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogPostDetailClient slug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
