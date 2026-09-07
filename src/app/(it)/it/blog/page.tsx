import type { Metadata } from 'next'
import { getBlogIndexMetadata } from '@/lib/blog-index-seo'
import { createBlogIndexPage } from '@/lib/page-factories'

export const metadata: Metadata = getBlogIndexMetadata('it')

export default createBlogIndexPage('it')
