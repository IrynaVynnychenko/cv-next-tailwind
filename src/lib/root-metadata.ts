import type { Metadata } from 'next'
import type { Language } from '@/lib/i18n'
import { getHomePath } from '@/lib/i18n'
import { AUTHOR_NAME, BASE_URL } from '@/lib/site'
import { getOgLocale, getOpenGraphImages, getTwitterImageMetadata } from '@/lib/seo'

type RootMetadataEntry = {
  title: string
  description: string
  keywords: string
  ogDescription: string
  siteName: string
}

const ROOT_METADATA: Record<Language, RootMetadataEntry> = {
  en: {
    title: 'Iryna Vynnychenko | Next.js, Telegram Mini Apps & AI',
    description:
      'Telegram Mini App development, AI solutions for business, fullstack Next.js. 4,200+ Upwork hours, 100% Job Success. Book a call.',
    keywords:
      'Telegram Mini App development, AI solutions for business, Frontend Engineer, Full-Stack, Next.js, Webflow, WordPress, React, TypeScript, PostgreSQL, Ukraine, Upwork',
    ogDescription:
      'Telegram Mini App development, AI solutions for business, fullstack Next.js. 4,200+ Upwork hours · 100% Job Success.',
    siteName: 'Iryna Vynnychenko - Frontend & Full-Stack Engineer',
  },
  de: {
    title: 'Iryna Vynnychenko | Next.js, Telegram Mini Apps & KI',
    description:
      'Telegram Mini App Entwicklung, KI-Lösungen für Unternehmen, Fullstack-Next.js. 4.200+ Upwork-Stunden, 100% Job Success.',
    keywords:
      'Telegram Mini App Entwicklung, KI-Lösungen für Unternehmen, Frontend, Full-Stack, Next.js, Webflow, WordPress, React, TypeScript, PostgreSQL, Ukraine, Upwork, Deutschland',
    ogDescription:
      'Telegram Mini App Entwicklung, KI-Lösungen für Unternehmen, Fullstack-Next.js. 4.200+ Upwork-Stunden · 100% Job Success.',
    siteName: 'Iryna Vynnychenko - Frontend- und Full-Stack-Engineerin',
  },
  es: {
    title: 'Iryna Vynnychenko | Next.js, Telegram Mini Apps e IA',
    description:
      'Desarrollo de Telegram Mini App, soluciones de IA para empresas, Next.js fullstack. Más de 4.200 horas en Upwork, 100% Job Success.',
    keywords:
      'desarrollo Telegram Mini App, soluciones de IA para empresas, Frontend, Full-Stack, Next.js, Webflow, WordPress, React, TypeScript, PostgreSQL, Ucrania, Upwork, España',
    ogDescription:
      'Desarrollo de Telegram Mini App, soluciones de IA para empresas, Next.js fullstack. Más de 4.200 horas en Upwork · 100% Job Success.',
    siteName: 'Iryna Vynnychenko - Ingeniera frontend y full-stack',
  },
  fr: {
    title: 'Iryna Vynnychenko | Next.js, Telegram Mini Apps & IA',
    description:
      'Développement Telegram Mini App, solutions IA pour l’entreprise, Next.js fullstack. 4 200+ heures Upwork, 100 % Job Success.',
    keywords:
      'développement Telegram Mini App, solutions IA, Frontend, Full-Stack, Next.js, Webflow, WordPress, React, TypeScript, PostgreSQL, Ukraine, Upwork, France',
    ogDescription:
      'Développement Telegram Mini App, solutions IA pour l’entreprise, Next.js fullstack. 4 200+ heures Upwork · 100 % Job Success.',
    siteName: 'Iryna Vynnychenko - Ingénieure frontend & full-stack',
  },
  it: {
    title: 'Iryna Vynnychenko | Next.js, Telegram Mini Apps e IA',
    description:
      'Sviluppo Telegram Mini App, soluzioni IA per il business, Next.js fullstack. Oltre 4.200 ore su Upwork, 100% Job Success.',
    keywords:
      'sviluppo Telegram Mini App, soluzioni IA, Frontend, Full-Stack, Next.js, Webflow, WordPress, React, TypeScript, PostgreSQL, Ucraina, Upwork, Italia',
    ogDescription:
      'Sviluppo Telegram Mini App, soluzioni IA per il business, Next.js fullstack. Oltre 4.200 ore su Upwork · 100% Job Success.',
    siteName: 'Iryna Vynnychenko - Ingegnera frontend e full-stack',
  },
  tr: {
    title: 'Iryna Vynnychenko | Next.js, Telegram Mini Apps ve AI',
    description:
      'Telegram Mini App geliştirme, işletmeler için AI çözümleri, fullstack Next.js. 4.200+ Upwork saati, %100 Job Success.',
    keywords:
      'Telegram Mini App geliştirme, işletmeler için AI çözümleri, Frontend, Full-Stack, Next.js, Webflow, WordPress, React, TypeScript, PostgreSQL, Ukrayna, Upwork, Türkiye',
    ogDescription:
      'Telegram Mini App geliştirme, işletmeler için AI çözümleri, fullstack Next.js. 4.200+ Upwork saati · %100 Job Success.',
    siteName: 'Iryna Vynnychenko - Frontend ve Full-Stack mühendisi',
  },
  ua: {
    title: 'Ірина Винниченко | Next.js, Telegram Mini Apps і AI',
    description:
      'Розробка Telegram Mini App, AI рішення для бізнесу, fullstack Next.js. 4 200+ годин на Upwork, 100% Job Success.',
    keywords:
      'розробка Telegram Mini App, AI рішення для бізнесу, Frontend, Full-Stack, Next.js, Webflow, WordPress, React, TypeScript, PostgreSQL, Україна, Upwork',
    ogDescription:
      'Розробка Telegram Mini App, AI рішення для бізнесу, fullstack Next.js. 4 200+ годин на Upwork · 100% Job Success.',
    siteName: 'Ірина Винниченко - Frontend і Full-Stack інженерка',
  },
}

/**
 * Root `<html>` metadata for a locale's `layout.tsx`. Mirrors the shape every
 * locale previously hardcoded inline, sourced from `ROOT_METADATA` instead.
 */
export function getRootMetadata(lang: Language): Metadata {
  const entry = ROOT_METADATA[lang]
  const author = AUTHOR_NAME[lang]
  // `en` has always pointed at the bare origin (no trailing slash); every
  // other locale points at its home path, e.g. https://vynnychenko.dev/de/.
  const url = lang === 'en' ? BASE_URL : `${BASE_URL}${getHomePath(lang)}`

  return {
    metadataBase: new URL(BASE_URL),
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    authors: [{ name: author }],
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: entry.title,
      description: entry.ogDescription,
      url,
      siteName: entry.siteName,
      type: 'website',
      locale: getOgLocale(lang),
      images: getOpenGraphImages(author),
    },
    twitter: getTwitterImageMetadata(author),
  }
}
