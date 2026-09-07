import { describe, expect, it } from 'vitest'
import { buildLlmsFullTxt, buildLlmsTxt, buildRssXml } from '@/lib/geo-feeds'
import { getAllBlogPosts } from '@/data/blog-posts'
import { AUTHOR_NAME, BASE_URL, CONTACT_EMAIL } from '@/lib/site'

describe('buildLlmsTxt', () => {
  const txt = buildLlmsTxt()

  it('starts with the author name as an H1', () => {
    expect(txt.startsWith(`# ${AUTHOR_NAME.en}`)).toBe(true)
  })

  it('includes identity details (email, site, profiles)', () => {
    expect(txt).toContain(`Email: ${CONTACT_EMAIL}`)
    expect(txt).toContain(`Site: ${BASE_URL}`)
  })

  it('links to the key localized homepages', () => {
    expect(txt).toContain(`${BASE_URL}/ua/`)
    expect(txt).toContain(`${BASE_URL}/de/`)
    expect(txt).toContain(`${BASE_URL}/tr/`)
  })

  it('references the full article index and RSS feed', () => {
    expect(txt).toContain(`${BASE_URL}/llms-full.txt`)
    expect(txt).toContain(`${BASE_URL}/rss.xml`)
  })
})

describe('buildLlmsFullTxt', () => {
  const txt = buildLlmsFullTxt()
  const posts = getAllBlogPosts('en')

  it('lists every blog post as a markdown link with its date', () => {
    for (const post of posts) {
      expect(txt).toContain(`(${BASE_URL}/blog/${post.slug}/)`)
      expect(txt).toContain(`(${post.date})`)
    }
  })

  it('points back to llms.txt for identity/services', () => {
    expect(txt).toContain(`${BASE_URL}/llms.txt`)
  })
})

describe('buildRssXml', () => {
  const xml = buildRssXml()
  const posts = getAllBlogPosts('en')

  it('produces a well-formed RSS 2.0 document shell', () => {
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true)
    expect(xml).toContain('<rss version="2.0"')
    expect(xml).toContain('</rss>')
  })

  it('includes one <item> per blog post', () => {
    const itemCount = (xml.match(/<item>/g) || []).length
    expect(itemCount).toBe(posts.length)
  })

  it('escapes XML-significant characters in titles/descriptions', () => {
    // Every post link should be a well-formed absolute URL, and no raw
    // un-escaped ampersand should appear directly inside a title/description
    // (a bare "&" not part of an entity would indicate a missing xmlEscape).
    const rawAmpersand = /&(?!amp;|lt;|gt;|quot;|#)/
    expect(rawAmpersand.test(xml)).toBe(false)
  })

  it('links each item to its absolute canonical blog post URL', () => {
    for (const post of posts) {
      expect(xml).toContain(`<link>${BASE_URL}/blog/${post.slug}/</link>`)
    }
  })
})
