export type Language = 'en' | 'ua' | 'de' | 'fr'

export const LANGUAGES: Language[] = ['en', 'ua', 'de', 'fr']

export const LOCALE_TAGS: Record<Language, string> = {
  en: 'en-US',
  ua: 'uk-UA',
  de: 'de-DE',
  fr: 'fr-FR',
}

export const LANG_PREFIX: Record<Language, string> = {
  en: '',
  ua: '/ua',
  de: '/de',
  fr: '/fr',
}

export function getLangFromPath(pathname: string): Language {
  for (const lang of LANGUAGES) {
    const prefix = LANG_PREFIX[lang]
    if (!prefix) continue
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return lang
  }
  return 'en'
}

export function stripLangPrefix(pathname: string): string {
  const lang = getLangFromPath(pathname)
  const prefix = LANG_PREFIX[lang]
  let clean = prefix && pathname.startsWith(prefix) ? pathname.slice(prefix.length) : pathname
  if (!clean.startsWith('/')) clean = `/${clean}`
  return clean === '' ? '/' : clean
}

export function withLangPrefix(lang: Language, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  const prefix = LANG_PREFIX[lang]
  if (!prefix) return normalized === '/' ? '/' : normalized
  return normalized === '/' ? `${prefix}/` : `${prefix}${normalized}`
}

export function getEquivalentPath(targetLang: Language, currentPath: string): string {
  return withLangPrefix(targetLang, stripLangPrefix(currentPath))
}

export function getHomePath(lang: Language): string {
  return withLangPrefix(lang, '/')
}

export function getBlogIndexPath(lang: Language, page = 1): string {
  if (page <= 1) return withLangPrefix(lang, '/blog/')
  return withLangPrefix(lang, `/blog/page/${page}/`)
}

export function getBlogPostPath(lang: Language, slug: string): string {
  return withLangPrefix(lang, `/blog/${slug}/`)
}

export function pickLocalized<T extends Partial<Record<Language, string>> & { en: string }>(
  value: T,
  lang: Language
): string {
  return value[lang] || value.en
}
