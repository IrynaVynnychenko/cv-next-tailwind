'use client'

import { useState, useMemo } from 'react'
import BlogPostList from '@/components/BlogPostList'
import BlogPagination from '@/components/BlogPagination'
import { getBlogPostsForPage, getAllBlogPosts } from '@/data/blog-posts'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

type BlogIndexProps = {
  currentPage: number
}

export default function BlogIndex({ currentPage }: BlogIndexProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const { language } = useLanguage()
  const t = translations[language].blog

  // Get all posts for searching
  const allPosts = useMemo(() => getAllBlogPosts(language), [language])

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return []
    }
    const query = searchQuery.toLowerCase().trim()
    return allPosts.filter(post => {
      const matchTitle = post.title.toLowerCase().includes(query)
      const matchExcerpt = post.excerpt.toLowerCase().includes(query)
      const matchTags = post.tags.some(tag => tag.toLowerCase().includes(query))
      const matchContent = post.content.some(section => {
        const matchHeading = section.heading?.toLowerCase().includes(query) || false
        const matchParagraphs = section.paragraphs.some(p => p.toLowerCase().includes(query))
        const matchList = section.list?.some(l => l.toLowerCase().includes(query)) || false
        return matchHeading || matchParagraphs || matchList
      })
      return matchTitle || matchExcerpt || matchTags || matchContent
    })
  }, [allPosts, searchQuery])

  // If searching, show filtered posts. Otherwise, show paginated posts.
  const isSearching = searchQuery.trim() !== ''
  const displayedPosts = isSearching ? filteredPosts : getBlogPostsForPage(currentPage, language)

  return (
    <section className="pt-32 pb-12">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-12">
        <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-3">
          {t.headerTag}
        </p>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          {t.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          {t.description}
        </p>

        {/* Search Input */}
        <div className="mt-8 relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              title={t.clearSearch}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {isSearching && filteredPosts.length === 0 ? (
        <div className="py-16 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600 mb-4 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{t.noResults}</p>
          <button
            onClick={() => setSearchQuery('')}
            className="px-4 py-2 text-sm font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/30 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/45 transition-colors border border-green-200 dark:border-green-900/50"
          >
            {t.clearSearch}
          </button>
        </div>
      ) : (
        <>
          <BlogPostList posts={displayedPosts} />
          {!isSearching && <BlogPagination currentPage={currentPage} />}
        </>
      )}
    </section>
  )
}
