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
    slug: 'why-your-business-needs-a-website',
    title: 'Why Instagram and TikTok Are Not Enough — Your Business Still Needs a Website',
    excerpt:
      'Social media brings attention. A website brings trust. Here is why serious businesses invest in their own home on the web.',
    date: '2026-07-01',
    readTime: '5 min',
    tags: ['Business', 'Website', 'Strategy'],
    content: [
      {
        paragraphs: [
          'Instagram and TikTok are powerful for reach. They help you show personality, run campaigns, and meet customers where they already scroll. But when someone is deciding whether to trust you with their money, their time, or a real project — they look for more than a feed.',
          'A website is not a luxury add-on. It is the signal that your business is established, intentional, and worth taking seriously.',
        ],
      },
      {
        heading: 'Social media builds visibility. A website builds credibility.',
        paragraphs: [
          'Profiles come and go. Algorithms change. Accounts get restricted. A website you own is stable ground — your name, your offer, your proof, in one place you control.',
          'Clients, partners, and investors expect it. A clear, fast, professional site answers the questions social posts never fully cover: who you are, what you do, how you work, and why they should choose you.',
        ],
      },
      {
        heading: 'What a business website should communicate',
        paragraphs: [
          'You do not need dozens of pages. You need a focused presence that sounds confident and reads easily — even on a phone between two TikToks.',
        ],
        list: [
          'What you do — in plain language, without buzzwords',
          'Who you help — and what problem you solve for them',
          'Proof — case studies, results, reviews, or shipped work',
          'How to start — one clear contact path, not five scattered links',
        ],
      },
      {
        heading: 'Trust signals that social alone cannot provide',
        paragraphs: [],
        list: [
          'A custom domain (yourbrand.com) — not just a link-in-bio page',
          'Structured service pages that show depth, not just highlights',
          'SEO visibility — so people find you when they search, not only when you post',
          'Professional email and contact flow tied to your brand',
          'A foundation for payments, booking, forms, and future product features',
        ],
      },
      {
        heading: 'The best setup: social + website, working together',
        paragraphs: [
          'Use Instagram and TikTok to attract attention. Send that traffic to a website that converts interest into action — a call, a quote request, a signup, a sale.',
          'Think of social as the handshake. The website is the meeting room where business actually happens.',
        ],
      },
      {
        heading: 'What this looks like in practice',
        paragraphs: [
          'A strong business site does not need to be huge. It needs to be clear, fast, and credible. That means sharp copy, mobile-first layout, fast load times, and a structure that grows with you — from a landing page today to a full product tomorrow.',
          'I build exactly that: lean, high-performance websites and web products with React and Next.js. 4,200+ Upwork hours, 8+ years in production, 100+ launched projects — from business landing pages to complex frontend platforms. TypeScript, performance optimization, SEO-ready architecture, and clean code you can maintain long after launch.',
          'If your business lives on social but your website is missing, outdated, or just a template — that gap is costing you trust. Reach out via the contacts below. We can map what you need in one short call.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-find-web-developer',
    title: 'How to Find a Web Developer for Your Project (Without Wasting Time or Budget)',
    excerpt:
      'Searching for a web developer can feel overwhelming. Here is a practical guide to finding the right person — fast, safely, and with confidence.',
    date: '2026-04-01',
    readTime: '6 min',
    tags: ['Web Developer', 'Hiring', 'Freelance'],
    content: [
      {
        paragraphs: [
          'Whether you need a landing page, a full product rebuild, or ongoing maintenance, finding the right web developer is one of the most important decisions you will make. The market is full of options — agencies, freelancers, offshore teams — and not all of them deliver what they promise.',
          'This guide helps you cut through the noise and hire a web developer who actually fits your project, timeline, and budget.',
        ],
      },
      {
        heading: 'Define what you need before you search',
        paragraphs: [
          'Vague briefs attract vague proposals. Before posting a job or reaching out, clarify:',
        ],
        list: [
          'Project type — website, web app, redesign, or ongoing support',
          'Must-have features — forms, payments, user accounts, CMS, integrations',
          'Tech preferences — or openness to recommendations (React, Next.js, WordPress)',
          'Timeline and budget range — even a rough estimate saves weeks of back-and-forth',
        ],
      },
      {
        heading: 'Where to look for a web developer',
        paragraphs: [
          'Each channel has trade-offs. Choose based on how much control and direct communication you want.',
        ],
        list: [
          'Freelance platforms (Upwork, Toptal) — large talent pool, reviews, escrow protection',
          'LinkedIn — good for senior developers with verifiable work history',
          'Referrals — trusted recommendations from founders or product teams',
          'Developer portfolios — find someone whose shipped work matches your vision',
        ],
      },
      {
        heading: 'What to check in a web developer\'s profile',
        paragraphs: [
          'Do not hire based on price alone. A cheap developer who delivers broken code costs more than a senior one who ships right the first time.',
        ],
        list: [
          'Live projects you can visit — not just Dribbble mockups',
          'Relevant stack experience (React, Next.js, TypeScript for modern products)',
          'Client reviews mentioning communication, deadlines, and post-launch support',
          'Willingness to jump on a video call before signing anything',
        ],
      },
      {
        heading: 'Questions to ask on the first call',
        paragraphs: [],
        list: [
          'How would you approach this project technically?',
          'What is included in your estimate — and what is not?',
          'How do you handle revisions, bugs, and post-launch support?',
          'Can you share a similar project you have shipped recently?',
        ],
      },
      {
        heading: 'Red flags when hiring a web developer',
        paragraphs: [
          'No questions about your business goals, unrealistically low bids, refusal to sign an NDA, or no staging environment for review — these are signs to keep looking.',
          'A reliable web developer will be transparent about scope, communicate proactively, and treat your project like a long-term partnership, not a one-off ticket.',
        ],
      },
      {
        heading: 'Working with a senior freelance web developer',
        paragraphs: [
          'If you are looking for a web developer who handles the full cycle — from architecture to deployment and ongoing improvements — working directly with a senior freelancer cuts agency overhead and keeps communication fast.',
          'I work with clients worldwide on React and Next.js projects: 4,200+ Upwork hours, 100+ launched products, and a focus on performance, clean code, and long-term collaboration. Reach out via the contacts below — happy to discuss your project on a quick call.',
        ],
      },
    ],
  },
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

export const BLOG_POSTS_PER_PAGE = 4

export function getBlogPageCount(): number {
  return Math.ceil(blogPosts.length / BLOG_POSTS_PER_PAGE)
}

export function getBlogPostsForPage(page: number): BlogPost[] {
  const start = (page - 1) * BLOG_POSTS_PER_PAGE
  return blogPosts.slice(start, start + BLOG_POSTS_PER_PAGE)
}

export function getBlogPagePath(page: number): string {
  return page === 1 ? '/blog/' : `/blog/page/${page}/`
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
