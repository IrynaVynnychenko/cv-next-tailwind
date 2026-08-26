import type { Metadata } from 'next'
import { services, type ServiceId } from '@/data/services'
import type { Language } from '@/lib/i18n'
import { getOgLocale, getOpenGraphImages, getPageAlternates, getTwitterImageMetadata } from '@/lib/seo'

export function getServiceMetadata(id: ServiceId, lang: Language): Metadata {
  const service = services[id]
  const title = service.metaTitle[lang]
  const description = service.metaDescription[lang]
  const alternates = getPageAlternates(service.path, lang)

  return {
    title,
    description,
    keywords: service.keywords[lang],
    alternates,
    openGraph: {
      title,
      description,
      url: alternates.canonical,
      type: 'website',
      locale: getOgLocale(lang),
      images: getOpenGraphImages(),
    },
    twitter: getTwitterImageMetadata(),
  }
}
