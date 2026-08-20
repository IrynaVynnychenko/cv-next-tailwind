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
  const post = getBlogPost(params.slug, 'tr')

  if (!post) {
    return { title: 'Yazı bulunamadı' }
  }

  const alternates = getBlogPostAlternates(params.slug, 'tr')

  return {
    title: `${post.title} - Iryna Vynnychenko | Kıdemli Web ve Frontend Geliştirici`,
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

export default function TrBlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug, 'tr')

  return (
    <SiteFrame>
      {post && <BlogPostingSchema post={post} lang="tr" />}
      <SetLanguageClient lang="tr" />
        <BlogPostDetailClient slug={params.slug} />
    </SiteFrame>
  )
}
