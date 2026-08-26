import type { Metadata } from 'next'
import { experiencePage, EXPERIENCE_PATH } from '@/data/experience-page'
import type { Language } from '@/lib/i18n'
import { getOgLocale, getOpenGraphImages, getPageAlternates, getTwitterImageMetadata } from '@/lib/seo'

export function getExperienceMetadata(lang: Language): Metadata {
  const title = experiencePage.metaTitle[lang]
  const description = experiencePage.metaDescription[lang]
  const alternates = getPageAlternates(EXPERIENCE_PATH, lang)

  return {
    title,
    description,
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
