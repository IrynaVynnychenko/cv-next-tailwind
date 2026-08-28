import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { getAllBlogPosts } from '@/data/blog-posts'
import { EXPERIENCE_PATH } from '@/data/experience-page'
import { CONTACTS_PATH } from '@/data/contacts-page'
import { SERVICE_ORDER, services } from '@/data/services'
import { chrome } from '@/data/chrome'
import { withLangPrefix } from '@/lib/i18n'
import { AUTHOR_JOB_TITLE, AUTHOR_NAME, BASE_URL, CONTACT_EMAIL, SAME_AS } from '@/lib/site'
import { getBlogPostModified } from '@/lib/blog-seo'

const SELECTED_SLUGS = [
  'pixijs-animated-game-nextjs',
  'threejs-product-scene-nextjs',
  'geo-chatgpt-citations-for-business-2026',
  'what-is-seo-and-why-it-matters',
  'what-is-telegram-mini-app',
  'why-even-smallest-business-needs-website-2026',
  'website-for-smb-business-benefits',
  'ai-agent-vs-chatbot-for-small-business',
  'what-is-an-llm-in-business',
  'how-i-build-mvp-and-choose-tech-stack',
  'core-web-vitals-and-revenue',
  'working-with-freelance-web-developer',
  'telegram-mini-app-product-patterns-2026',
  'accept-payments-on-website-2026',
]

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function absolute(pathWithoutLang: string): string {
  return `${BASE_URL}${withLangPrefix('en', pathWithoutLang)}`
}

export function buildLlmsTxt(): string {
  const posts = getAllBlogPosts('en')
  const bySlug = new Map(posts.map((post) => [post.slug, post]))
  const selected = SELECTED_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (post): post is NonNullable<typeof post> => Boolean(post)
  )

  const serviceLines = SERVICE_ORDER.map((id) => {
    const service = services[id]
    return `- [${service.cardTitle.en}](${absolute(service.path)}): ${service.lead.en}`
  })

  const articleLines = selected.map(
    (post) => `- [${post.title}](${absolute(`/blog/${post.slug}/`)}): ${post.excerpt}`
  )

  return `# ${AUTHOR_NAME.en}

> ${chrome.en.heroAnswer}

${AUTHOR_NAME.en} (${AUTHOR_NAME.ua}) is a ${AUTHOR_JOB_TITLE.en} in Kyiv, Ukraine. ${chrome.en.heroAvailability}.

## Identity

- Name: ${AUTHOR_NAME.en} / ${AUTHOR_NAME.ua}
- Role: ${AUTHOR_JOB_TITLE.en}
- Location: Kyiv, Ukraine
- Site: ${BASE_URL}
- Email: ${CONTACT_EMAIL}
- Profiles: ${SAME_AS.join(', ')}

## Services

${serviceLines.join('\n')}

## Key pages

- [Home](${BASE_URL}/)
- [Experience](${absolute(EXPERIENCE_PATH)})
- [Contacts](${absolute(CONTACTS_PATH)})
- [Blog](${absolute('/blog/')})
- Ukrainian: ${BASE_URL}/ua/
- German: ${BASE_URL}/de/
- French: ${BASE_URL}/fr/
- Spanish: ${BASE_URL}/es/
- Italian: ${BASE_URL}/it/
- Turkish: ${BASE_URL}/tr/

## Selected writing

${articleLines.join('\n')}

Full article list: ${BASE_URL}/llms-full.txt
RSS: ${BASE_URL}/rss.xml
`
}

export function buildLlmsFullTxt(): string {
  const posts = getAllBlogPosts('en')
  const lines = posts.map(
    (post) => `- [${post.title}](${absolute(`/blog/${post.slug}/`)}) (${post.date}): ${post.excerpt}`
  )

  return `# ${AUTHOR_NAME.en} — full writing index

> ${chrome.en.heroAnswer}

See ${BASE_URL}/llms.txt for identity and services.

## All articles

${lines.join('\n')}
`
}

export function buildRssXml(): string {
  const posts = getAllBlogPosts('en')
  const newest = posts.reduce((acc, post) => {
    const modified = getBlogPostModified(post)
    return modified > acc ? modified : acc
  }, posts[0]?.date ?? '2026-01-01')

  const items = posts
    .slice()
    .sort((a, b) => getBlogPostModified(b).localeCompare(getBlogPostModified(a)))
    .map((post) => {
      const url = absolute(`/blog/${post.slug}/`)
      return `    <item>
      <title>${xmlEscape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${xmlEscape(post.excerpt)}</description>
      <dc:creator>${xmlEscape(AUTHOR_NAME.en)}</dc:creator>
      <category>${post.tags.map(xmlEscape).join('</category><category>')}</category>
    </item>`
    })

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${xmlEscape(`${AUTHOR_NAME.en} — ${AUTHOR_JOB_TITLE.en}`)}</title>
    <link>${BASE_URL}/blog/</link>
    <description>${xmlEscape(chrome.en.heroAnswer)}</description>
    <language>en</language>
    <lastBuildDate>${new Date(`${newest}T00:00:00Z`).toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${items.join('\n')}
  </channel>
</rss>
`
}

export function writeGeoFeeds() {
  const dir = path.join(process.cwd(), 'public')
  writeFileSync(path.join(dir, 'llms.txt'), buildLlmsTxt())
  writeFileSync(path.join(dir, 'llms-full.txt'), buildLlmsFullTxt())
  writeFileSync(path.join(dir, 'rss.xml'), buildRssXml())
}
