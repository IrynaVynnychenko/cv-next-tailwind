import { BlogPost } from '@/data/blog-posts';
import { translations } from '@/data/translations';

type Lang = 'en' | 'ua';

interface SchemaProps {
  lang: Lang;
}

export function ProfilePageSchema({ lang }: SchemaProps) {
  const isUa = lang === 'ua';
  const name = isUa ? 'Ірина Винниченко' : 'Iryna Vynnychenko';
  const jobTitle = isUa ? 'Frontend & Full-Stack Розробник' : 'Frontend & Full-Stack Developer';
  const description = isUa 
    ? 'Frontend & Full-Stack розробник зі спеціалізацією на кастомних CRM та складних вебдодатках на Next.js, React, Node.js і AI. 4,200+ годин на Upwork, 8+ років, 100+ запущених проєктів.'
    : 'Frontend & Full-Stack Developer specializing in custom CRMs and complex web apps with Next.js, React, Node.js, and AI. 4,200+ Upwork hours, 8+ years, 100+ launched projects.';
  
  const skills = isUa 
    ? [
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
      ]
    : [
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
      ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: isUa ? 'https://vynnychenko.dev/ua/' : 'https://vynnychenko.dev/',
    mainEntity: {
      '@type': 'Person',
      name,
      jobTitle,
      url: 'https://vynnychenko.dev',
      image: 'https://vynnychenko.dev/images/profile-photo.jpg',
      description,
      sameAs: [
        'https://www.linkedin.com/in/iryna-vynnychenko-287202141/',
        'https://www.upwork.com/freelancers/irynavynnychenko',
      ],
      knowsAbout: skills,
      address: {
        '@type': 'PostalAddress',
        addressLocality: isUa ? 'Київ' : 'Kyiv',
        addressCountry: 'UA',
      },
      email: 'i.vynnychenko@gmail.com',
      telephone: '+380931844615',
      worksFor: {
        '@type': 'Organization',
        name: 'Upwork',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema({ lang }: SchemaProps) {
  const isUa = lang === 'ua';
  const name = isUa 
    ? 'Ірина Винниченко — Frontend & Full-Stack Розробник'
    : 'Iryna Vynnychenko — Frontend & Full-Stack Developer';
  const description = isUa 
    ? 'Портфоліо та блог Ірини Винниченко. Frontend & Full-Stack розробка: Next.js, React, Node.js, AI, кастомні CRM та складні вебдодатки.'
    : 'Portfolio and blog of Iryna Vynnychenko. Frontend & Full-Stack development: Next.js, React, Node.js, AI, custom CRMs, and complex web apps.';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url: 'https://vynnychenko.dev',
    description,
    inLanguage: isUa ? 'uk-UA' : 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BlogSchemaProps extends SchemaProps {
  posts: BlogPost[];
}

export function BlogSchema({ posts, lang }: BlogSchemaProps) {
  const isUa = lang === 'ua';
  const name = isUa ? 'Блог Ірини Винниченко' : "Iryna Vynnychenko's Blog";
  const description = isUa
    ? 'Практичні статті про продуктивність, вибір технологій та співпрацю з фриланс-розробником.'
    : 'Practical articles on performance, technology choices, and working with a freelance web engineer.';
  const blogUrl = isUa ? 'https://vynnychenko.dev/ua/blog/' : 'https://vynnychenko.dev/blog/';
  const authorName = isUa ? 'Ірина Винниченко' : 'Iryna Vynnychenko';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name,
    description,
    url: blogUrl,
    publisher: {
      '@type': 'Person',
      name: authorName,
      url: 'https://vynnychenko.dev',
    },
    blogPost: posts.map((post) => {
      const postUrl = isUa 
        ? `https://vynnychenko.dev/ua/blog/${post.slug}/` 
        : `https://vynnychenko.dev/blog/${post.slug}/`;
      return {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        url: postUrl,
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BlogPostingSchemaProps extends SchemaProps {
  post: BlogPost;
}

export function BlogPostingSchema({ post, lang }: BlogPostingSchemaProps) {
  const isUa = lang === 'ua';
  const authorName = isUa ? 'Ірина Винниченко' : 'Iryna Vynnychenko';
  const authorUrl = isUa ? 'https://vynnychenko.dev/ua/' : 'https://vynnychenko.dev/';
  const postUrl = isUa 
    ? `https://vynnychenko.dev/ua/blog/${post.slug}/` 
    : `https://vynnychenko.dev/blog/${post.slug}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: postUrl,
    url: postUrl,
    inLanguage: isUa ? 'uk-UA' : 'en-US',
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ lang }: SchemaProps) {
  const t = translations[lang].faq;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.items.map((item) => {
      const list = 'list' in item && item.list ? item.list : undefined;
      const text = list?.length
        ? [item.a, ...list.map((entry) => `• ${entry}`)].filter(Boolean).join('\n')
        : item.a;

      return {
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text,
        },
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
