import { LOCALE_TAGS, withLangPrefix, type Language } from '@/lib/i18n'

const BASE_URL = 'https://vynnychenko.dev'

export function getLanguageAlternates(pathWithoutLang: string) {
  const en = `${BASE_URL}${withLangPrefix('en', pathWithoutLang)}`
  const ua = `${BASE_URL}${withLangPrefix('ua', pathWithoutLang)}`
  const de = `${BASE_URL}${withLangPrefix('de', pathWithoutLang)}`
  const fr = `${BASE_URL}${withLangPrefix('fr', pathWithoutLang)}`

  return {
    en,
    [LOCALE_TAGS.en]: en,
    [LOCALE_TAGS.ua]: ua,
    de,
    [LOCALE_TAGS.de]: de,
    fr,
    [LOCALE_TAGS.fr]: fr,
    'x-default': en,
  }
}

export function getPageAlternates(pathWithoutLang: string, lang: Language) {
  const canonicalPath = withLangPrefix(lang, pathWithoutLang)

  return {
    canonical: `${BASE_URL}${canonicalPath}`,
    languages: getLanguageAlternates(pathWithoutLang),
  }
}

export function getBlogPostAlternates(slug: string, lang: Language) {
  return getPageAlternates(`/blog/${slug}/`, lang)
}

export function getBlogIndexAlternates(lang: Language, page = 1) {
  const path = page === 1 ? '/blog/' : `/blog/page/${page}/`
  return getPageAlternates(path, lang)
}
