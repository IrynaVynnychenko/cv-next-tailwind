import type { Metadata } from 'next'
import { LOCALE_TAGS, withLangPrefix, type Language } from '@/lib/i18n'
import { BASE_URL } from '@/lib/site'

export { BASE_URL }

export const SITE_OG_IMAGE_PATH = '/images/profile-photo.jpg'
export const SITE_OG_IMAGE_URL = `${BASE_URL}${SITE_OG_IMAGE_PATH}`

const OG_LOCALES: Record<Language, string> = {
  en: 'en_US',
  ua: 'uk_UA',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  it: 'it_IT',
  tr: 'tr_TR',
}

export function getOgLocale(lang: Language) {
  return OG_LOCALES[lang]
}

export function getOpenGraphImages(alt = 'Iryna Vynnychenko') {
  return [
    {
      url: SITE_OG_IMAGE_PATH,
      width: 1024,
      height: 768,
      alt,
      type: 'image/jpeg',
    },
  ]
}

export function getTwitterImageMetadata(alt = 'Iryna Vynnychenko'): NonNullable<Metadata['twitter']> {
  return {
    card: 'summary_large_image',
    images: [{ url: SITE_OG_IMAGE_PATH, alt }],
  }
}

export function getLanguageAlternates(pathWithoutLang: string) {
  const en = `${BASE_URL}${withLangPrefix('en', pathWithoutLang)}`
  const ua = `${BASE_URL}${withLangPrefix('ua', pathWithoutLang)}`
  const de = `${BASE_URL}${withLangPrefix('de', pathWithoutLang)}`
  const fr = `${BASE_URL}${withLangPrefix('fr', pathWithoutLang)}`
  const es = `${BASE_URL}${withLangPrefix('es', pathWithoutLang)}`
  const it = `${BASE_URL}${withLangPrefix('it', pathWithoutLang)}`
  const tr = `${BASE_URL}${withLangPrefix('tr', pathWithoutLang)}`

  return {
    en,
    [LOCALE_TAGS.en]: en,
    [LOCALE_TAGS.ua]: ua,
    de,
    [LOCALE_TAGS.de]: de,
    fr,
    [LOCALE_TAGS.fr]: fr,
    es,
    [LOCALE_TAGS.es]: es,
    it,
    [LOCALE_TAGS.it]: it,
    tr,
    [LOCALE_TAGS.tr]: tr,
    'x-default': en,
  }
}

export function getPageAlternates(pathWithoutLang: string, lang: Language) {
  const canonicalPath = withLangPrefix(lang, pathWithoutLang)

  return {
    canonical: `${BASE_URL}${canonicalPath}`,
    languages: getLanguageAlternates(pathWithoutLang),
    types: {
      'application/rss+xml': `${BASE_URL}/rss.xml`,
    },
  }
}

export function getBlogPostAlternates(slug: string, lang: Language) {
  return getPageAlternates(`/blog/${slug}/`, lang)
}

export function getBlogIndexAlternates(lang: Language, page = 1) {
  const path = page === 1 ? '/blog/' : `/blog/page/${page}/`
  return getPageAlternates(path, lang)
}
