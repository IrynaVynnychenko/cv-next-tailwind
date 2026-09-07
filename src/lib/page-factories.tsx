import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteFrame from '@/components/SiteFrame'
import ServiceLanding from '@/components/ServiceLanding'
import ContactsView from '@/components/ContactsView'
import ExperienceView from '@/components/ExperienceView'
import BlogIndex from '@/components/BlogIndex'
import BlogPostDetailClient from '@/components/BlogPostDetailClient'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import {
  BlogPostingSchema,
  BlogSchema,
  ContactPageSchema,
  ServicePageSchema,
} from '@/components/SchemaMarkup'
import type { ServiceId } from '@/data/services'
import {
  getBlogPageCount,
  getBlogPost,
  getBlogPostsForPage,
  rawBlogPosts,
} from '@/data/blog-posts'
import type { Language } from '@/lib/i18n'
import { getBlogIndexMetadata, getBlogIndexNotFoundMetadata } from '@/lib/blog-index-seo'

/**
 * Factory functions for the JSX wrapper each locale's route file re-exports
 * as its `default` component. Every locale route file is otherwise
 * identical except for the `lang` (and, for services/blog posts, an id or
 * slug param) it's called with - centralizing the wrapper here keeps that
 * one true shape in one place instead of duplicated ~7x per route.
 */

export function createServicePage(id: ServiceId, lang: Language) {
  return function ServicePage() {
    return (
      <SiteFrame>
        <ServicePageSchema id={id} lang={lang} />
        {lang !== 'en' && <SetLanguageClient lang={lang} />}
        <ServiceLanding id={id} />
      </SiteFrame>
    )
  }
}

export function createContactsPage(lang: Language) {
  return function ContactsPage() {
    return (
      <SiteFrame>
        {lang !== 'en' && <SetLanguageClient lang={lang} />}
        <ContactPageSchema lang={lang} />
        <ContactsView />
      </SiteFrame>
    )
  }
}

export function createExperiencePage(lang: Language) {
  return function ExperiencePage() {
    return (
      <SiteFrame>
        {lang !== 'en' && <SetLanguageClient lang={lang} />}
        <ExperienceView />
      </SiteFrame>
    )
  }
}

export function createBlogIndexPage(lang: Language) {
  return function BlogPage() {
    const posts = getBlogPostsForPage(1, lang)

    return (
      <SiteFrame>
        <BlogSchema posts={posts} lang={lang} />
        {lang !== 'en' && <SetLanguageClient lang={lang} />}
        <BlogIndex currentPage={1} />
      </SiteFrame>
    )
  }
}

type BlogPaginatedPageProps = {
  params: { page: string }
}

function parseBlogPage(pageParam: string): number {
  return parseInt(pageParam, 10)
}

function isValidBlogPage(pageNumber: number): boolean {
  return !isNaN(pageNumber) && pageNumber >= 2 && pageNumber <= getBlogPageCount()
}

export function blogPaginatedStaticParams() {
  const totalPages = getBlogPageCount()

  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
    page: String(index + 2),
  }))
}

export function createBlogPaginatedMetadata(lang: Language) {
  return function generateMetadata({ params }: BlogPaginatedPageProps): Metadata {
    const pageNumber = parseBlogPage(params.page)

    if (!isValidBlogPage(pageNumber)) {
      return getBlogIndexNotFoundMetadata(lang)
    }

    return getBlogIndexMetadata(lang, pageNumber)
  }
}

export function createBlogPaginatedPage(lang: Language) {
  return function BlogPaginatedPage({ params }: BlogPaginatedPageProps) {
    const pageNumber = parseBlogPage(params.page)

    if (!isValidBlogPage(pageNumber)) {
      notFound()
    }

    const posts = getBlogPostsForPage(pageNumber, lang)

    return (
      <SiteFrame>
        <BlogSchema posts={posts} lang={lang} />
        {lang !== 'en' && <SetLanguageClient lang={lang} />}
        <BlogIndex currentPage={pageNumber} />
      </SiteFrame>
    )
  }
}

type BlogPostPageProps = {
  params: { slug: string }
}

export function blogPostStaticParams() {
  return rawBlogPosts.map((post) => ({ slug: post.slug }))
}

export function createBlogPostPage(lang: Language) {
  return function BlogPostPage({ params }: BlogPostPageProps) {
    const post = getBlogPost(params.slug, lang)

    return (
      <SiteFrame>
        {post && <BlogPostingSchema post={post} lang={lang} />}
        {lang !== 'en' && <SetLanguageClient lang={lang} />}
        <BlogPostDetailClient slug={params.slug} />
      </SiteFrame>
    )
  }
}
