import {
  blogPaginatedStaticParams,
  createBlogPaginatedMetadata,
  createBlogPaginatedPage,
} from '@/lib/page-factories'

export const generateStaticParams = blogPaginatedStaticParams

export const generateMetadata = createBlogPaginatedMetadata('es')

export default createBlogPaginatedPage('es')
