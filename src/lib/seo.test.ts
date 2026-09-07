import { describe, expect, it } from 'vitest'
import {
  getBlogIndexAlternates,
  getLanguageAlternates,
  getOgLocale,
  getPageAlternates,
} from '@/lib/seo'
import { BASE_URL } from '@/lib/site'
import { LANGUAGES, LOCALE_TAGS } from '@/lib/i18n'

describe('getOgLocale', () => {
  it('maps every supported language to a BCP-47-ish OG locale', () => {
    expect(getOgLocale('en')).toBe('en_US')
    expect(getOgLocale('ua')).toBe('uk_UA')
    expect(getOgLocale('de')).toBe('de_DE')
    expect(getOgLocale('fr')).toBe('fr_FR')
    expect(getOgLocale('es')).toBe('es_ES')
    expect(getOgLocale('it')).toBe('it_IT')
    expect(getOgLocale('tr')).toBe('tr_TR')
  })
})

describe('getLanguageAlternates', () => {
  const alternates = getLanguageAlternates('/blog/hello/')

  it('builds an absolute canonical-style URL for every locale that has a bare key', () => {
    // Every language except `ua` gets a bare key (e.g. `de`) in addition to
    // its hreflang locale-tag key (e.g. `de-DE`); `ua` is only reachable via
    // its locale tag (`uk-UA`). This pins down that actual (asymmetric) shape.
    expect(alternates.en).toBe(`${BASE_URL}/blog/hello/`)
    expect(alternates.de).toBe(`${BASE_URL}/de/blog/hello/`)
    expect(alternates.fr).toBe(`${BASE_URL}/fr/blog/hello/`)
    expect(alternates.es).toBe(`${BASE_URL}/es/blog/hello/`)
    expect(alternates.it).toBe(`${BASE_URL}/it/blog/hello/`)
    expect(alternates.tr).toBe(`${BASE_URL}/tr/blog/hello/`)
  })

  it('has all 7 hreflang locale-tag keys pointing at the right localized URL', () => {
    expect(alternates[LOCALE_TAGS.en]).toBe(`${BASE_URL}/blog/hello/`)
    expect(alternates[LOCALE_TAGS.ua]).toBe(`${BASE_URL}/ua/blog/hello/`)
    expect(alternates[LOCALE_TAGS.de]).toBe(`${BASE_URL}/de/blog/hello/`)
    expect(alternates[LOCALE_TAGS.fr]).toBe(`${BASE_URL}/fr/blog/hello/`)
    expect(alternates[LOCALE_TAGS.es]).toBe(`${BASE_URL}/es/blog/hello/`)
    expect(alternates[LOCALE_TAGS.it]).toBe(`${BASE_URL}/it/blog/hello/`)
    expect(alternates[LOCALE_TAGS.tr]).toBe(`${BASE_URL}/tr/blog/hello/`)
  })

  it('has exactly 7 locale hreflang tags, 6 bare-language keys, and x-default', () => {
    const keys = Object.keys(alternates)
    // en/de/fr/es/it/tr each get a bare key + a locale-tag key (12), `ua`
    // gets only its locale-tag key (1), plus x-default = 14.
    expect(keys.length).toBe((LANGUAGES.length - 1) * 2 + 1 + 1)
  })

  it('points x-default at the English URL', () => {
    expect(alternates['x-default']).toBe(alternates.en)
  })
})

describe('getPageAlternates', () => {
  it('builds a canonical URL using the requested language prefix', () => {
    const result = getPageAlternates('/experience/', 'es')
    expect(result.canonical).toBe(`${BASE_URL}/es/experience/`)
  })

  it('builds an unprefixed canonical URL for en', () => {
    const result = getPageAlternates('/experience/', 'en')
    expect(result.canonical).toBe(`${BASE_URL}/experience/`)
  })

  it('includes the full language alternates map regardless of requested language', () => {
    const result = getPageAlternates('/experience/', 'tr')
    expect(result.languages.en).toBe(`${BASE_URL}/experience/`)
    expect(result.languages['x-default']).toBe(`${BASE_URL}/experience/`)
  })

  it('includes an RSS feed type pointing at the site-wide feed', () => {
    const result = getPageAlternates('/experience/', 'en')
    expect(result.types['application/rss+xml']).toBe(`${BASE_URL}/rss.xml`)
  })
})

describe('getBlogIndexAlternates', () => {
  it('defaults to the un-paginated blog index canonical URL', () => {
    const result = getBlogIndexAlternates('en')
    expect(result.canonical).toBe(`${BASE_URL}/blog/`)
  })

  it('builds a paginated canonical URL for page > 1', () => {
    const result = getBlogIndexAlternates('en', 2)
    expect(result.canonical).toBe(`${BASE_URL}/blog/page/2/`)
  })

  it('applies both the language prefix and pagination together', () => {
    const result = getBlogIndexAlternates('de', 3)
    expect(result.canonical).toBe(`${BASE_URL}/de/blog/page/3/`)
  })
})
