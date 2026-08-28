import type { Metadata } from 'next'
import { contactsPage, CONTACTS_PATH } from '@/data/contacts-page'
import type { Language } from '@/lib/i18n'
import { getOgLocale, getOpenGraphImages, getPageAlternates, getTwitterImageMetadata } from '@/lib/seo'

export function getContactsMetadata(lang: Language): Metadata {
  const title = contactsPage.metaTitle[lang]
  const description = contactsPage.metaDescription[lang]
  const alternates = getPageAlternates(CONTACTS_PATH, lang)

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
