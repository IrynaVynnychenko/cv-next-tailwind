'use client'

import { useState, useMemo } from 'react'
import BlogPostList from '@/components/BlogPostList'
import BlogPagination from '@/components/BlogPagination'
import { getBlogPostsForPage, getAllBlogPosts } from '@/data/blog-posts'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { UpworkIcon } from '@/components/Icons'
import { Panel } from '@/components/Panel'

type BlogIndexProps = {
  currentPage: number
}

export default function BlogIndex({ currentPage }: BlogIndexProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const { language } = useLanguage()
  const t = translations[language].blog

  const allPosts = useMemo(() => getAllBlogPosts(language), [language])

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return []
    }
    const query = searchQuery.toLowerCase().trim()
    return allPosts.filter((post) => {
      const matchTitle = post.title.toLowerCase().includes(query)
      const matchExcerpt = post.excerpt.toLowerCase().includes(query)
      const matchTags = post.tags.some((tag) => tag.toLowerCase().includes(query))
      const matchContent = post.content.some((section) => {
        const matchHeading = section.heading?.toLowerCase().includes(query) || false
        const matchParagraphs = section.paragraphs.some((p) => p.toLowerCase().includes(query))
        const matchList = section.list?.some((l) => l.toLowerCase().includes(query)) || false
        return matchHeading || matchParagraphs || matchList
      })
      return matchTitle || matchExcerpt || matchTags || matchContent
    })
  }, [allPosts, searchQuery])

  const isSearching = searchQuery.trim() !== ''
  const displayedPosts = isSearching ? filteredPosts : getBlogPostsForPage(currentPage, language)

  return (
    <div className="pt-14">
      <div className="pattern-hatch h-8 w-full border-x border-edge" />
      <Panel title={t.title}>
        <div className="space-y-5 p-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{t.headerTag}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{t.description}</p>
          <a
            href="https://www.upwork.com/freelancers/irynavynnychenko"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-edge px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            <UpworkIcon className="size-4" />
            {translations[language].about.hireMeOnUpwork}
          </a>
          <div className="relative max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="block w-full rounded-md border border-edge bg-background py-2.5 pl-10 pr-10 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                title={t.clearSearch}
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </Panel>

      {isSearching && filteredPosts.length === 0 ? (
        <div className="border-x border-edge px-4 py-16 text-center">
          <p className="mb-4 text-sm text-muted-foreground">{t.noResults}</p>
          <button
            onClick={() => setSearchQuery('')}
            className="rounded-md border border-edge px-4 py-2 text-sm font-medium hover:bg-accent"
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
    </div>
  )
}
