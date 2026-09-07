import { describe, expect, it } from 'vitest'
import {
  getBlogIndexPath,
  getBlogPostPath,
  getEquivalentPath,
  getHomePath,
  getLangFromPath,
  pickLocalized,
  stripLangPrefix,
  withLangPrefix,
} from '@/lib/i18n'

describe('getLangFromPath', () => {
  it('falls back to en for the root path', () => {
    expect(getLangFromPath('/')).toBe('en')
  })

  it('falls back to en for an unprefixed path', () => {
    expect(getLangFromPath('/blog/')).toBe('en')
  })

  it('falls back to en for an unknown/unrecognized prefix', () => {
    expect(getLangFromPath('/xx/blog/')).toBe('en')
  })

  it('detects a prefixed language for an exact prefix match', () => {
    expect(getLangFromPath('/ua')).toBe('ua')
  })

  it('detects a prefixed language for a nested path', () => {
    expect(getLangFromPath('/de/blog/some-post/')).toBe('de')
  })

  it('does not false-positive on a path that merely starts with the prefix letters', () => {
    // "/development" should not be mistaken for the "/de" prefix
    expect(getLangFromPath('/development')).toBe('en')
  })
})

describe('stripLangPrefix', () => {
  it('returns / for the bare root path', () => {
    expect(stripLangPrefix('/')).toBe('/')
  })

  it('returns / for a bare language prefix with no trailing slash', () => {
    expect(stripLangPrefix('/fr')).toBe('/')
  })

  it('strips a language prefix from a nested path', () => {
    expect(stripLangPrefix('/es/blog/hello/')).toBe('/blog/hello/')
  })

  it('is a no-op for an already-unprefixed (en) path', () => {
    expect(stripLangPrefix('/blog/hello/')).toBe('/blog/hello/')
  })
})

describe('withLangPrefix', () => {
  it('leaves en paths unprefixed', () => {
    expect(withLangPrefix('en', '/blog/')).toBe('/blog/')
  })

  it('returns / for en root', () => {
    expect(withLangPrefix('en', '/')).toBe('/')
  })

  it('prefixes root path as /<lang>/', () => {
    expect(withLangPrefix('it', '/')).toBe('/it/')
  })

  it('prefixes a nested path without duplicating slashes', () => {
    expect(withLangPrefix('tr', '/blog/hello/')).toBe('/tr/blog/hello/')
  })

  it('normalizes a path missing its leading slash', () => {
    expect(withLangPrefix('de', 'blog/hello/')).toBe('/de/blog/hello/')
  })
})

describe('getEquivalentPath', () => {
  it('round-trips a prefixed path to a different language', () => {
    expect(getEquivalentPath('ua', '/de/blog/hello/')).toBe('/ua/blog/hello/')
  })

  it('round-trips from en (unprefixed) to a prefixed language', () => {
    expect(getEquivalentPath('fr', '/blog/hello/')).toBe('/fr/blog/hello/')
  })

  it('round-trips back to en, dropping the prefix', () => {
    expect(getEquivalentPath('en', '/es/blog/hello/')).toBe('/blog/hello/')
  })

  it('handles the root path in both directions', () => {
    expect(getEquivalentPath('tr', '/')).toBe('/tr/')
    expect(getEquivalentPath('en', '/tr/')).toBe('/')
  })
})

describe('getHomePath', () => {
  it('returns / for en', () => {
    expect(getHomePath('en')).toBe('/')
  })

  it('returns /<lang>/ for other languages', () => {
    expect(getHomePath('ua')).toBe('/ua/')
  })
})

describe('getBlogIndexPath', () => {
  it('defaults to page 1 -> /blog/', () => {
    expect(getBlogIndexPath('en')).toBe('/blog/')
  })

  it('treats page 1 explicitly the same as the default', () => {
    expect(getBlogIndexPath('en', 1)).toBe('/blog/')
  })

  it('treats page 0 and negative pages as page 1', () => {
    expect(getBlogIndexPath('en', 0)).toBe('/blog/')
    expect(getBlogIndexPath('en', -3)).toBe('/blog/')
  })

  it('builds a /blog/page/N/ path for page > 1', () => {
    expect(getBlogIndexPath('en', 2)).toBe('/blog/page/2/')
  })

  it('applies the language prefix for non-en locales', () => {
    expect(getBlogIndexPath('de', 3)).toBe('/de/blog/page/3/')
    expect(getBlogIndexPath('de')).toBe('/de/blog/')
  })
})

describe('getBlogPostPath', () => {
  it('builds an unprefixed path for en', () => {
    expect(getBlogPostPath('en', 'my-post')).toBe('/blog/my-post/')
  })

  it('builds a prefixed path for other locales', () => {
    expect(getBlogPostPath('it', 'my-post')).toBe('/it/blog/my-post/')
  })
})

describe('pickLocalized', () => {
  it('returns the localized value when present', () => {
    expect(pickLocalized({ en: 'Hello', ua: 'Привіт' }, 'ua')).toBe('Привіт')
  })

  it('falls back to en when the requested locale is missing', () => {
    expect(pickLocalized({ en: 'Hello' }, 'fr')).toBe('Hello')
  })

  it('falls back to en when the localized value is an empty string', () => {
    expect(pickLocalized({ en: 'Hello', de: '' }, 'de')).toBe('Hello')
  })

  it('returns en directly when requesting en', () => {
    expect(pickLocalized({ en: 'Hello', ua: 'Привіт' }, 'en')).toBe('Hello')
  })
})
