import type { Metadata } from 'next'
import type { Language } from '@/lib/i18n'
import { getBlogIndexAlternates } from '@/lib/seo'

type BlogIndexEntry = {
  title: string
  description: string
  notFoundTitle: string
  pageTitle: (page: number) => string
}

const BLOG_INDEX: Record<Language, BlogIndexEntry> = {
  en: {
    title: 'Blog - Iryna Vynnychenko | Senior Web & Frontend Engineer',
    description:
      'Practical insights on web development, performance, and hiring - written for founders and product owners building digital products.',
    notFoundTitle: 'Page Not Found',
    pageTitle: (page) =>
      `Blog - Page ${page} - Iryna Vynnychenko | Senior Web & Frontend Engineer`,
  },
  de: {
    title: 'Blog - Iryna Vynnychenko | Senior Web- & Frontend-Entwicklerin',
    description:
      'Praxisnahe Artikel zu Webentwicklung, Performance und der Suche nach Entwicklerinnen und Entwicklern - für Founder und Product Owner.',
    notFoundTitle: 'Seite nicht gefunden',
    pageTitle: (page) =>
      `Blog - Seite ${page} - Iryna Vynnychenko | Senior Web- & Frontend-Entwicklerin`,
  },
  es: {
    title: 'Blog - Iryna Vynnychenko | Desarrolladora Web y Frontend Senior',
    description:
      'Artículos prácticos sobre desarrollo web, rendimiento y cómo elegir desarrolladora - para fundadores y product owners.',
    notFoundTitle: 'Página no encontrada',
    pageTitle: (page) =>
      `Blog - Página ${page} - Iryna Vynnychenko | Desarrolladora Web y Frontend Senior`,
  },
  fr: {
    title: 'Blog - Iryna Vynnychenko | Développeuse Web & Frontend Senior',
    description:
      'Articles pratiques sur le développement web, la performance et le choix d’une développeuse - pour fondateurs et product owners.',
    notFoundTitle: 'Page introuvable',
    pageTitle: (page) =>
      `Blog - Page ${page} - Iryna Vynnychenko | Développeuse Web & Frontend Senior`,
  },
  it: {
    title: 'Blog - Iryna Vynnychenko | Sviluppatrice Web e Frontend Senior',
    description:
      'Articoli pratici su sviluppo web, performance e come scegliere uno sviluppatore - per founder e product owner.',
    notFoundTitle: 'Pagina non trovata',
    pageTitle: (page) =>
      `Blog - Pagina ${page} - Iryna Vynnychenko | Sviluppatrice Web e Frontend Senior`,
  },
  tr: {
    title: 'Blog - Iryna Vynnychenko | Kıdemli Web ve Frontend Geliştirici',
    description:
      'Web geliştirme, performans ve geliştirici seçimi üzerine pratik yazılar - kurucular ve product owner’lar için.',
    notFoundTitle: 'Sayfa bulunamadı',
    pageTitle: (page) =>
      `Blog - Sayfa ${page} - Iryna Vynnychenko | Kıdemli Web ve Frontend Geliştirici`,
  },
  ua: {
    title: 'Блог - Ірина Винниченко | Senior Web & Frontend розробниця',
    description:
      'Корисні статті про веброзробку, швидкість сайтів і найм розробників - для фаундерів і власників продуктів.',
    notFoundTitle: 'Сторінку не знайдено',
    pageTitle: (page) =>
      `Блог - Сторінка ${page} - Ірина Винниченко | Senior Web & Frontend розробниця`,
  },
}

/**
 * Metadata for the blog index. Pass no `page` (or `1`) for `/blog/`, or a
 * page number >= 2 for `/blog/page/N/`. Callers are responsible for
 * validating the page number first and falling back to
 * `getBlogIndexNotFoundMetadata` when it's out of range.
 */
export function getBlogIndexMetadata(lang: Language, page?: number): Metadata {
  const entry = BLOG_INDEX[lang]

  if (page === undefined || page <= 1) {
    return {
      title: entry.title,
      description: entry.description,
      alternates: getBlogIndexAlternates(lang),
    }
  }

  return {
    title: entry.pageTitle(page),
    description: entry.description,
    alternates: getBlogIndexAlternates(lang, page),
  }
}

export function getBlogIndexNotFoundMetadata(lang: Language): Metadata {
  return { title: BLOG_INDEX[lang].notFoundTitle }
}
