import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogIndex from '@/components/BlogIndex'

export const metadata: Metadata = {
  title: 'Blog — Iryna Vynnychenko | +380931844615 | Senior Web & Frontend Developer',
  description:
    'Practical insights on web development, performance, and hiring — written for founders and product owners building digital products.',
}

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full">
        <BlogIndex currentPage={1} />
      </main>
      <Footer />
    </div>
  )
}
