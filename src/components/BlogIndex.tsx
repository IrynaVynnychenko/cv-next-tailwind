import BlogPostList from '@/components/BlogPostList'
import BlogPagination from '@/components/BlogPagination'
import { getBlogPostsForPage } from '@/data/blog-posts'

type BlogIndexProps = {
  currentPage: number
}

export default function BlogIndex({ currentPage }: BlogIndexProps) {
  const posts = getBlogPostsForPage(currentPage)

  return (
    <section className="pt-32 pb-12">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
        <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-3">
          Senior Web & Frontend Developer · Insights for Clients
        </p>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          Practical articles on performance, technology choices, and working with a freelance
          web developer — so you can make confident decisions for your project.
        </p>
      </div>

      <BlogPostList posts={posts} />
      <BlogPagination currentPage={currentPage} />
    </section>
  )
}
