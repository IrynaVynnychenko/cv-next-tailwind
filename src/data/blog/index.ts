import { getBlogIndexPath } from '@/lib/i18n'
import type { BlogLang, BlogPost, LocalizedText, RawBlogPost } from './types'
import { aiLlmPosts } from './posts-ai-llm'
import { businessPosts } from './posts-business'
import { engineeringPosts } from './posts-engineering'
import { itRoleBlogPosts } from './posts-it-roles'
import { socialPosts } from './posts-social'
import { telegramExamplePosts } from './posts-telegram-examples'
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
  ...aiLlmPosts,
  ...telegramPosts,
  ...telegramExamplePosts,
  ...socialPosts,
  ...engineeringPosts,
  ...businessPosts,
  ...itRoleBlogPosts,
]

const postsBySlug = new Map(ALL_POSTS.map((post) => [post.slug, post]))

/** Display / pagination order. Prepend a slug here when adding a new post. */
const SLUG_ORDER = [
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

export const blogPosts: BlogPost[] = rawBlogPosts.map((raw) => getBlogPost(raw.slug, 'en')!)
