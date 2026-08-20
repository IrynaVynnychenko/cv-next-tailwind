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
  const post = getBlogPost(params.slug, 'ua')

  if (!post) {
    return { title: 'Статтю не знайдено' }
  }

  const alternates = getBlogPostAlternates(params.slug, 'ua')

  return {
    title: `${post.title} — Ірина Винниченко | Senior Web & Frontend розробниця`,
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

export default function UaBlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug, 'ua')

  return (
    <SiteFrame>
      {post && <BlogPostingSchema post={post} lang="ua" />}
      <SetLanguageClient lang="ua" />
        <BlogPostDetailClient slug={params.slug} />
    </SiteFrame>
  )
}
