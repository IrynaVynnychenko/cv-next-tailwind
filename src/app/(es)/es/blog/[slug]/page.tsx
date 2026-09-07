import type { Metadata } from 'next'
import { getBlogPostMetadata } from '@/lib/blog-seo'
import { blogPostStaticParams, createBlogPostPage } from '@/lib/page-factories'

type BlogPostPageProps = {
  params: { slug: string }
}

export const generateStaticParams = blogPostStaticParams

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  return getBlogPostMetadata(params.slug, 'es')
}

export default createBlogPostPage('es')
