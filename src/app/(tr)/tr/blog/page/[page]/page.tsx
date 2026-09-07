import {
  blogPaginatedStaticParams,
  createBlogPaginatedMetadata,
  createBlogPaginatedPage,
} from '@/lib/page-factories'

export const generateStaticParams = blogPaginatedStaticParams

export const generateMetadata = createBlogPaginatedMetadata('tr')

export default createBlogPaginatedPage('tr')
