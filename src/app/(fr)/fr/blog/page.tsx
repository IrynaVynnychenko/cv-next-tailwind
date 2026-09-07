import type { Metadata } from 'next'
import { getBlogIndexMetadata } from '@/lib/blog-index-seo'
import { createBlogIndexPage } from '@/lib/page-factories'

export const metadata: Metadata = getBlogIndexMetadata('fr')

export default createBlogIndexPage('fr')
