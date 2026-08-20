import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import BlogPostDetailClient from '@/components/BlogPostDetailClient'
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
  const post = getBlogPost(params.slug, 'en')

  if (!post) {
    return { title: 'Post Not Found' }
  }

  const alternates = getBlogPostAlternates(params.slug, 'en')

  return {
    title: `${post.title} — Iryna Vynnychenko | Senior Web & Frontend Engineer`,
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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug, 'en')

  return (
    <SiteFrame>
      {post && <BlogPostingSchema post={post} lang="en" />}
        <BlogPostDetailClient slug={params.slug} />
    </SiteFrame>
  )
}
