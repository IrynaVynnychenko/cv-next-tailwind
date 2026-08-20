'use client'

import Link from 'next/link'
import { getBlogPageCount, getBlogPagePath } from '@/data/blog-posts'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

type BlogPaginationProps = {
  currentPage: number
}

function getPaginationRange(currentPage: number, totalPages: number) {
  const delta = 1 // number of pages to show around current page
  const range: (number | string)[] = []

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      range.push(i)
    } else if (range[range.length - 1] !== '...') {
      range.push('...')
    }
  }
  return range
}

export default function BlogPagination({ currentPage }: BlogPaginationProps) {
  const totalPages = getBlogPageCount()
  const { language } = useLanguage()
  const t = translations[language].blog

  if (totalPages <= 1) {
    return null
  }

  const pages = getPaginationRange(currentPage, totalPages)

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-2 border-x border-edge px-4 py-8"
      aria-label={translations[language].a11y.blogPagination}
    >
      {currentPage > 1 ? (
        <Link
          href={getBlogPagePath(currentPage - 1, language)}
          className="rounded-md border border-edge px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          ← <span className="hidden sm:inline">{t.previous}</span>
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-md border border-edge px-3 py-2 text-sm font-medium text-muted-foreground/40">
          ← <span className="hidden sm:inline">{t.previous}</span>
        </span>
      )}

      {pages.map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-sm font-medium text-muted-foreground">
              ...
            </span>
          )
        }

        return (
          <Link
            key={page}
            href={getBlogPagePath(page as number, language)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={`min-w-10 rounded-md px-3 py-2 text-center text-sm font-medium transition-colors ${
              page === currentPage
                ? 'bg-foreground text-background'
                : 'border border-edge text-muted-foreground hover:bg-accent hover:text-foreground'
            }`}
          >
            {page}
          </Link>
        )
      })}

      {currentPage < totalPages ? (
        <Link
          href={getBlogPagePath(currentPage + 1, language)}
          className="rounded-md border border-edge px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <span className="hidden sm:inline">{t.next}</span> →
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-md border border-edge px-3 py-2 text-sm font-medium text-muted-foreground/40">
          <span className="hidden sm:inline">{t.next}</span> →
        </span>
      )}
    </nav>
  )
}
