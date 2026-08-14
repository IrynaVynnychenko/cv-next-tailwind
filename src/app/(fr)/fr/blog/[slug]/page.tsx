import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogPostDetailClient from '@/components/BlogPostDetailClient'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPost, rawBlogPosts } from '@/data/blog-posts'
import { BlogPostingSchema } from '@/components/SchemaMarkup'
import { getBlogPostAlternates } from '@/lib/seo'

type BlogPostPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return rawBlogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug, 'fr')

  if (!post) {
    return { title: 'Article introuvable' }
  }

  const alternates = getBlogPostAlternates(params.slug, 'fr')

  return {
    title: `${post.title} — Iryna Vynnychenko | Développeuse Web & Frontend Senior`,
    description: post.excerpt,
    alternates,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: alternates.canonical,
    },
  }
}

export default function FrBlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug, 'fr')

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {post && <BlogPostingSchema post={post} lang="fr" />}
      <SetLanguageClient lang="fr" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogPostDetailClient slug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
