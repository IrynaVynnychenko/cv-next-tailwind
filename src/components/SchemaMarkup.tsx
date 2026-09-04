import { BlogPost } from '@/data/blog-posts'
import { contactsPage } from '@/data/contacts-page'
import { services, type ServiceId } from '@/data/services'
import { translations } from '@/data/translations'
import { getBlogPostModified, getBlogPostPlainText, getBlogPostWordCount } from '@/lib/blog-seo'
import type { Language } from '@/lib/i18n'
import { getBlogIndexPath, getBlogPostPath, getContactsPath, getHomePath, LOCALE_TAGS, withLangPrefix } from '@/lib/i18n'
import { SITE_OG_IMAGE_URL } from '@/lib/seo'
import { AUTHOR_JOB_TITLE, AUTHOR_NAME, CONTACT_EMAIL, SAME_AS } from '@/lib/site'

type Lang = Language

interface SchemaProps {
  lang: Lang
}

const copy = {
  name: AUTHOR_NAME,
  jobTitle: AUTHOR_JOB_TITLE,
  home: {
    en: 'Home',
    ua: 'Головна',
    de: 'Startseite',
    fr: 'Accueil',
    es: 'Inicio',
    it: 'Home',
    tr: 'Ana sayfa',
  },
  blog: {
    en: 'Blog',
    ua: 'Блог',
    de: 'Blog',
    fr: 'Blog',
    es: 'Blog',
    it: 'Blog',
    tr: 'Blog',
  },
  personDescription: {
    en: 'Frontend and fullstack Next.js: Telegram Mini Apps, AI solutions for business, marketing sites, Webflow, WordPress, static, GSAP animation. 4,200+ Upwork hours, 100% Job Success, NDA-ready.',
    ua: 'Фронтенд і fullstack Next.js: Telegram Mini Apps, AI рішення для бізнесу, маркетингові сайти, Webflow, WordPress, статика, анімація GSAP. 4 200+ годин на Upwork, 100% Job Success, готова до NDA.',
    de: 'Frontend und Fullstack-Next.js: Telegram Mini Apps, KI-Lösungen für Unternehmen, Marketing-Sites, Webflow, WordPress, Statik, GSAP-Animation. 4.200+ Upwork-Stunden, 100% Job Success, NDA-fähig.',
    fr: 'Frontend et Next.js fullstack : Telegram Mini Apps, solutions IA pour l’entreprise, sites marketing, Webflow, WordPress, statique, animation GSAP. 4 200+ heures Upwork, 100 % Job Success, NDA possible.',
    es: 'Frontend y Next.js fullstack: Telegram Mini Apps, soluciones de IA para empresas, sitios de marketing, Webflow, WordPress, estático, animación GSAP. Más de 4.200 horas en Upwork, 100% Job Success, lista para NDA.',
    it: 'Frontend e Next.js fullstack: Telegram Mini Apps, soluzioni IA per il business, siti marketing, Webflow, WordPress, statico, animazione GSAP. Oltre 4.200 ore su Upwork, 100% Job Success, pronta per NDA.',
    tr: 'Frontend ve fullstack Next.js: Telegram Mini Apps, işletmeler için AI çözümleri, pazarlama siteleri, Webflow, WordPress, statik, GSAP animasyon. 4.200+ Upwork saati, %100 Job Success, NDA’ya hazır.',
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
    en: 'Iryna Vynnychenko - Frontend & Full-Stack Engineer',
    ua: 'Ірина Винниченко - Frontend і Full-Stack інженерка',
    de: 'Iryna Vynnychenko - Frontend- und Full-Stack-Engineerin',
    fr: 'Iryna Vynnychenko - Ingénieure frontend & full-stack',
    es: 'Iryna Vynnychenko - Ingeniera frontend y full-stack',
    it: 'Iryna Vynnychenko - Ingegnera frontend e full-stack',
    tr: 'Iryna Vynnychenko - Frontend ve Full-Stack mühendisi',
  },
  siteDescription: {
    en: 'Portfolio of Iryna Vynnychenko. Marketing sites, Webflow, WordPress, animation, and fullstack Next.js with PostgreSQL.',
    ua: 'Портфоліо Ірини Винниченко. Маркетингові сайти, Webflow, WordPress, анімація та fullstack Next.js з PostgreSQL.',
    de: 'Portfolio von Iryna Vynnychenko. Marketing-Sites, Webflow, WordPress, Animation und Fullstack-Next.js mit PostgreSQL.',
    fr: 'Portfolio d’Iryna Vynnychenko. Sites marketing, Webflow, WordPress, animation et Next.js fullstack avec PostgreSQL.',
    es: 'Portfolio de Iryna Vynnychenko. Sitios de marketing, Webflow, WordPress, animación y Next.js fullstack con PostgreSQL.',
    it: 'Portfolio di Iryna Vynnychenko. Siti marketing, Webflow, WordPress, animazione e Next.js fullstack con PostgreSQL.',
    tr: 'Iryna Vynnychenko’nun portfolyosu. Pazarlama siteleri, Webflow, WordPress, animasyon ve PostgreSQL ile fullstack Next.js.',
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
      'Webflow',
      'WordPress',
      'Node.js',
      'PostgreSQL / Prisma',
      'API Integration & Orchestration',
      'AI Integrations (Vercel AI SDK, MCP, streaming UI)',
      'LLM Integrations (OpenAI, Anthropic, agents, embeddings)',
      'State Management (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Core Web Vitals Optimization for SEO',
    ],
    ua: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Webflow',
      'WordPress',
      'Node.js',
      'PostgreSQL / Prisma',
      'API Integration & Orchestration',
      'ШІ-інтеграції (Vercel AI SDK, MCP, streaming UI)',
      'LLM-інтеграції (OpenAI, Anthropic, агенти, embeddings)',
      'Управління станом (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Оптимізація Core Web Vitals для SEO',
    ],
    de: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Webflow',
      'WordPress',
      'Node.js',
      'PostgreSQL / Prisma',
      'API-Integration & Orchestrierung',
      'KI-Integration (Vercel AI SDK, MCP, Streaming-UI)',
      'LLM-Integrationen (OpenAI, Anthropic, Agenten, Embeddings)',
      'State Management (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Core Web Vitals Optimierung für SEO',
    ],
    fr: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Webflow',
      'WordPress',
      'Node.js',
      'PostgreSQL / Prisma',
      'Intégration et orchestration d’API',
      'Intégration IA (Vercel AI SDK, MCP, streaming UI)',
      'Intégrations LLM (OpenAI, Anthropic, agents, embeddings)',
      'Gestion d’état (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Optimisation Core Web Vitals pour le SEO',
    ],
    es: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Webflow',
      'WordPress',
      'Node.js',
      'PostgreSQL / Prisma',
      'Integración y orquestación de APIs',
      'Integración de IA (Vercel AI SDK, MCP, streaming UI)',
      'Integraciones LLM (OpenAI, Anthropic, agentes, embeddings)',
      'Gestión de estado (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Optimización de Core Web Vitals para SEO',
    ],
    it: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Webflow',
      'WordPress',
      'Node.js',
      'PostgreSQL / Prisma',
      'Integrazione e orchestrazione API',
      'Integrazione IA (Vercel AI SDK, MCP, streaming UI)',
      'Integrazioni LLM (OpenAI, Anthropic, agenti, embeddings)',
      'Gestione dello stato (Zustand, Redux, React Query)',
      'UI (Tailwind CSS, Shadcn/ui, GSAP)',
      'Ottimizzazione Core Web Vitals per la SEO',
    ],
    tr: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router / Pages Router)',
      'Webflow',
      'WordPress',
      'Node.js',
      'PostgreSQL / Prisma',
      'API entegrasyonu ve orkestrasyonu',
      'Yapay zekâ entegrasyonu (Vercel AI SDK, MCP, streaming UI)',
      'LLM entegrasyonları (OpenAI, Anthropic, ajanlar, embeddings)',
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
      sameAs: [...SAME_AS],
      knowsAbout: copy.skills[lang],
      address: {
        '@type': 'PostalAddress',
        addressLocality: copy.city[lang],
        addressCountry: 'UA',
      },
      email: CONTACT_EMAIL,
      telephone: '+380931844615',
      worksFor: {
        '@type': 'Organization',
        name: 'Upwork',
      },
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#hero-answer'],
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
    author: {
      '@type': 'Person',
      name: copy.name[lang],
      url: `https://vynnychenko.dev${getHomePath(lang)}`,
    },
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
      dateModified: getBlogPostModified(post),
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
  const articleBody = getBlogPostPlainText(post)
  const modified = getBlogPostModified(post)
  const homeUrl = `https://vynnychenko.dev${getHomePath(lang)}`
  const blogUrl = `https://vynnychenko.dev${getBlogIndexPath(lang)}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    articleBody,
    wordCount: getBlogPostWordCount(post),
    datePublished: post.date,
    dateModified: modified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    url: postUrl,
    inLanguage: LOCALE_TAGS[lang],
    keywords: post.tags.join(', '),
    isAccessibleForFree: true,
    image: SITE_OG_IMAGE_URL,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
      image: SITE_OG_IMAGE_URL,
      sameAs: [...SAME_AS],
    },
    publisher: {
      '@type': 'Person',
      name: authorName,
      url: 'https://vynnychenko.dev',
      image: SITE_OG_IMAGE_URL,
      sameAs: [...SAME_AS],
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#article-excerpt'],
    },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: copy.home[lang],
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: copy.blog[lang],
        item: blogUrl,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
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

export function ServicePageSchema({ id, lang }: SchemaProps & { id: ServiceId }) {
  const service = services[id]
  const name = service.h1[lang]
  const description = service.lead[lang]
  const url = `https://vynnychenko.dev${withLangPrefix(lang, service.path)}`
  const authorName = copy.name[lang]
  const authorUrl = `https://vynnychenko.dev${getHomePath(lang)}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name,
    description,
    url,
    inLanguage: LOCALE_TAGS[lang],
    provider: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
      image: SITE_OG_IMAGE_URL,
      sameAs: [...SAME_AS],
    },
    areaServed: 'Worldwide',
    email: 'i.vynnychenko@gmail.com',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#service-lead'],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.q[lang],
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a[lang],
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}

export function ContactPageSchema({ lang }: SchemaProps) {
  const url = `https://vynnychenko.dev${getContactsPath(lang)}`
  const authorName = copy.name[lang]
  const authorUrl = `https://vynnychenko.dev${getHomePath(lang)}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: contactsPage.h1[lang],
    description: contactsPage.metaDescription[lang],
    url,
    inLanguage: LOCALE_TAGS[lang],
    mainEntity: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
      image: SITE_OG_IMAGE_URL,
      email: CONTACT_EMAIL,
      sameAs: [...SAME_AS],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
