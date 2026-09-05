import { getBlogIndexPath } from '@/lib/i18n'
import { getServiceIdForSlug, services } from '@/data/services'
import type { BlogLang, BlogPost, LocalizedText, RawBlogPost } from './types'
import { aiLlmPosts } from './posts-ai-llm'
import { pythonLlmPosts } from './posts-python-llm'
import { productAiPosts } from './posts-product-ai'
import { businessPosts } from './posts-business'
import { mcpPosts } from './posts-mcp'
import { databasePosts } from './posts-databases'
import { sqlPythonPosts } from './posts-sql-python'
import { engineeringPosts } from './posts-engineering'
import { graphicsPosts } from './posts-graphics'
import { pixiJsPosts } from './posts-pixi'
import { threeJsPosts } from './posts-three'
import { itRoleBlogPosts } from './posts-it-roles'
import { socialPosts } from './posts-social'
import { telegramExamplePosts } from './posts-telegram-examples'
import { telegramMiniAppIdeaPosts } from './posts-telegram-mini-app-ideas'
import { telegramMiniAppPosts } from './posts-telegram-mini-app'
import { telegramPosts } from './posts-telegram'

export type {
  BlogLang,
  BlogPost,
  BlogSection,
  LocalizedSection,
  LocalizedText,
  RawBlogPost,
} from './types'

const ALL_POSTS: RawBlogPost[] = [
  ...productAiPosts,
  ...pythonLlmPosts,
  ...mcpPosts,
  ...aiLlmPosts,
  ...telegramPosts,
  ...telegramMiniAppPosts,
  ...telegramMiniAppIdeaPosts,
  ...telegramExamplePosts,
  ...socialPosts,
  ...engineeringPosts,
  ...pixiJsPosts,
  ...threeJsPosts,
  ...graphicsPosts,
  ...databasePosts,
  ...sqlPythonPosts,
  ...businessPosts,
  ...itRoleBlogPosts,
]

const postsBySlug = new Map(ALL_POSTS.map((post) => [post.slug, post]))

