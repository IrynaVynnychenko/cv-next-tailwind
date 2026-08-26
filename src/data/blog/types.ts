import type { Language } from '@/lib/i18n'

export type BlogSection = {
  heading?: string
  paragraphs: string[]
  list?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  updated: string
  readTime: string
  tags: string[]
  content: BlogSection[]
}

export type LocalizedText = {
  en: string
  ua: string
  de?: string
  fr?: string
  es?: string
  it?: string
  tr?: string
}

export type LocalizedSection = {
  heading?: LocalizedText
  paragraphs: LocalizedText[]
  list?: LocalizedText[]
}

export type RawBlogPost = {
  slug: string
  date: string
  updated?: string
  title: LocalizedText
  excerpt: LocalizedText
  readTime: LocalizedText
  tags: { en: string[]; ua: string[]; de?: string[]; fr?: string[]; es?: string[]; it?: string[]; tr?: string[] }
  content: LocalizedSection[]
}

export type BlogLang = Language
