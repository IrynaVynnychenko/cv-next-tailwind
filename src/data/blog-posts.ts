export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  content: BlogSection[]
}

export type BlogSection = {
  heading?: string
  paragraphs: string[]
  list?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-your-business-needs-nextjs',
    title: 'Why Your Business Needs a High-Performance Next.js Website',
    excerpt:
      'Slow websites lose customers before they even see your offer. Here is why Next.js is the smart choice for business growth.',
    date: '2026-03-15',
    readTime: '5 min',
    tags: ['Next.js', 'Performance', 'Business'],
    content: [
      {
        paragraphs: [
          'Your website is often the first impression potential clients get. If it loads slowly, looks outdated on mobile, or breaks during traffic spikes, you lose trust — and revenue — before a conversation even starts.',
          'Next.js gives you a modern foundation: fast page loads, SEO-friendly rendering, and a stack that scales from landing pages to full product platforms.',
        ],
      },
      {
        heading: 'What you gain with Next.js',
        paragraphs: [],
        list: [
          'Faster load times that improve conversion rates and search rankings',
          'Server-side rendering and static generation for better SEO',
          'A maintainable codebase that grows with your product',
          'Smooth mobile experience — where most of your traffic lives',
        ],
      },
      {
        heading: 'When it makes sense to invest',
        paragraphs: [
          'If you are launching a new product, redesigning an outdated site, or struggling with poor Core Web Vitals scores, a Next.js rebuild pays off quickly. Clients typically see measurable improvements in bounce rate and lead quality within weeks of launch.',
          'I help businesses move from slow WordPress themes or legacy React apps to lean, high-performance Next.js products — without disrupting your live operations.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-choose-frontend-developer',
    title: 'How to Choose the Right Frontend Developer for Your Project',
    excerpt:
      'Not all developers deliver the same value. A practical checklist for founders and product owners hiring for web projects.',
    date: '2026-03-08',
    readTime: '6 min',
    tags: ['Hiring', 'Freelance', 'Tips'],
    content: [
      {
        paragraphs: [
          'Hiring a web developer is one of the highest-impact decisions for your digital product. The wrong choice costs months of rework; the right one accelerates everything — from launch timeline to long-term maintenance.',
        ],
      },
      {
        heading: 'Look beyond the portfolio screenshot',
        paragraphs: [
          'Ask how the project performs today, not just how it looked on launch day. Can they explain architecture decisions? Do they mention accessibility, performance budgets, or deployment strategy?',
        ],
        list: [
          'Clear communication and proactive updates during the project',
          'Experience with your stack (React, Next.js, TypeScript)',
          'Proof of shipped, live products — not just mockups',
          'Willingness to sign an NDA and work within your timezone',
          'A mindset for long-term support, not one-off delivery',
        ],
      },
      {
        heading: 'Red flags to watch for',
        paragraphs: [
          'Vague estimates, no questions about your business goals, or reluctance to do a video call are warning signs. A senior developer will challenge assumptions, suggest better approaches, and document what they build.',
          'On platforms like Upwork, look at total hours, repeat clients, and detailed reviews — not just a top rating.',
        ],
      },
    ],
  },
  {
    slug: 'core-web-vitals-and-revenue',
    title: 'Core Web Vitals: Why Website Speed Directly Affects Revenue',
    excerpt:
      'Google measures user experience — and so do your customers. Learn how performance metrics tie to real business outcomes.',
    date: '2026-02-22',
    readTime: '4 min',
    tags: ['Performance', 'SEO', 'Core Web Vitals'],
    content: [
      {
        paragraphs: [
          'Core Web Vitals (LCP, INP, CLS) are Google\'s way of scoring how real users experience your site. Poor scores mean lower search visibility and frustrated visitors who leave before converting.',
        ],
      },
      {
        heading: 'The business impact',
        paragraphs: [
          'Studies consistently show that every second of delay increases bounce rate. For e-commerce and SaaS, that translates directly into lost signups and sales. Speed is not a technical nice-to-have — it is a revenue lever.',
        ],
        list: [
          'Largest Contentful Paint (LCP): how fast main content appears',
          'Interaction to Next Paint (INP): how responsive the site feels',
          'Cumulative Layout Shift (CLS): visual stability while loading',
        ],
      },
      {
        heading: 'What a performance-focused developer does',
        paragraphs: [
          'Optimizing images, lazy-loading non-critical assets, reducing JavaScript bundles, and choosing the right rendering strategy are not buzzwords — they are the work that moves the needle.',
          'I audit existing sites and build new ones with performance budgets from day one, so you do not pay twice to fix speed issues after launch.',
        ],
      },
    ],
  },
  {
    slug: 'react-vs-wordpress-for-business',
    title: 'React vs WordPress: What Is Better for Your Business Website?',
    excerpt:
      'WordPress is familiar; React is flexible. Here is an honest comparison to help you pick the right platform.',
    date: '2026-02-10',
    readTime: '5 min',
    tags: ['React', 'WordPress', 'Strategy'],
    content: [
      {
        paragraphs: [
          'WordPress powers a huge share of the web — and for good reason. It is fast to set up for simple blogs and brochure sites. But when your needs grow beyond templates and plugins, its limitations show up quickly.',
        ],
      },
      {
        heading: 'When WordPress still makes sense',
        paragraphs: [],
        list: [
          'Small content sites with minimal custom functionality',
          'Teams that need non-technical editors updating pages daily',
          'Tight budgets and no plans to scale features',
        ],
      },
      {
        heading: 'When React / Next.js is the better investment',
        paragraphs: [],
        list: [
          'Custom dashboards, booking flows, or user accounts',
          'Integrations with APIs, CRMs, or payment systems',
          'Performance and security requirements plugins cannot meet',
          'A product roadmap that will evolve over years',
        ],
      },
      {
        heading: 'The hybrid path',
        paragraphs: [
          'Many clients start on WordPress and migrate once they outgrow it. I help plan that transition so you keep SEO equity and avoid downtime. The goal is always the right tool for where your business is heading — not where it was three years ago.',
        ],
      },
    ],
  },
  {
    slug: 'working-with-freelance-web-developer',
    title: 'What to Expect When Working with a Freelance Web Developer',
    excerpt:
      'A transparent look at the process — from first call to launch and ongoing support — so you know exactly what you are signing up for.',
    date: '2026-01-28',
    readTime: '5 min',
    tags: ['Process', 'Collaboration', 'Freelance'],
    content: [
      {
        paragraphs: [
          'Working with a freelancer should feel like adding a senior team member, not managing an agency black box. Here is how I structure projects so clients stay informed and in control.',
        ],
      },
      {
        heading: 'Typical project flow',
        paragraphs: [],
        list: [
          'Discovery call — goals, timeline, tech constraints, and budget alignment',
          'Scope document — clear deliverables, milestones, and communication channels',
          'Design & build — iterative updates with regular demos (video calls welcome)',
          'QA & launch — cross-browser testing, performance check, deployment',
          'Post-launch support — bug fixes, improvements, and scaling as you grow',
        ],
      },
      {
        heading: 'How I keep collaboration smooth',
        paragraphs: [
          'Fast response times, written summaries after calls, and access to staging environments so you can review progress anytime. NDA and direct communication via email, Telegram, or WhatsApp — no middlemen.',
          'With 4,200+ hours on Upwork and 100+ launched projects, I have seen what derails projects (unclear requirements, scope creep without documentation) and what makes them succeed (trust, consistency, and a developer who thinks like a product partner).',
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
