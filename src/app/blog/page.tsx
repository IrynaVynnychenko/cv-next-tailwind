import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Blog — Iryna Vynnychenko | Senior Web Developer',
  description:
    'Practical insights on web development, performance, and hiring — written for founders and product owners building digital products.',
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8">
        <section className="pt-32 pb-12">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
            <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-3">
              Senior Web Developer · Insights for Clients
            </p>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Practical articles on performance, technology choices, and working with a freelance
              web developer — so you can make confident decisions for your project.
            </p>
          </div>

          <div className="pt-12 space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readTime} read</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                  <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}/`}
                  className="text-sm font-medium text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
