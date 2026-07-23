import { BlogPost } from '@/data/blog-posts';

type Lang = 'en' | 'ua';

interface SchemaProps {
  lang: Lang;
}

export function ProfilePageSchema({ lang }: SchemaProps) {
  const isUa = lang === 'ua';
  const name = isUa ? 'Ірина Винниченко' : 'Iryna Vynnychenko';
  const jobTitle = isUa ? 'Senior Web & Frontend Розробник' : 'Senior Web & Frontend Engineer';
  const description = isUa 
    ? 'Senior Web & Frontend Розробник — розробка високопродуктивних React / Next.js вебдодатків та продуктова інженерія. 4,200+ годин на Upwork, 8+ років, 100+ запущених проєктів.'
    : 'Senior Web & Frontend Engineer specializing in high-performance React / Next.js development. 4,200+ Upwork hours, 8+ years, 100+ launched projects.';
  
  const skills = isUa 
    ? [
        'TypeScript',
        'JavaScript (ES6+)',
        'React',
        'Next.js (App Router / Pages Router)',
        'Фронтенд архітектура',
        'Управління станом (Zustand, Redux, Context API)',
        'UI Інженерія (Tailwind CSS, CSS Modules)',
        'Оптимізація Core Web Vitals для SEO',
        'Анімація (GSAP, Framer Motion)',
      ]
    : [
        'TypeScript',
        'JavaScript (ES6+)',
        'React',
        'Next.js (App Router / Pages Router)',
        'Frontend Architecture',
        'State Management (Zustand, Redux, Context API)',
        'UI Engineering (Tailwind CSS, CSS Modules)',
        'Core Web Vitals Optimization for SEO',
        'Animations (GSAP, Framer Motion)',
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
    ? 'Ірина Винниченко — Senior Web & Frontend Розробник'
    : 'Iryna Vynnychenko — Senior Web & Frontend Engineer';
  const description = isUa 
    ? 'Портфоліо та блог Ірини Винниченко. Розробка високопродуктивних React / Next.js вебдодатків та продуктова інженерія.'
    : 'Portfolio and blog of Iryna Vynnychenko. High-performance React / Next.js development & product engineering.';

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
