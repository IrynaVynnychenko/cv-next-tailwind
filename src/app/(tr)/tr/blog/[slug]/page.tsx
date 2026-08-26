import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import BlogPostDetailClient from '@/components/BlogPostDetailClient'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getBlogPost, rawBlogPosts } from '@/data/blog-posts'
import { BlogPostingSchema } from '@/components/SchemaMarkup'
import { getBlogPostMetadata } from '@/lib/blog-seo'

type BlogPostPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return rawBlogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  return getBlogPostMetadata(params.slug, 'tr')
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
