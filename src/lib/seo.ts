const BASE_URL = 'https://vynnychenko.dev'

export function getLanguageAlternates(enPath: string, uaPath: string) {
  return {
    en: `${BASE_URL}${enPath}`,
    'en-US': `${BASE_URL}${enPath}`,
    'uk-UA': `${BASE_URL}${uaPath}`,
    'x-default': `${BASE_URL}${enPath}`,
  }
}

export function getPageAlternates(enPath: string, uaPath: string, canonicalPath: string) {
  return {
    canonical: `${BASE_URL}${canonicalPath}`,
    languages: getLanguageAlternates(enPath, uaPath),
  }
}

export function getBlogPostAlternates(slug: string, lang: 'en' | 'ua') {
  const enPath = `/blog/${slug}/`
  const uaPath = `/ua/blog/${slug}/`
  const canonicalPath = lang === 'ua' ? uaPath : enPath

  return getPageAlternates(enPath, uaPath, canonicalPath)
}

export function getBlogIndexAlternates(lang: 'en' | 'ua', page = 1) {
  const enPath = page === 1 ? '/blog/' : `/blog/page/${page}/`
  const uaPath = page === 1 ? '/ua/blog/' : `/ua/blog/page/${page}/`
  const canonicalPath = lang === 'ua' ? uaPath : enPath

  return getPageAlternates(enPath, uaPath, canonicalPath)
}
