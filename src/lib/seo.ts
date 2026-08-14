import type { Language } from '@/lib/i18n'

const BASE_URL = 'https://vynnychenko.dev'

export function getLanguageAlternates(enPath: string, uaPath: string, dePath: string) {
  return {
    en: `${BASE_URL}${enPath}`,
    'en-US': `${BASE_URL}${enPath}`,
    'uk-UA': `${BASE_URL}${uaPath}`,
    de: `${BASE_URL}${dePath}`,
    'de-DE': `${BASE_URL}${dePath}`,
    'x-default': `${BASE_URL}${enPath}`,
  }
}

export function getPageAlternates(
  enPath: string,
  uaPath: string,
  canonicalPath: string,
  dePath?: string
) {
  const de = dePath ?? (enPath === '/' ? '/de/' : `/de${enPath}`)

  return {
    canonical: `${BASE_URL}${canonicalPath}`,
    languages: getLanguageAlternates(enPath, uaPath, de),
  }
}

export function getBlogPostAlternates(slug: string, lang: Language) {
  const enPath = `/blog/${slug}/`
  const uaPath = `/ua/blog/${slug}/`
  const dePath = `/de/blog/${slug}/`
  const canonicalPath = lang === 'ua' ? uaPath : lang === 'de' ? dePath : enPath

  return getPageAlternates(enPath, uaPath, canonicalPath, dePath)
}

export function getBlogIndexAlternates(lang: Language, page = 1) {
  const enPath = page === 1 ? '/blog/' : `/blog/page/${page}/`
  const uaPath = page === 1 ? '/ua/blog/' : `/ua/blog/page/${page}/`
  const dePath = page === 1 ? '/de/blog/' : `/de/blog/page/${page}/`
  const canonicalPath = lang === 'ua' ? uaPath : lang === 'de' ? dePath : enPath

  return getPageAlternates(enPath, uaPath, canonicalPath, dePath)
}
