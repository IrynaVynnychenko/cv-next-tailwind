import { BlogPost } from '@/data/blog-posts'
import { translations } from '@/data/translations'
import type { Language } from '@/lib/i18n'
import { getBlogIndexPath, getBlogPostPath, getHomePath, LOCALE_TAGS } from '@/lib/i18n'

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
    en: 'Frontend & Full-Stack Developer',
    ua: 'Frontend & Full-Stack розробниця',
    de: 'Frontend- & Full-Stack-Entwicklerin',
    fr: 'Développeuse Frontend & Full-Stack',
    es: 'Desarrolladora Frontend y Full-Stack',
    it: 'Sviluppatrice Frontend e Full-Stack',
    tr: 'Frontend ve Full-Stack Geliştirici',
  },
  personDescription: {
    en: 'Frontend & Full-Stack Developer specializing in custom CRMs and complex web apps with Next.js, React, Node.js, and AI. 4,200+ Upwork hours, 8+ years, 100+ launched projects.',
    ua: 'Frontend & Full-Stack розробниця зі спеціалізацією на кастомних CRM та складних вебдодатках на Next.js, React, Node.js і AI. 4 200+ годин на Upwork, 8+ років, 100+ запущених проєктів.',
    de: 'Frontend- & Full-Stack-Entwicklerin mit Fokus auf Custom-CRMs und komplexe Web-Apps mit Next.js, React, Node.js und AI. 4.200+ Upwork-Stunden, 8+ Jahre, 100+ gelaunchte Projekte.',
    fr: 'Développeuse Frontend & Full-Stack spécialisée dans les CRM sur mesure et les applications web complexes avec Next.js, React, Node.js et l’IA. 4 200+ heures sur Upwork, 8+ ans, 100+ projets lancés.',
    es: 'Desarrolladora Frontend y Full-Stack especializada en CRM a medida y aplicaciones web complejas con Next.js, React, Node.js e IA. Más de 4.200 horas en Upwork, 8+ años, 100+ proyectos lanzados.',
    it: 'Sviluppatrice Frontend e Full-Stack specializzata in CRM su misura e applicazioni web complesse con Next.js, React, Node.js e IA. Oltre 4.200 ore su Upwork, 8+ anni, 100+ progetti lanciati.',
    tr: 'Next.js, React, Node.js ve yapay zekâ ile özel CRM ve karmaşık web uygulamaları geliştiren Frontend ve Full-Stack Geliştirici. 4.200+ Upwork saati, 8+ yıl, 100+ yayına alınan proje.',
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
    en: 'Iryna Vynnychenko — Frontend & Full-Stack Developer',
    ua: 'Ірина Винниченко — Frontend & Full-Stack розробниця',
    de: 'Iryna Vynnychenko — Frontend- & Full-Stack-Entwicklerin',
    fr: 'Iryna Vynnychenko — Développeuse Frontend & Full-Stack',
    es: 'Iryna Vynnychenko — Desarrolladora Frontend y Full-Stack',
    it: 'Iryna Vynnychenko — Sviluppatrice Frontend e Full-Stack',
    tr: 'Iryna Vynnychenko — Frontend ve Full-Stack Geliştirici',
  },
  siteDescription: {
    en: 'Portfolio and blog of Iryna Vynnychenko. Frontend & Full-Stack development: Next.js, React, Node.js, AI, custom CRMs, and complex web apps.',
    ua: 'Портфоліо та блог Ірини Винниченко. Frontend & Full-Stack розробка: Next.js, React, Node.js, AI, кастомні CRM та складні вебдодатки.',
    de: 'Portfolio und Blog von Iryna Vynnychenko. Frontend- & Full-Stack-Entwicklung: Next.js, React, Node.js, AI, Custom-CRMs und komplexe Web-Apps.',
    fr: 'Portfolio et blog d’Iryna Vynnychenko. Développement Frontend & Full-Stack : Next.js, React, Node.js, IA, CRM sur mesure et applications web complexes.',
    es: 'Portfolio y blog de Iryna Vynnychenko. Desarrollo Frontend y Full-Stack: Next.js, React, Node.js, IA, CRM a medida y aplicaciones web complejas.',
    it: 'Portfolio e blog di Iryna Vynnychenko. Sviluppo Frontend e Full-Stack: Next.js, React, Node.js, IA, CRM su misura e applicazioni web complesse.',
    tr: 'Iryna Vynnychenko’nun portfolyosu ve blogu. Frontend ve Full-Stack geliştirme: Next.js, React, Node.js, yapay zekâ, özel CRM ve karmaşık web uygulamaları.',
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
    ua: 'Практичні статті про продуктивність, вибір технологій та співпрацю з фриланс-розробницею.',
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
      image: 'https://vynnychenko.dev/images/profile-photo.jpg',
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
    publisher: {
      '@type': 'Person',
      name: authorName,
      url: 'https://vynnychenko.dev',
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://vynnychenko.dev${getBlogPostPath(lang, post.slug)}`,
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
    image: 'https://vynnychenko.dev/images/profile-photo.jpg',
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
      image: 'https://vynnychenko.dev/images/profile-photo.jpg',
    },
    publisher: {
      '@type': 'Person',
      name: authorName,
      url: 'https://vynnychenko.dev',
      image: 'https://vynnychenko.dev/images/profile-photo.jpg',
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
