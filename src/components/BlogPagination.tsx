'use client'

import Link from 'next/link'
import { getBlogPageCount, getBlogPagePath } from '@/data/blog-posts'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

type BlogPaginationProps = {
  currentPage: number
}

export default function BlogPagination({ currentPage }: BlogPaginationProps) {
  const totalPages = getBlogPageCount()
  const { language } = useLanguage()
  const t = translations[language].blog

  if (totalPages <= 1) {
    return null
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav
      className="pt-12 flex flex-wrap items-center justify-center gap-2"
      aria-label="Blog pagination"
    >
      {currentPage > 1 ? (
        <Link
          href={getBlogPagePath(currentPage - 1, language)}
          className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          ← {t.previous}
        </Link>
      ) : (
        <span className="px-3 py-2 text-sm font-medium text-gray-300 dark:text-gray-600 border border-gray-100 dark:border-gray-800 rounded-lg cursor-not-allowed">
          ← {t.previous}
        </span>
      )}

      <div className="flex flex-wrap items-center gap-1">
        {pages.map((page) => (
          <Link
            key={page}
            href={getBlogPagePath(page, language)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={`min-w-10 px-3 py-2 text-sm font-medium text-center rounded-lg transition-colors ${
              page === currentPage
                ? 'bg-green-700 text-white dark:bg-green-600'
                : 'text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {currentPage < totalPages ? (
        <Link
          href={getBlogPagePath(currentPage + 1, language)}
          className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {t.next} →
        </Link>
      ) : (
        <span className="px-3 py-2 text-sm font-medium text-gray-300 dark:text-gray-600 border border-gray-100 dark:border-gray-800 rounded-lg cursor-not-allowed">
          {t.next} →
        </span>
      )}
    </nav>
  )
}
