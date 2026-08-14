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
  readTime: string
  tags: string[]
  content: BlogSection[]
}

export type LocalizedText = {
  en: string
  ua: string
  de?: string
  fr?: string
}

export type LocalizedSection = {
  heading?: LocalizedText
  paragraphs: LocalizedText[]
  list?: LocalizedText[]
}

export type RawBlogPost = {
  slug: string
  date: string
  title: LocalizedText
  excerpt: LocalizedText
  readTime: LocalizedText
  tags: { en: string[]; ua: string[]; de?: string[]; fr?: string[] }
  content: LocalizedSection[]
}

export type BlogLang = Language
