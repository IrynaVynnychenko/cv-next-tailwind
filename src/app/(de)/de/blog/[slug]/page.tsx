import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
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
  const post = getBlogPost(params.slug, 'de')

  if (!post) {
    return { title: 'Artikel nicht gefunden' }
  }

  const alternates = getBlogPostAlternates(params.slug, 'de')

  return {
    title: `${post.title} — Iryna Vynnychenko | Senior Web- & Frontend-Entwicklerin`,
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

export default function DeBlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug, 'de')

  return (
    <SiteFrame>
      {post && <BlogPostingSchema post={post} lang="de" />}
      <SetLanguageClient lang="de" />
        <BlogPostDetailClient slug={params.slug} />
    </SiteFrame>
  )
}
