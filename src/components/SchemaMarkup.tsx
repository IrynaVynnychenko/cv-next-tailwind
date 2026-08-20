import { BlogPost } from '@/data/blog-posts'
import { translations } from '@/data/translations'
import type { Language } from '@/lib/i18n'
import { getBlogIndexPath, getBlogPostPath, getHomePath, LOCALE_TAGS } from '@/lib/i18n'
import { SITE_OG_IMAGE_URL } from '@/lib/seo'

type Lang = Language

interface SchemaProps {
  lang: Lang
}

const copy = {
  name: {
    en: 'Iryna Vynnychenko',
    ua: 'Ірина Винниченко',
    de: 'Iryna Vynnychenko',
    fr: 'Iryna Vynnychenko',
    es: 'Iryna Vynnychenko',
    it: 'Iryna Vynnychenko',
    tr: 'Iryna Vynnychenko',
  },
  jobTitle: {
    en: 'Full-Stack Product Engineer',
    ua: 'Full-Stack Product Engineer',
    de: 'Full-Stack Product Engineer',
    fr: 'Full-Stack Product Engineer',
    es: 'Full-Stack Product Engineer',
    it: 'Full-Stack Product Engineer',
    tr: 'Full-Stack Product Engineer',
  },
  personDescription: {
    en: 'Full-Stack Product Engineer for custom CRMs, ERP-style admin platforms, and multi-tenant SaaS with own Node.js/PostgreSQL backends. 4,200+ Upwork hours, 100% Job Success, NDA-ready.',
    ua: 'Продуктова інженерка: кастомні CRM, адмін-платформи рівня ERP і мульти-тенантний SaaS із власним бекендом на Node.js/PostgreSQL. 4 200+ годин на Upwork, 100% Job Success, готова до NDA.',
    de: 'Full-Stack Product Engineer für Custom-CRMs, Admin-Plattformen auf ERP-Niveau und Multi-Tenant-SaaS mit eigenem Node.js/PostgreSQL-Backend. 4.200+ Upwork-Stunden, 100% Job Success, NDA-fähig.',
    fr: 'Product engineer : CRM sur mesure, admin type ERP et SaaS multi-tenant avec backend Node.js/PostgreSQL. 4 200+ heures Upwork, 100 % Job Success, NDA possible.',
    es: 'Ingeniera de producto: CRM a medida, admin tipo ERP y SaaS multi-tenant con backend propio en Node.js/PostgreSQL. Más de 4.200 horas en Upwork, 100% Job Success, lista para NDA.',
    it: 'Product engineer: CRM su misura, admin di livello ERP e SaaS multi-tenant con backend proprio su Node.js/PostgreSQL. Oltre 4.200 ore su Upwork, 100% Job Success, pronta per NDA.',
    tr: 'Ürün mühendisi: özel CRM’ler, ERP tarzı admin platformları ve kendi Node.js/PostgreSQL backend’ine sahip çok kiracılı SaaS. 4.200+ Upwork saati, %100 Job Success, NDA’ya hazır.',
  },
  city: {
    en: 'Kyiv',
    ua: 'Київ',
    de: 'Kiew',
    fr: 'Kyiv',
    es: 'Kyiv',
    it: 'Kyiv',
    tr: 'Kyiv',
  },
  siteName: {
    en: 'Iryna Vynnychenko - Full-Stack Product Engineer',
    ua: 'Ірина Винниченко - Full-Stack Product Engineer',
    de: 'Iryna Vynnychenko - Full-Stack Product Engineer',
    fr: 'Iryna Vynnychenko - Full-Stack Product Engineer',
    es: 'Iryna Vynnychenko - Full-Stack Product Engineer',
    it: 'Iryna Vynnychenko - Full-Stack Product Engineer',
    tr: 'Iryna Vynnychenko - Full-Stack Product Engineer',
  },
  siteDescription: {
    en: 'Portfolio of Iryna Vynnychenko. Product engineering: custom CRMs, ERP-style admin, multi-tenant SaaS, Next.js + Node.js / PostgreSQL.',
    ua: 'Портфоліо Ірини Винниченко. Продуктова інженерія: кастомні CRM, адмін рівня ERP, мульти-тенантний SaaS, Next.js + Node.js / PostgreSQL.',
    de: 'Portfolio von Iryna Vynnychenko. Produktentwicklung: Custom-CRMs, Admin auf ERP-Niveau, Multi-Tenant-SaaS, Next.js + Node.js / PostgreSQL.',
    fr: 'Portfolio d’Iryna Vynnychenko. Ingénierie produit : CRM sur mesure, admin type ERP, SaaS multi-tenant, Next.js + Node.js / PostgreSQL.',
    es: 'Portfolio de Iryna Vynnychenko. Ingeniería de producto: CRM a medida, admin tipo ERP, SaaS multi-tenant, Next.js + Node.js / PostgreSQL.',
    it: 'Portfolio di Iryna Vynnychenko. Product engineering: CRM su misura, admin di livello ERP, SaaS multi-tenant, Next.js + Node.js / PostgreSQL.',
    tr: 'Iryna Vynnychenko’nun portfolyosu. Ürün mühendisliği: özel CRM, ERP tarzı admin, çok kiracılı SaaS, Next.js + Node.js / PostgreSQL.',
  },
  blogName: {
    en: "Iryna Vynnychenko's Blog",
    ua: 'Блог Ірини Винниченко',
    de: 'Blog von Iryna Vynnychenko',
    fr: 'Blog d’Iryna Vynnychenko',
    es: 'Blog de Iryna Vynnychenko',
    it: 'Blog di Iryna Vynnychenko',
    tr: 'Iryna Vynnychenko’nun blogu',
  },
  blogDescription: {
    en: 'Practical articles on performance, technology choices, and working with a freelance web engineer.',
    ua: 'Практичні статті про швидкість сайтів, вибір технологій і роботу з фриланс-розробницею.',
    de: 'Praktische Artikel zu Performance, Technologieentscheidungen und der Zusammenarbeit mit einer Freelance-Webentwicklerin.',
    fr: 'Articles pratiques sur la performance, les choix technologiques et la collaboration avec une ingénieure web freelance.',
    es: 'Artículos prácticos sobre rendimiento, elección de tecnologías y colaboración con una ingeniera web freelance.',
    it: 'Articoli pratici su performance, scelte tecnologiche e collaborazione con una sviluppatrice web freelance.',
    tr: 'Performans, teknoloji seçimleri ve serbest bir web geliştiricisiyle çalışma üzerine pratik yazılar.',
  },
  skills: {
    en: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Node.js',
      'PostgreSQL / Prisma',
      'AI Integration (OpenAI, Vercel AI SDK)',
      'State Management (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Core Web Vitals Optimization for SEO',
    ],
    ua: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Node.js',
      'PostgreSQL / Prisma',
      'AI-інтеграція (OpenAI, Vercel AI SDK)',
      'Управління станом (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Оптимізація Core Web Vitals для SEO',
    ],
    de: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Node.js',
      'PostgreSQL / Prisma',
      'KI-Integration (OpenAI, Vercel AI SDK)',
      'State Management (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Core Web Vitals Optimierung für SEO',
    ],
    fr: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Node.js',
      'PostgreSQL / Prisma',
      'Intégration IA (OpenAI, Vercel AI SDK)',
      'Gestion d’état (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Optimisation Core Web Vitals pour le SEO',
    ],
    es: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Node.js',
      'PostgreSQL / Prisma',
      'Integración de IA (OpenAI, Vercel AI SDK)',
      'Gestión de estado (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Optimización de Core Web Vitals para SEO',
    ],
    it: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Node.js',
      'PostgreSQL / Prisma',
      'Integrazione IA (OpenAI, Vercel AI SDK)',
      'Gestione dello stato (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Ottimizzazione Core Web Vitals per la SEO',
    ],
    tr: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Node.js',
      'PostgreSQL / Prisma',
      'Yapay zekâ entegrasyonu (OpenAI, Vercel AI SDK)',
      'Durum yönetimi (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'SEO için Core Web Vitals optimizasyonu',
    ],
  },
} as const

