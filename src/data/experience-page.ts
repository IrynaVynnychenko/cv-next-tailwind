import type { Language } from '@/lib/i18n'

type L = Record<Language, string>

export const EXPERIENCE_PATH = '/experience/'

export const experiencePage: {
  h1: L
  lead: L
  metaTitle: L
  metaDescription: L
} = {
  h1: {
    en: 'Experience and education',
    ua: 'Досвід роботи та освіта',
    de: 'Berufserfahrung und Ausbildung',
    fr: 'Expérience et formation',
    es: 'Experiencia y formación',
    it: 'Esperienza e formazione',
    tr: 'Deneyim ve eğitim',
  },
  lead: {
    en: 'In production since 2018 — Upwork, product systems under NDA, marketing sites. Roles and education below.',
    ua: 'У проді з 2018 — Upwork, продуктові системи під NDA, маркетингові сайти. Нижче — місця роботи й освіта.',
    de: 'Seit 2018 in Produktion — Upwork, Produktsysteme unter NDA, Marketing-Sites. Rollen und Ausbildung unten.',
    fr: 'En prod depuis 2018 — Upwork, systèmes produit sous NDA, sites marketing. Rôles et formation ci-dessous.',
    es: 'En producción desde 2018 — Upwork, sistemas de producto bajo NDA, sitios de marketing. Roles y formación abajo.',
    it: 'In produzione dal 2018 — Upwork, sistemi di prodotto sotto NDA, siti marketing. Ruoli e formazione sotto.',
    tr: '2018’den beri üretimde — Upwork, NDA altındaki ürün sistemleri, pazarlama siteleri. Roller ve eğitim aşağıda.',
  },
  metaTitle: {
    en: 'Experience and Education | Iryna Vynnychenko',
    ua: 'Досвід роботи та освіта | Ірина Винниченко',
    de: 'Berufserfahrung und Ausbildung | Iryna Vynnychenko',
    fr: 'Expérience et formation | Iryna Vynnychenko',
    es: 'Experiencia y formación | Iryna Vynnychenko',
    it: 'Esperienza e formazione | Iryna Vynnychenko',
    tr: 'Deneyim ve eğitim | Iryna Vynnychenko',
  },
  metaDescription: {
    en: 'Work experience and education of Iryna Vynnychenko, senior web engineer: Upwork since 2018, fullstack Next.js, marketing sites. 4,200+ hours, 100% Job Success.',
    ua: 'Досвід роботи та освіта Ірини Винниченко, senior web engineer: Upwork з 2018, fullstack Next.js, маркетингові сайти. 4 200+ годин, 100% Job Success.',
    de: 'Berufserfahrung und Ausbildung von Iryna Vynnychenko, Senior Web Engineer: Upwork seit 2018, Fullstack-Next.js, Marketing-Sites. 4.200+ Stunden, 100% Job Success.',
    fr: 'Expérience et formation d’Iryna Vynnychenko, ingénieure web senior : Upwork depuis 2018, Next.js fullstack, sites marketing. 4 200+ heures, 100 % Job Success.',
    es: 'Experiencia y formación de Iryna Vynnychenko, ingeniera web senior: Upwork desde 2018, Next.js fullstack, sitios de marketing. Más de 4.200 horas, 100% Job Success.',
    it: 'Esperienza e formazione di Iryna Vynnychenko, ingegnera web senior: Upwork dal 2018, Next.js fullstack, siti marketing. Oltre 4.200 ore, 100% Job Success.',
    tr: 'Kıdemli web mühendisi Iryna Vynnychenko’nun deneyimi ve eğitimi: 2018’den beri Upwork, fullstack Next.js, pazarlama siteleri. 4.200+ saat, %100 Job Success.',
  },
}