/** Display / pagination order. Prepend a slug here when adding a new post. */
const SLUG_ORDER = [
  'sql-window-functions-instead-of-python-loops',
  'python-postgres-stop-pulling-the-table',
  'frontend-fullstack-beside-ai-backend-2026',
  'ai-engineer-python-langgraph-rag-demand-2026',
  'fullstack-python-react-llm-demand-2026',
  'pixijs-animated-game-nextjs',
  'threejs-product-scene-nextjs',
  'what-is-mcp-for-small-business-2026',
  'what-to-do-when-chatgpt-goes-down',
  'why-use-threejs-and-pixijs',
  'what-is-seo-and-why-it-matters',
  'telegram-mini-app-exclusive-drop-example',
  'telegram-mini-app-team-kanban-example',
  'telegram-mini-app-product-patterns-2026',
  'telegram-mini-app-group-expense-split-example',
  'telegram-mini-app-and-pwa-same-codebase',
  'geo-chatgpt-citations-for-business-2026',
  'ai-agent-vs-chatbot-for-small-business',
  'nextjs-16-3-instant-navigations-agents',
  'what-is-telegram-mini-app',
  'types-of-databases-when-to-use',
  'website-administrator-for-small-business',
  'what-is-an-llm-provider',
  'what-is-an-llm-in-business',
  'accept-payments-on-website-2026',
  'why-even-smallest-business-needs-website-2026',
  'social-media-by-country-2026',
  'telegram-bots-with-payments-business-examples',
  'telegram-bot-online-course-payments-example',
  'telegram-bot-booking-prepayment-example',
  'telegram-bot-online-shop-payments-example',
  'telegram-bot-subscription-payments-example',
  'website-for-smb-business-benefits',
  'how-i-would-build-a-saas',
  'how-i-build-mvp-and-choose-tech-stack',
  'what-is-vibe-coding',
  'it-roles-map-who-does-what-2026',
  'frontend-developer-role-guide',
  'backend-developer-role-guide',
  'fullstack-developer-role-guide',
  'mobile-developer-role-guide',
  'devops-engineer-role-guide',
  'qa-engineer-role-guide',
  'ui-ux-designer-role-guide',
  'product-manager-role-guide',
  'project-manager-role-guide',
  'business-analyst-role-guide',
  'data-analyst-role-guide',
  'data-engineer-role-guide',
  'data-scientist-ml-engineer-role-guide',
  'ai-engineer-role-guide',
  'cybersecurity-specialist-role-guide',
  'system-administrator-role-guide',
  'cloud-engineer-role-guide',
  'sre-role-guide',
  'software-architect-role-guide',
  'tech-lead-engineering-manager-role-guide',
  'scrum-master-role-guide',
  'database-administrator-role-guide',
  'blockchain-web3-developer-role-guide',
  'technical-support-engineer-role-guide',
  'technical-writer-role-guide',
  'network-engineer-role-guide',
  'embedded-iot-engineer-role-guide',
  'cto-vp-engineering-role-guide',
  'outdated-ui-losing-customers-safe-redesign',
  'developer-to-project-manager-career-path',
  'vps-vs-aws-hosting-comparison',
  'what-is-llm-business-value-cost-comparison',
  'ai-chatbot-business-automation-utility-payments',
  'ai-solutions-for-business-process-automation-guide',
  'implementing-ai-solutions-for-smb-growth-2026',
  'telegram-mini-app-development-services-complete-guide',
  'choosing-telegram-mini-app-development-company',
  'telegram-bot-payment-integration-guide',
  'what-is-web-application-modern-guide',
  'frontend-engineering-trends-2026',
  'maximizing-ai-value-marketing-sales-management',
  'google-maps-api-customization-guide',
  'how-to-process-5x-more-orders-without-expanding-staff',
  'why-vercel-vercel-analytics-dominate-web-development-2026',
  'behavioral-analytics-ai-microinteractions-ux-feedback-collector',
  'ai-calculator-b2b-estimator-structured-json-react',
  'dynamic-landing-pages-ai-copy-adapt-cls-prevention',
  'why-your-business-needs-site-search-in-2026',
  'online-calculator-lead-generator-website-telegram',
  'upwork-solo-developer-vs-agency-trend-2026',
  'lazy-lead-phenomenon-2026-attraction-strategies',
  'benefits-of-using-upwork-for-foreign-clients',
  'prompt-engineering-for-developers-guide',
  'integrating-ai-chatbots-streaming-nextjs',
  'telegram-bot-web-app-food-delivery-guide',
  'why-you-need-fast-simple-website-or-blog',
  'telegram-mini-apps-fintech-development-guide',
  'what-aws-knowledge-means-for-frontend-developer',
  'how-ai-transforms-email-marketing-and-development',
  'frontend-developer-value-for-backend-ml-llm',
  'local-first-web-applications-future-of-ux',
  'optimizing-service-business-with-web-solutions',
  'telegram-bots-utility-service-payments-integration',
  'how-to-automate-business-processes-with-ai',
  'how-to-contact-me-and-ordering-options',
  'multicultural-client-collaboration-and-communication',
  'figma-to-code-hiring-guide',
  'common-mistakes-in-web-platform-development',
  'scalable-nextjs-typescript-architecture',
  'from-design-mockup-to-production-quality',
  'refactoring-legacy-ui-without-downtime',
  'online-booking-system-benefits-2026',
  'how-to-increase-course-sales-2026',
  'why-cosmetologist-needs-website-2026',
  'mobile-first-approach-explained',
  'when-business-needs-a-website',
  'why-your-business-needs-a-website',
  'how-to-find-web-developer',
  'why-your-business-needs-nextjs',
  'how-to-choose-frontend-developer',
  'core-web-vitals-and-revenue',
  'react-vs-wordpress-for-business',
  'working-with-freelance-web-developer',
] as const

export const rawBlogPosts: RawBlogPost[] = SLUG_ORDER.map((slug) => {
  const post = postsBySlug.get(slug)
  if (!post) throw new Error(`Missing blog post: ${slug}`)
  return post
})

if (postsBySlug.size !== SLUG_ORDER.length) {
  const ordered = new Set<string>(SLUG_ORDER)
  const extra = Array.from(postsBySlug.keys()).filter((slug) => !ordered.has(slug))
  throw new Error(`Blog posts missing from SLUG_ORDER: ${extra.join(', ')}`)
}