export function ProfilePageSchema({ lang }: SchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `https://vynnychenko.dev${getHomePath(lang)}`,
    mainEntity: {
      '@type': 'Person',
      name: copy.name[lang],
      jobTitle: copy.jobTitle[lang],
      url: 'https://vynnychenko.dev',
      image: SITE_OG_IMAGE_URL,
      description: copy.personDescription[lang],
      sameAs: [
        'https://www.linkedin.com/in/iryna-vynnychenko-287202141/',
        'https://www.upwork.com/freelancers/irynavynnychenko',
      ],
      knowsAbout: copy.skills[lang],
      address: {
        '@type': 'PostalAddress',
        addressLocality: copy.city[lang],
        addressCountry: 'UA',
      },
      email: 'i.vynnychenko@gmail.com',
      telephone: '+380931844615',
      worksFor: {
        '@type': 'Organization',
        name: 'Upwork',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema({ lang }: SchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: copy.siteName[lang],
    url: 'https://vynnychenko.dev',
    description: copy.siteDescription[lang],
    inLanguage: LOCALE_TAGS[lang],
    image: SITE_OG_IMAGE_URL,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BlogSchemaProps extends SchemaProps {
  posts: BlogPost[]
}

export function BlogSchema({ posts, lang }: BlogSchemaProps) {
  const blogUrl = `https://vynnychenko.dev${getBlogIndexPath(lang)}`
  const authorName = copy.name[lang]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: copy.blogName[lang],
    description: copy.blogDescription[lang],
    url: blogUrl,
    image: SITE_OG_IMAGE_URL,
    publisher: {
      '@type': 'Person',
      name: authorName,
      url: 'https://vynnychenko.dev',
      image: SITE_OG_IMAGE_URL,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://vynnychenko.dev${getBlogPostPath(lang, post.slug)}`,
      image: SITE_OG_IMAGE_URL,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BlogPostingSchemaProps extends SchemaProps {
  post: BlogPost
}

export function BlogPostingSchema({ post, lang }: BlogPostingSchemaProps) {
  const authorName = copy.name[lang]
  const authorUrl = `https://vynnychenko.dev${getHomePath(lang)}`
  const postUrl = `https://vynnychenko.dev${getBlogPostPath(lang, post.slug)}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: postUrl,
    url: postUrl,
    inLanguage: LOCALE_TAGS[lang],
    keywords: post.tags.join(', '),
    image: SITE_OG_IMAGE_URL,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
      image: SITE_OG_IMAGE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: authorName,
      url: 'https://vynnychenko.dev',
      image: SITE_OG_IMAGE_URL,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ lang }: SchemaProps) {
  const t = translations[lang].faq

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.items.map((item) => {
      const list = 'list' in item && item.list ? item.list : undefined
      const text = list?.length
        ? [item.a, ...list.map((entry) => `• ${entry}`)].filter(Boolean).join('\n')
        : item.a

      return {
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text,
        },
      }
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
