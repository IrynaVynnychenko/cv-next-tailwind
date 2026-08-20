import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import BlogPostDetailClient from '@/components/BlogPostDetailClient'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPost, rawBlogPosts } from '@/data/blog-posts'
import { BlogPostingSchema } from '@/components/SchemaMarkup'
import { getBlogPostAlternates, getOpenGraphImages, getTwitterImageMetadata } from '@/lib/seo'

type BlogPostPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return rawBlogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug, 'es')

  if (!post) {
    return { title: 'Artículo no encontrado' }
  }

  const alternates = getBlogPostAlternates(params.slug, 'es')

  return {
    title: `${post.title} - Iryna Vynnychenko | Desarrolladora Web y Frontend Senior`,
    description: post.excerpt,
    alternates,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: alternates.canonical,
      images: getOpenGraphImages(),
    },
    twitter: getTwitterImageMetadata(),
  }
}

export default function EsBlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug, 'es')

  return (
    <SiteFrame>
      {post && <BlogPostingSchema post={post} lang="es" />}
      <SetLanguageClient lang="es" />
        <BlogPostDetailClient slug={params.slug} />
    </SiteFrame>
  )
}
