import {
  blogPaginatedStaticParams,
  createBlogPaginatedMetadata,
  createBlogPaginatedPage,
} from '@/lib/page-factories'

export const generateStaticParams = blogPaginatedStaticParams

export const generateMetadata = createBlogPaginatedMetadata('en')

export default createBlogPaginatedPage('en')
