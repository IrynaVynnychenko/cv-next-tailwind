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
  },
  jobTitle: {
    en: 'Frontend & Full-Stack Developer',
    ua: 'Frontend & Full-Stack розробниця',
    de: 'Frontend- & Full-Stack-Entwicklerin',
  },
  personDescription: {
    en: 'Frontend & Full-Stack Developer specializing in custom CRMs and complex web apps with Next.js, React, Node.js, and AI. 4,200+ Upwork hours, 8+ years, 100+ launched projects.',
    ua: 'Frontend & Full-Stack розробниця зі спеціалізацією на кастомних CRM та складних вебдодатках на Next.js, React, Node.js і AI. 4 200+ годин на Upwork, 8+ років, 100+ запущених проєктів.',
    de: 'Frontend- & Full-Stack-Entwicklerin mit Fokus auf Custom-CRMs und komplexe Web-Apps mit Next.js, React, Node.js und AI. 4.200+ Upwork-Stunden, 8+ Jahre, 100+ gelaunchte Projekte.',
  },
  city: {
    en: 'Kyiv',
    ua: 'Київ',
    de: 'Kiew',
  },
  siteName: {
    en: 'Iryna Vynnychenko — Frontend & Full-Stack Developer',
    ua: 'Ірина Винниченко — Frontend & Full-Stack розробниця',
    de: 'Iryna Vynnychenko — Frontend- & Full-Stack-Entwicklerin',
  },
  siteDescription: {
    en: 'Portfolio and blog of Iryna Vynnychenko. Frontend & Full-Stack development: Next.js, React, Node.js, AI, custom CRMs, and complex web apps.',
    ua: 'Портфоліо та блог Ірини Винниченко. Frontend & Full-Stack розробка: Next.js, React, Node.js, AI, кастомні CRM та складні вебдодатки.',
    de: 'Portfolio und Blog von Iryna Vynnychenko. Frontend- & Full-Stack-Entwicklung: Next.js, React, Node.js, AI, Custom-CRMs und komplexe Web-Apps.',
  },
  blogName: {
    en: "Iryna Vynnychenko's Blog",
    ua: 'Блог Ірини Винниченко',
    de: 'Blog von Iryna Vynnychenko',
  },
  blogDescription: {
    en: 'Practical articles on performance, technology choices, and working with a freelance web engineer.',
    ua: 'Практичні статті про продуктивність, вибір технологій та співпрацю з фриланс-розробницею.',
    de: 'Praktische Artikel zu Performance, Technologieentscheidungen und der Zusammenarbeit mit einer Freelance-Webentwicklerin.',
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
      'AI Integration (OpenAI, Vercel AI SDK)',
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
      'AI Integration (OpenAI, Vercel AI SDK)',
      'State Management (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Core Web Vitals Optimierung für SEO',
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