function pickText(value: LocalizedText, lang: BlogLang): string {
  return value[lang] || value.en
}

export function getBlogPost(slug: string, lang: BlogLang = 'en'): BlogPost | undefined {
  const raw = rawBlogPosts.find((post) => post.slug === slug)
  if (!raw) return undefined

  return {
    slug: raw.slug,
    date: raw.date,
    updated: raw.updated || raw.date,
    title: pickText(raw.title, lang),
    excerpt: pickText(raw.excerpt, lang),
    readTime: pickText(raw.readTime, lang),
    tags: raw.tags[lang] || raw.tags.en,
    content: raw.content.map((sec) => ({
      heading: sec.heading ? pickText(sec.heading, lang) : undefined,
      paragraphs: sec.paragraphs.map((p) => pickText(p, lang)),
      list: sec.list ? sec.list.map((l) => pickText(l, lang)) : undefined,
    })),
  }
}

export const BLOG_POSTS_PER_PAGE = 4

export function getBlogPageCount(): number {
  return Math.ceil(rawBlogPosts.length / BLOG_POSTS_PER_PAGE)
}

export function getBlogPostsForPage(page: number, lang: BlogLang = 'en'): BlogPost[] {
  const start = (page - 1) * BLOG_POSTS_PER_PAGE
  return rawBlogPosts.slice(start, start + BLOG_POSTS_PER_PAGE).map((raw) => getBlogPost(raw.slug, lang)!)
}

export function getAllBlogPosts(lang: BlogLang = 'en'): BlogPost[] {
  return rawBlogPosts.map((raw) => getBlogPost(raw.slug, lang)!)
}

export function getBlogPagePath(page: number, lang: BlogLang = "en"): string {
  return getBlogIndexPath(lang, page)
}

export function getAllBlogSlugs(): string[] {
  return rawBlogPosts.map((post) => post.slug)
}

const RELATED_LIMIT = 3

function englishTags(post: RawBlogPost): Set<string> {
  return new Set(post.tags.en.map((tag) => tag.toLowerCase()))
}

function slugTokenOverlap(a: string, b: string): number {
  const tokens = (slug: string) => new Set(slug.split('-').filter((token) => token.length > 2))
  const left = tokens(a)
  let count = 0
  for (const token of tokens(b)) {
    if (left.has(token)) count += 1
  }
  return count
}

export function getRelatedPosts(slug: string, lang: BlogLang = 'en', limit = RELATED_LIMIT): BlogPost[] {
  const current = rawBlogPosts.find((post) => post.slug === slug)
  if (!current) return []

  const serviceId = getServiceIdForSlug(slug)
  const curated = serviceId ? services[serviceId].articles.map((article) => article.slug) : []
  const currentTags = englishTags(current)

  const ranked = rawBlogPosts
    .filter((post) => {
      if (post.slug === slug) return false
      if (!serviceId && getServiceIdForSlug(post.slug)) return false
      return true
    })
    .map((post) => {
      let score = 0
      const otherService = getServiceIdForSlug(post.slug)
      if (serviceId && otherService === serviceId) score += 80

      const curatedIndex = curated.indexOf(post.slug)
      if (curatedIndex >= 0) score += 140 - curatedIndex * 8

      let tagOverlap = 0
      for (const tag of englishTags(post)) {
        if (currentTags.has(tag)) tagOverlap += 1
      }
      score += tagOverlap * 12
      score += slugTokenOverlap(slug, post.slug) * 8

      return { post, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date))

  const picked: RawBlogPost[] = ranked.slice(0, limit).map((entry) => entry.post)
  if (picked.length < limit) {
    const used = new Set(picked.map((post) => post.slug).concat(slug))
    for (const post of rawBlogPosts) {
      if (picked.length >= limit) break
      if (used.has(post.slug)) continue
      picked.push(post)
      used.add(post.slug)
    }
  }

  return picked.map((post) => getBlogPost(post.slug, lang)!)
}

export const blogPosts: BlogPost[] = rawBlogPosts.map((raw) => getBlogPost(raw.slug, 'en')!)
