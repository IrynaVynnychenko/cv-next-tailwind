import type { Language } from '@/lib/i18n'

export const BASE_URL = 'https://vynnychenko.dev'

export const CONTACT_EMAIL = 'i.vynnychenko@gmail.com'

export const SOCIAL_PROFILES = {
  linkedin: 'https://www.linkedin.com/in/iryna-vynnychenko-287202141/',
  upwork: 'https://www.upwork.com/freelancers/irynavynnychenko',
  github: 'https://github.com/irynavynnychenko',
} as const

export const SAME_AS = [
  SOCIAL_PROFILES.linkedin,
  SOCIAL_PROFILES.upwork,
  SOCIAL_PROFILES.github,
] as const

/** Crawlers that quote or retrieve pages for AI answers. Allowed explicitly, not only via `*`. */
export const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-User',
  'anthropic-ai',
  'Google-Extended',
  'Google-CloudVertexBot',
  'Applebot-Extended',
  'Amazonbot',
  'CCBot',
  'meta-externalagent',
  'YouBot',
] as const

export const AUTHOR_NAME: Record<Language, string> = {
  en: 'Iryna Vynnychenko',
  ua: 'Ірина Винниченко',
  de: 'Iryna Vynnychenko',
  fr: 'Iryna Vynnychenko',
  es: 'Iryna Vynnychenko',
  it: 'Iryna Vynnychenko',
  tr: 'Iryna Vynnychenko',
}

export const AUTHOR_JOB_TITLE: Record<Language, string> = {
  en: 'Frontend & Full-Stack Engineer',
  ua: 'Frontend і Full-Stack інженерка',
  de: 'Frontend- und Full-Stack-Engineerin',
  fr: 'Ingénieure frontend & full-stack',
  es: 'Ingeniera frontend y full-stack',
  it: 'Ingegnera frontend e full-stack',
  tr: 'Frontend ve Full-Stack mühendisi',
}
