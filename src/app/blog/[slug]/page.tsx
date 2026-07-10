import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogPostContent from '@/components/BlogPostContent'
import ContactInfo from '@/components/ContactInfo'
import { blogPosts, getBlogPost } from '@/data/blog-posts'

type BlogPostPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} — Iryna Vynnychenko | Senior Web & Frontend Developer`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8">
        <article className="pt-32 pb-12">
          <Link
            href="/blog/"
            className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
          >
            ← Back to Blog
          </Link>

          <header className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readTime} read</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              {post.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <BlogPostContent sections={post.content} />

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <ContactInfo
              title="Ready to discuss your project?"
              description="I'm a senior web developer specializing in React and Next.js — available for freelance projects worldwide."
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
