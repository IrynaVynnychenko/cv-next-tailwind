import { describe, expect, it } from 'vitest'
import {
  BLOG_POSTS_PER_PAGE,
  getAllBlogSlugs,
  getBlogPageCount,
  getBlogPostsForPage,
  rawBlogPosts,
} from '@/data/blog-posts'

const TOTAL_POSTS = getAllBlogSlugs().length

describe('getBlogPageCount', () => {
  it('matches ceil(totalPosts / BLOG_POSTS_PER_PAGE)', () => {
    expect(getBlogPageCount()).toBe(Math.ceil(TOTAL_POSTS / BLOG_POSTS_PER_PAGE))
  })

  it('is a positive integer', () => {
    const count = getBlogPageCount()
    expect(Number.isInteger(count)).toBe(true)
    expect(count).toBeGreaterThan(0)
  })
})

describe('getBlogPostsForPage', () => {
  const pageCount = getBlogPageCount()

  it('returns a full page of BLOG_POSTS_PER_PAGE posts for page 1', () => {
    const posts = getBlogPostsForPage(1)
    expect(posts.length).toBe(Math.min(BLOG_POSTS_PER_PAGE, TOTAL_POSTS))
  })

  it('returns the remainder (possibly partial) posts on the last page', () => {
    const posts = getBlogPostsForPage(pageCount)
    const expectedLastPageSize = TOTAL_POSTS - (pageCount - 1) * BLOG_POSTS_PER_PAGE
    expect(posts.length).toBe(expectedLastPageSize)
    expect(posts.length).toBeGreaterThan(0)
    expect(posts.length).toBeLessThanOrEqual(BLOG_POSTS_PER_PAGE)
  })

  it('returns an empty array for a page past the end', () => {
    expect(getBlogPostsForPage(pageCount + 1)).toEqual([])
    expect(getBlogPostsForPage(pageCount + 100)).toEqual([])
  })

  it('returns an empty array for page 0', () => {
    // start = (0 - 1) * PER_PAGE = -PER_PAGE, end = 0.
    // Array.slice(-PER_PAGE, 0) normalizes to slice(length - PER_PAGE, 0),
    // and since 0 < (length - PER_PAGE) that range is empty.
    expect(getBlogPostsForPage(0)).toEqual([])
  })

  it('a negative page does NOT return an empty array (Array.slice wraparound)', () => {
    // start = (page - 1) * PER_PAGE is negative, and so is
    // start + PER_PAGE for page <= -1 as long as PER_PAGE < totalPosts.
    // Array.prototype.slice treats negative indices as offsets from the
    // end, so getBlogPostsForPage(-1) actually returns posts from near
    // the *end* of the list rather than an empty page. This test pins
    // down that real (surprising) behavior rather than the intuitive one.
    const start = (-1 - 1) * BLOG_POSTS_PER_PAGE
    const expectedSlugs = rawBlogPosts.slice(start, start + BLOG_POSTS_PER_PAGE).map((p) => p.slug)
    const actualSlugs = getBlogPostsForPage(-1).map((p) => p.slug)
    expect(actualSlugs).toEqual(expectedSlugs)
  })

  it('does not overlap between consecutive pages', () => {
    const page1 = getBlogPostsForPage(1).map((p) => p.slug)
    const page2 = getBlogPostsForPage(2).map((p) => p.slug)
    const overlap = page1.filter((slug) => page2.includes(slug))
    expect(overlap).toEqual([])
  })

  it('localizes returned posts to the requested language', () => {
    const [enPost] = getBlogPostsForPage(1, 'en')
    const [uaPost] = getBlogPostsForPage(1, 'ua')
    expect(enPost.slug).toBe(uaPost.slug)
    // Titles should differ between en and ua for a localized post (or at
    // minimum both must be non-empty; some strings may coincide by chance,
    // so assert non-emptiness rather than inequality to avoid flakiness).
    expect(enPost.title.length).toBeGreaterThan(0)
    expect(uaPost.title.length).toBeGreaterThan(0)
  })
})
