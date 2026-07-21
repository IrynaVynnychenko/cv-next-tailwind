export type BlogSection = {
  heading?: string
  paragraphs: string[]
  list?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  content: BlogSection[]
}

type LocalizedText = {
  en: string
  ua: string
}

type LocalizedSection = {
  heading?: LocalizedText
  paragraphs: LocalizedText[]
  list?: LocalizedText[]
}

type RawBlogPost = {
  slug: string
  date: string
  title: LocalizedText
  excerpt: LocalizedText
  readTime: LocalizedText
  tags: { en: string[]; ua: string[] }
  content: LocalizedSection[]
}

export const rawBlogPosts: RawBlogPost[] = [
  {
    slug: 'when-business-needs-a-website',
    date: '2026-07-21',
    title: {
      en: 'When Does Your Business Need a Website — And Why It Is Essential',
      ua: 'Коли потрібен сайт — сторінка в інтернеті вашого бізнесу і чому',
    },
    excerpt: {
      en: 'Social media brings attention, but a website builds trust and scales your business. Learn when your business critically needs a website and why.',
      ua: 'Соціальні мережі привертають увагу, але власний сайт будує довіру та масштабує бізнес. Розбираємо, коли бізнесу критично потрібен сайт і чому.',
    },
    readTime: {
      en: '6 min read',
      ua: '6 хв читання',
    },
    tags: {
      en: ['Business', 'Website', 'Strategy', 'Development'],
      ua: ['Бізнес', 'Вебсайт', 'Стратегія', 'Розробка'],
    },
    content: [
      {
        paragraphs: [
          {
            en: 'Many small businesses and entrepreneurs start selling their products or services through Instagram, TikTok, or Telegram. It is fast, easy, and low-cost. However, as your business grows, there comes a point where a social media profile alone is no longer enough.',
            ua: 'Багато підприємців-початківців та малого бізнесу починають продавати свої послуги чи товари через Instagram, TikTok або Telegram. Це швидко, зручно та не потребує стартових інвестицій. Проте з ростом бізнесу настає момент, коли одного профілю в соціальних мережах стає замало.',
          },
          {
            en: 'In 2026, a website is not just a luxury add-on — it is your digital headquarters that belongs 100% to you, works 24/7 without days off, and systematically turns visitors into paying clients.',
            ua: 'У 2026 році власний сайт — це не додаткова розкіш чи статусна річ. Це цифровий офіс вашої компанії, який належить вам на 100%, працює без вихідних 24/7 і системно перетворює відвідувачів на клієнтів.',
          },
        ],
      },
      {
        heading: {
          en: 'When does a business critically need a website?',
          ua: 'Коли бізнесу критично потрібен власний сайт?',
        },
        paragraphs: [
          {
            en: 'Here are the key signals that tell you it is time to move beyond social media profiles and launch your own web platform:',
            ua: 'Ось головні сигнали того, що вашому бізнесу час виходити за межі соціальних мереж та створювати власну веб-платформу:',
          },
        ],
        list: [
          {
            en: '1. Structured info needed — your pricing, detailed service list, portfolio, or FAQs get buried in social feeds.',
            ua: '1. Потрібна структурована інформація — прайс, детальний опис послуг, портфоліо чи FAQ губляться у стрічці соцмереж.',
          },
          {
            en: '2. Automation required — you need automated bookings, inquiry forms, or payments without managing DM messages manually.',
            ua: '2. Потрібна автоматизація — ви хочете приймати заявки, бронювання чи оплату без постійної участі менеджера в чаті.',
          },
          {
            en: '3. Google Search & Ads — you want to capture high-intent search traffic from Google (SEO & Google Ads).',
            ua: '3. Пошук у Google та реклама — ви хочете залучати гарячий трафік із пошуку Google (SEO) та контекстної реклами.',
          },
          {
            en: '4. B2B & Enterprise partners — corporate clients, B2B partners, and investors expect a professional website as proof of credibility.',
            ua: '4. Робота в B2B або з корпоративними клієнтами — партнери та інвестори вважають наявність сайту обов\'язковим стандартом довіри.',
          },
          {
            en: '5. Overwhelmed DMs — order volume is growing and social messages create operational friction and lost sales.',
            ua: '5. Перевантажені месенджери — обсяг замовлень зростає і хаос у приватних повідомленнях призводить до втрати клієнтів.',
          },
        ],
      },
      {
        heading: {
          en: 'Why social media alone is not enough',
          ua: 'Чому соцмережі не замінять власний сайт?',
        },
        paragraphs: [
          {
            en: 'Social media channels are great for awareness and top-of-funnel reach. But relying exclusively on third-party platforms creates major vulnerabilities:',
            ua: 'Соціальні мережі — це чудова площадка для залучення уваги та першого знайомства. Проте покладатися виключно на них ризиковано з кількох важливих причин:',
          },
        ],
        list: [
          {
            en: 'You do not own your profile — algorithm updates, reach drops, or account bans can halt your revenue overnight.',
            ua: 'Акаунт вам не належить — зміни алгоритмів, падіння охоплень або раптове блокування акаунту можуть миттєво зупинити всі ваші продажі.',
          },
          {
            en: 'Limited navigation — prospective clients struggle to find older posts, detailed terms, or exact pricing.',
            ua: 'Складна навігація — у соцмережах важко знайти інформацію, опубліковану місяць тому, а ціни та деталі швидко губляться.',
          },
          {
            en: 'No organic Google SEO search presence — people search Google when they are ready to buy, not Instagram.',
            ua: 'Відсутність пошукового трафіку — коли люди шукають вирішення конкретної проблеми, вони йдуть у Google, а не в пошук Instagram.',
          },
          {
            en: 'Constrained branding — social feeds look identical for every profile; a website offers a unique brand experience.',
            ua: 'Обмежений брендинг — у соцмережах ваш бренд обмежений рамками стандартного інтерфейсу платформи.',
          },
        ],
      },
      {
        heading: {
          en: 'Why a website converts interest into real business',
          ua: 'Чому саме сайт перетворює зацікавленість на реальні угоди',
        },
        paragraphs: [
          {
            en: 'A dedicated website acts as the central hub for all your digital marketing efforts and sales funnels:',
            ua: 'Власний сайт виконує роль головного хабу всієї вашої маркетингової активності та воронок продажів:',
          },
        ],
        list: [
          {
            en: 'Total ownership & stability — your own domain name (yourcompany.dev), custom design, and full data control.',
            ua: 'Незалежність та повний контроль — власний домен (yourcompany.dev), свій дизайн, ваші правила та цілковита стабільність.',
          },
          {
            en: 'Instant credibility & trust — a fast, modern website shows clients that your business is legitimate and established.',
            ua: 'Формування довіри — якісний та швидкий сайт миттєво підвищує статус вашої компанії в очах клієнтів.',
          },
          {
            en: 'Business process automation — direct integrations with CRMs, payment gateways, calendar schedulers, and analytics.',
            ua: 'Автоматизація процесів — інтеграція з CRM-системами, платіжними шлюзами, онлайн-записом та аналітикою.',
          },
          {
            en: '24/7 availability — clients can explore options, calculate prices, and place orders at any hour of the day.',
            ua: '24/7 доступність — клієнт може ознайомитися з пропозицією та залишити заявку чи здійснити покупку навіть уночі.',
          },
        ],
      },
      {
        heading: {
          en: 'Which type of website does your business need?',
          ua: 'Який формат сайту підійде саме вашому бізнесу?',
        },
        paragraphs: [
          {
            en: 'You do not need to build a massive portal from day one. Choose a site structure based on your current business stage:',
            ua: 'Вам не обов\'язково одразу будувати складну та дороговартісну систему. Формат сайту залежить від конкретних завдань вашого бізнесу:',
          },
        ],
        list: [
          {
            en: 'Landing Page (One-page site) — ideal for showcasing a specific product, service, or lead magnet with max conversion focus.',
            ua: 'Landing Page (Односторінковий сайт) — ідеально для презентації конкретного товару, послуги чи спецпропозиції з фокусом на високу конверсію.',
          },
          {
            en: 'Business Card / Portfolio — concise presentation of specialist skills, agency services, project cases, and contact paths.',
            ua: 'Сайт-візитка / Портфоліо — презентація компанії, фахівця чи студії з переліком послуг, кейсів та зручними контактами.',
          },
          {
            en: 'Corporate Website — multi-page platform for growing companies with service hubs, blog/news, and team profiles.',
            ua: 'Корпоративний сайт — багатосторінковий ресурс для середнього та великого бізнесу із деталізацією всіх напрямків діяльності.',
          },
          {
            en: 'Web Application / E-commerce — interactive platforms featuring custom user portals, shopping carts, and dynamic workflows.',
            ua: 'Web Application / E-commerce — складні ресурси з інтернет-магазином, особистими кабінетами та інтерактивними функціями.',
          },
        ],
      },
      {
        heading: {
          en: 'How to build a website that delivers real revenue',
          ua: 'Як створити сайт, який реально працюватиме та приноситиме прибуток',
        },
        paragraphs: [
          {
            en: 'A successful business site must be fast, mobile-friendly, accessible, and optimized for search engine algorithms (SEO). Slow sites lose visitors before they even read the first paragraph.',
            ua: 'Щоб сайт працював і приносити результати, він має бути не просто красивим, а й технічно досконалим: миттєво завантажуватися (Google PageSpeed 90+), мати зручну мобільну версію та продуманий UX/UI.',
          },
          {
            en: 'I specialize in building lean, ultra-fast websites and web applications using Next.js and React. With 8+ years of production experience, 4,200+ Upwork hours, and 100+ launched projects, I make sure your website looks premium and converts traffic into customers.',
            ua: 'Я спеціалізуюся на створенні сучасних, надшвидких та оптимізованих сайтів на технологіях React та Next.js. Понад 8 років досвіду, 4 200+ годин на Upwork та 100+ реалізованих проєктів гарантують, що ваш сайт стане потужним інструментом зростання вашого бізнесу.',
          },
          {
            en: 'If your business is ready for its own digital home or needs a modern upgrade for an existing site — feel free to reach out via the contacts below for a free initial consultation!',
            ua: 'Якщо ви хочете створити свій перший сайт або оновити застарілий — зв\'яжіться зі мною через контакти нижче, і ми обговоримо найкраще рішення для вашого проєкту!',
          },
        ],
      },
    ],
  },
  {
    slug: 'why-your-business-needs-a-website',
    date: '2026-07-01',
    title: {
      en: 'Why Instagram and TikTok Are Not Enough — Your Business Still Needs a Website',
      ua: 'Чому Instagram та TikTok недостатньо — Вашому бізнесу все одно потрібен власний сайт',
    },
    excerpt: {
      en: 'Social media brings attention. A website brings trust. Here is why serious businesses invest in their own home on the web.',
      ua: 'Соціальні мережі привертають увагу, а сайт будує довіру. Чому серйозні компанії інвестують у власну веб-платформу.',
    },
    readTime: {
      en: '5 min read',
      ua: '5 хв читання',
    },
    tags: {
      en: ['Business', 'Website', 'Strategy'],
      ua: ['Бізнес', 'Вебсайт', 'Стратегія'],
    },
    content: [
      {
        paragraphs: [
          {
            en: 'Instagram and TikTok are powerful for reach. They help you show personality, run campaigns, and meet customers where they already scroll. But when someone is deciding whether to trust you with their money, their time, or a real project — they look for more than a feed.',
            ua: 'Instagram та TikTok дають чудове охоплення. Вони допомагають показати брендовость, запускати кампанії та знаходити клієнтів там, де вони гортають стрічку. Але коли людина вирішує, чи довірити вам свої гроші, час або реальний проєкт — вона шукає більше, ніж просто сторінку в соцмережах.',
          },
          {
            en: 'A website is not a luxury add-on. It is the signal that your business is established, intentional, and worth taking seriously.',
            ua: 'Власний сайт — це не додаткова розкіш. Це показник того, що ваш бізнес стабільний, системний та вартий довіри.',
          },
        ],
      },
      {
        heading: {
          en: 'Social media builds visibility. A website builds credibility.',
          ua: 'Соцмережі дають видимість. Сайт створює авторитет.',
        },
        paragraphs: [
          {
            en: 'Profiles come and go. Algorithms change. Accounts get restricted. A website you own is stable ground — your name, your offer, your proof, in one place you control.',
            ua: 'Профілі з\'являються і зникають. Алгоритми змінюються. Акаунти можуть блокуватися. Сайт, яким володієте ви — це стабільний фундамент: ваше ім\'я, ваші послуги та докази якості в одному місці, яке контролюєте ви.',
          },
          {
            en: 'Clients, partners, and investors expect it. A clear, fast, professional site answers the questions social posts never fully cover: who you are, what you do, how you work, and why they should choose you.',
            ua: 'Клієнти, партнери та інвестори очікують цього. Зрозумілий, швидкий та професійний сайт дає відповіді на питання, які соцмережі не можуть розкрити повністю: хто ви, що робите, як працюєте та чому варто обрати саме вас.',
          },
        ],
      },
      {
        heading: {
          en: 'What a business website should communicate',
          ua: 'Що повинен доносити якісний сайт бізнесу',
        },
        paragraphs: [
          {
            en: 'You do not need dozens of pages. You need a focused presence that sounds confident and reads easily — even on a phone between two TikToks.',
            ua: 'Вам не потрібні десятки складних сторінок. Потрібна чітка та переконлива презентація, яка легко читається навіть зі смартфона.',
          },
        ],
        list: [
          {
            en: 'What you do — in plain language, without buzzwords',
            ua: 'Чим ви займаєтеся — простою та зрозумілою мовою',
          },
          {
            en: 'Who you help — and what problem you solve for them',
            ua: 'Кому ви допомагаєте — і яку саме проблему вирішуєте',
          },
          {
            en: 'Proof — case studies, results, reviews, or shipped work',
            ua: 'Докази — кейси, результати, відгуки та реальні проєкти',
          },
          {
            en: 'How to start — one clear contact path, not five scattered links',
            ua: 'Як почати співпрацю — один чіткий спосіб зв\'язку',
          },
        ],
      },
      {
        heading: {
          en: 'Trust signals that social alone cannot provide',
          ua: 'Фактори довіри, які не дадуть самі соцмережі',
        },
        paragraphs: [],
        list: [
          {
            en: 'A custom domain (yourbrand.com) — not just a link-in-bio page',
            ua: 'Власний домен (yourbrand.com) — а не просто посилання в профілі',
          },
          {
            en: 'Structured service pages that show depth, not just highlights',
            ua: 'Структуровані сторінки послуг, які показують експертність',
          },
          {
            en: 'SEO visibility — so people find you when they search, not only when you post',
            ua: 'SEO-оптимізація — щоб вас знаходили через Google пошук',
          },
          {
            en: 'Professional email and contact flow tied to your brand',
            ua: 'Професійна корпоративна пошта та зручні контакти',
          },
          {
            en: 'A foundation for payments, booking, forms, and future product features',
            ua: 'Готова основа для оплати, бронювання, форм та функціоналу',
          },
        ],
      },
      {
        heading: {
          en: 'The best setup: social + website, working together',
          ua: 'Найкраща зв\'язка: соцмережі + сайт разом',
        },
        paragraphs: [
          {
            en: 'Use Instagram and TikTok to attract attention. Send that traffic to a website that converts interest into action — a call, a quote request, a signup, a sale.',
            ua: 'Використовуйте Instagram та TikTok для залучення уваги. І направляйте цей трафік на сайт, який перетворює зацікавленість у дію — заявку, дзвінок або покупку.',
          },
          {
            en: 'Think of social as the handshake. The website is the meeting room where business actually happens.',
            ua: 'Уявіть соцмережі як знайомство та рукостискання. А сайт — це кімната переговорів, де укладаються угоди.',
          },
        ],
      },
      {
        heading: {
          en: 'What this looks like in practice',
          ua: 'Як це працює на практиці',
        },
        paragraphs: [
          {
            en: 'A strong business site does not need to be huge. It needs to be clear, fast, and credible. That means sharp copy, mobile-first layout, fast load times, and a structure that grows with you.',
            ua: 'Сильний сайт для бізнесу не має бути громіздким. Він повинен бути чітким, швидким та переконливим — із мобільною адаптацією та високою швидкістю завантаження.',
          },
          {
            en: 'I build exactly that: lean, high-performance websites and web products with React and Next.js. 4,200+ Upwork hours, 8+ years in production, 100+ launched projects. TypeScript, performance optimization, SEO-ready architecture, and clean code.',
            ua: 'Я створюю саме такі сайти: швидкі, сучасні та надійні веб-проєкти на React та Next.js. Понад 4 200+ годин на Upwork, 8+ років досвіду, 100+ запущених проєктів. TypeScript, оптимізація швидкості, готове SEO та чистий код.',
          },
          {
            en: 'If your business lives on social but your website is missing, outdated, or just a template — reach out via the contacts below. We can map what you need in one short call.',
            ua: 'Якщо ваш бізнес є в соцмережах, але сайту немає або він застарів — зв\'яжіться зі мною через контакти нижче. Ми обговоримо ваші завдання під час короткого дзвінка.',
          },
        ],
      },
    ],
  },
  {
    slug: 'how-to-find-web-developer',
    date: '2026-04-01',
    title: {
      en: 'How to Find a Web Developer for Your Project (Without Wasting Time or Budget)',
      ua: 'Як знайти веб-розробника для вашого проєкту (без втрати часу та бюджету)',
    },
    excerpt: {
      en: 'Searching for a web developer can feel overwhelming. Here is a practical guide to finding the right person — fast, safely, and with confidence.',
      ua: 'Пошук веб-розробника може здаватися складним завданням. Ось практичний посібник, як знайти потрібного фахівця швидко та надійно.',
    },
    readTime: {
      en: '6 min read',
      ua: '6 хв читання',
    },
    tags: {
      en: ['Web Developer', 'Hiring', 'Freelance'],
      ua: ['Веб-розробник', 'Найм', 'Фриланс'],
    },
    content: [
      {
        paragraphs: [
          {
            en: 'Whether you need a landing page, a full product rebuild, or ongoing maintenance, finding the right web developer is one of the most important decisions you will make. The market is full of options — agencies, freelancers, offshore teams.',
            ua: 'Незалежно від того, чи потрібен вам лендинг, перезапуск продукту чи постійна підтримка сайту, вибір веб-розробника — одне з найважливіших рішень для вашого бізнесу.',
          },
          {
            en: 'This guide helps you cut through the noise and hire a web developer who actually fits your project, timeline, and budget.',
            ua: 'Цей посібник допоможе відсіяти зайве та знайти фахівця, який ідеально підійде під ваш проєкт, терміни та бюджет.',
          },
        ],
      },
      {
        heading: {
          en: 'Define what you need before you search',
          ua: 'Визначте свої потреби перед пошуком',
        },
        paragraphs: [
          {
            en: 'Vague briefs attract vague proposals. Before posting a job or reaching out, clarify:',
            ua: 'Нечітке завдання веде до нечітких пропозицій. Перед публікацією або зверненням сформулюйте:',
          },
        ],
        list: [
          {
            en: 'Project type — website, web app, redesign, or ongoing support',
            ua: 'Тип проєкту — сайт, веб-додаток, редизайн чи підтримка',
          },
          {
            en: 'Must-have features — forms, payments, user accounts, CMS, integrations',
            ua: 'Обов\'язковий функціонал — форми, оплата, кабінети, інтеграції',
          },
          {
            en: 'Tech preferences — React, Next.js, or openness to recommendations',
            ua: 'Побажання щодо технологій — React, Next.js або відкритість до порад',
          },
          {
            en: 'Timeline and budget range — even a rough estimate saves weeks',
            ua: 'Орієнтовні терміни та бюджет — це зекономить тижні обговорень',
          },
        ],
      },
      {
        heading: {
          en: 'Where to look for a web developer',
          ua: 'Де шукати веб-розробника',
        },
        paragraphs: [
          {
            en: 'Choose based on how much control and direct communication you want.',
            ua: 'Обирайте майданчик залежно від того, наскільки пряма комунікація вам потрібна.',
          },
        ],
        list: [
          {
            en: 'Freelance platforms (Upwork, Toptal) — large talent pool, reviews, escrow protection',
            ua: 'Фриланс-платформи (Upwork, Toptal) — велика база, відгуки, захист угод',
          },
          {
            en: 'LinkedIn — good for senior developers with verifiable work history',
            ua: 'LinkedIn — чудово підходить для пошуку досвідчених розробників',
          },
          {
            en: 'Referrals — trusted recommendations from founders or product teams',
            ua: 'Рекомендації — випробувані поради від знайомих підприємців',
          },
          {
            en: 'Developer portfolios — find someone whose shipped work matches your vision',
            ua: 'Портфоліо — знайдіть розробника, чиї роботи відповідають вашому баченню',
          },
        ],
      },
      {
        heading: {
          en: 'What to check in a web developer\'s profile',
          ua: 'На що звертати увагу в профілі розробника',
        },
        paragraphs: [
          {
            en: 'Do not hire based on price alone. A cheap developer who delivers broken code costs more than a senior one who ships right the first time.',
            ua: 'Не орієнтуйтеся лише на низьку ціну. Недосвідчений розробник із помилками в коді зрештою коштуватиме дорожче, ніж Senior-фахівець, який зробить усе якісно з першого разу.',
          },
        ],
        list: [
          {
            en: 'Live projects you can visit — not just static mockups',
            ua: 'Реальні працюючі сайти — а не лише картинки дизайну',
          },
          {
            en: 'Relevant stack experience (React, Next.js, TypeScript for modern products)',
            ua: 'Досвід у потрібному стеку (React, Next.js, TypeScript)',
          },
          {
            en: 'Client reviews mentioning communication, deadlines, and support',
            ua: 'Відгуки клієнтів про дотримання термінів та комунікацію',
          },
          {
            en: 'Willingness to jump on a video call before signing anything',
            ua: 'Готовність провести відеодзвінок до початку співпраці',
          },
        ],
      },
      {
        heading: {
          en: 'Working with a senior freelance web developer',
          ua: 'Співпраця з досвідченим фриланс-розробником',
        },
        paragraphs: [
          {
            en: 'If you are looking for a web developer who handles the full cycle — from architecture to deployment and ongoing improvements — working directly with a senior freelancer cuts agency overhead and keeps communication fast.',
            ua: 'Якщо ви шукаєте фахівця для повного циклу розробки — від архітектури до запуску — пряма співпраця з Senior фрилансером заощаджує бюджет та забезпечує швидкий зв\'язок.',
          },
          {
            en: 'I work with clients worldwide on React and Next.js projects: 4,200+ Upwork hours, 100+ launched products, and a focus on performance, clean code, and long-term collaboration.',
            ua: 'Я працюю з клієнтами по всьому світу над React та Next.js проєктами: 4 200+ годин на Upwork, 100+ запущених сайтів, акцент на швидкості, чистому коді та довготривалій підтримці.',
          },
        ],
      },
    ],
  },
  {
    slug: 'why-your-business-needs-nextjs',
    date: '2026-03-15',
    title: {
      en: 'Why Your Business Needs a High-Performance Next.js Website',
      ua: 'Чому вашому бізнесу потрібен високопродуктивний сайт на Next.js',
    },
    excerpt: {
      en: 'Slow websites lose customers before they even see your offer. Here is why Next.js is the smart choice for business growth.',
      ua: 'Повільні сайти втрачають клієнтів ще до того, як вони побачать пропозицію. Чому Next.js — розумний вибір для зростання бізнесу.',
    },
    readTime: {
      en: '5 min read',
      ua: '5 хв читання',
    },
    tags: {
      en: ['Next.js', 'Performance', 'Business'],
      ua: ['Next.js', 'Продуктивність', 'Бізнес'],
    },
    content: [
      {
        paragraphs: [
          {
            en: 'Your website is often the first impression potential clients get. If it loads slowly, looks outdated on mobile, or breaks during traffic spikes, you lose trust and revenue.',
            ua: 'Ваш сайт — це перше враження для потенційних клієнтів. Якщо він повільно завантажується або виглядає застарілим на мобільному, ви втрачаєте замовлення.',
          },
          {
            en: 'Next.js gives you a modern foundation: fast page loads, SEO-friendly rendering, and a stack that scales from landing pages to full product platforms.',
            ua: 'Next.js дає сучасну основу: миттєве завантаження сторінок, чудове SEO та можливість легко масштабувати проєкт у майбутньому.',
          },
        ],
      },
      {
        heading: {
          en: 'What you gain with Next.js',
          ua: 'Переваги розробки на Next.js',
        },
        paragraphs: [],
        list: [
          {
            en: 'Faster load times that improve conversion rates and search rankings',
            ua: 'Висока швидкість завантаження, що підвищує конверсію та позиції в Google',
          },
          {
            en: 'Server-side rendering and static generation for better SEO',
            ua: 'Серверний рендеринг (SSR) та генерація статики (SSG) для ідеального SEO',
          },
          {
            en: 'A maintainable codebase that grows with your product',
            ua: 'Чиста та надійна кодова база, яку легко розвивати та підтримувати',
          },
          {
            en: 'Smooth mobile experience — where most of your traffic lives',
            ua: 'Бездоганна робота на мобільних пристроях',
          },
        ],
      },
      {
        heading: {
          en: 'When it makes sense to invest',
          ua: 'Коли варто інвестувати у Next.js',
        },
        paragraphs: [
          {
            en: 'If you are launching a new product, redesigning an outdated site, or struggling with poor performance scores, a Next.js rebuild pays off quickly.',
            ua: 'Якщо ви запускаєте новий продукт, робите редизайн або маєте проблеми зі швидкістю на старому сайті — перехід на Next.js швидко виправдовує інвестиції.',
          },
          {
            en: 'I help businesses move from slow themes to lean, high-performance Next.js products — without disrupting your live operations.',
            ua: 'Я допомагаю бізнесу переходити зі повільних шаблонів на швидкі веб-проєкти Next.js без зупинки поточних продажів.',
          },
        ],
      },
    ],
  },
  {
    slug: 'how-to-choose-frontend-developer',
    date: '2026-03-08',
    title: {
      en: 'How to Choose the Right Frontend Developer for Your Project',
      ua: 'Як обрати правильного Frontend-розробника для вашого проєкту',
    },
    excerpt: {
      en: 'Not all developers deliver the same value. A practical checklist for founders and product owners hiring for web projects.',
      ua: 'Не всі розробники дають однаковий результат. Практичний чекліст для засновників та власників продуктів.',
    },
    readTime: {
      en: '6 min read',
      ua: '6 хв читання',
    },
    tags: {
      en: ['Hiring', 'Freelance', 'Tips'],
      ua: ['Найм', 'Фриланс', 'Поради'],
    },
    content: [
      {
        paragraphs: [
          {
            en: 'Hiring a web developer is one of the highest-impact decisions for your digital product. The wrong choice costs months of rework; the right one accelerates launch and maintenance.',
            ua: 'Найм веб-розробника — це відповідальне рішення. Помилка може коштувати місяців переробок, а правильний вибір прискорює запуск та економить кошти.',
          },
        ],
      },
      {
        heading: {
          en: 'Look beyond the portfolio screenshot',
          ua: 'Дивіться глибше за гарні скріншоти',
        },
        paragraphs: [
          {
            en: 'Ask how the project performs today, not just how it looked on launch day. Do they mention accessibility, performance budgets, or deployment strategy?',
            ua: 'Поцікавтеся, як працює проєкт зараз, а не лише тим, як він виглядав у макеті. Чи враховує розробник швидкість, адаптивність та безпеку?',
          },
        ],
        list: [
          {
            en: 'Clear communication and proactive updates during the project',
            ua: 'Прозора комунікація та регулярні звіти про хід роботи',
          },
          {
            en: 'Experience with your stack (React, Next.js, TypeScript)',
            ua: 'Досвід у потрібних технологіях (React, Next.js, TypeScript)',
          },
          {
            en: 'Proof of shipped, live products — not just mockups',
            ua: 'Реальні запущені сайти, якими можна скористатися',
          },
          {
            en: 'Willingness to sign an NDA and work within your timezone',
            ua: 'Готовність підписати NDA та працювати у зручному часовому поясі',
          },
          {
            en: 'A mindset for long-term support, not one-off delivery',
            ua: 'Орієнтація на довгострокову підтримку та партнерство',
          },
        ],
      },
    ],
  },
  {
    slug: 'core-web-vitals-and-revenue',
    date: '2026-02-22',
    title: {
      en: 'Core Web Vitals: Why Website Speed Directly Affects Revenue',
      ua: 'Core Web Vitals: Чому швидкість сайту напряму впливає на прибуток',
    },
    excerpt: {
      en: 'Google measures user experience — and so do your customers. Learn how performance metrics tie to real business outcomes.',
      ua: 'Google оцінює зручність сайту для користувачів — і ваші клієнти теж. Як показники швидкості впливають на продажі.',
    },
    readTime: {
      en: '4 min read',
      ua: '4 хв читання',
    },
    tags: {
      en: ['Performance', 'SEO', 'Core Web Vitals'],
      ua: ['Продуктивність', 'SEO', 'Core Web Vitals'],
    },
    content: [
      {
        paragraphs: [
          {
            en: 'Core Web Vitals (LCP, INP, CLS) are Google\'s metrics for user experience. Poor scores mean lower search visibility and frustrated visitors who leave before converting.',
            ua: 'Core Web Vitals — це показники Google для оцінки зручності сайту. Низькі бали призводять до падіння позицій у пошуку та втрати клієнтів.',
          },
        ],
      },
      {
        heading: {
          en: 'The business impact',
          ua: 'Вплив на бізнес-результати',
        },
        paragraphs: [
          {
            en: 'Studies consistently show that every second of delay increases bounce rate. Speed is not a technical nice-to-have — it is a revenue lever.',
            ua: 'Дослідження доводять: кожна секунда затримки підвищує відсоток відмов. Швидкість сайту — це важіль вашого прибутку.',
          },
        ],
        list: [
          {
            en: 'Largest Contentful Paint (LCP): how fast main content appears',
            ua: 'Largest Contentful Paint (LCP): швидкість появи основного контенту',
          },
          {
            en: 'Interaction to Next Paint (INP): how responsive the site feels',
            ua: 'Interaction to Next Paint (INP): швидкість відгуку на кліки',
          },
          {
            en: 'Cumulative Layout Shift (CLS): visual stability while loading',
            ua: 'Cumulative Layout Shift (CLS): стабільність макету під час завантаження',
          },
        ],
      },
    ],
  },
  {
    slug: 'react-vs-wordpress-for-business',
    date: '2026-02-10',
    title: {
      en: 'React vs WordPress: What Is Better for Your Business Website?',
      ua: 'React проти WordPress: Що краще обрати для сайту вашого бізнесу?',
    },
    excerpt: {
      en: 'WordPress is familiar; React is flexible. Here is an honest comparison to help you pick the right platform.',
      ua: 'WordPress звичний, а React дає повну гнучкість. Чесне порівняння, яке допоможе обрати правильну платформу.',
    },
    readTime: {
      en: '5 min read',
      ua: '5 хв читання',
    },
    tags: {
      en: ['React', 'WordPress', 'Strategy'],
      ua: ['React', 'WordPress', 'Стратегія'],
    },
    content: [
      {
        paragraphs: [
          {
            en: 'WordPress powers a huge share of the web. It is fast to set up for simple sites. But when your needs grow beyond templates and plugins, its limitations show up quickly.',
            ua: 'WordPress популярний і підходить для простих блогів. Але коли бізнес виростає з готових шаблонів та плагінів, обмеження платформи стають очевидними.',
          },
        ],
      },
      {
        heading: {
          en: 'When React / Next.js is the better investment',
          ua: 'Коли React / Next.js є кращою інвестицією',
        },
        paragraphs: [],
        list: [
          {
            en: 'Custom dashboards, booking flows, or user accounts',
            ua: 'Кастомні кабінети, системи бронювання або високі навантаження',
          },
          {
            en: 'Integrations with APIs, CRMs, or payment systems',
            ua: 'Складні інтеграції з API, CRM або платіжними системами',
          },
          {
            en: 'Performance and security requirements plugins cannot meet',
            ua: 'Вимоги до швидкості та безпеки, які не гарантують плагіни',
          },
          {
            en: 'A product roadmap that will evolve over years',
            ua: 'Довгострокові плани розвитку цифрового продукту',
          },
        ],
      },
    ],
  },
  {
    slug: 'working-with-freelance-web-developer',
    date: '2026-01-28',
    title: {
      en: 'What to Expect When Working with a Freelance Web Developer',
      ua: 'Чого очікувати від співпраці з фриланс веб-розробником',
    },
    excerpt: {
      en: 'A transparent look at the process — from first call to launch and ongoing support — so you know exactly what you are signing up for.',
      ua: 'Прозорий огляд процесу розробки — від першого дзвінка до запуску та підтримки.',
    },
    readTime: {
      en: '5 min read',
      ua: '5 хв читання',
    },
    tags: {
      en: ['Process', 'Collaboration', 'Freelance'],
      ua: ['Процес', 'Співпраця', 'Фриланс'],
    },
    content: [
      {
        paragraphs: [
          {
            en: 'Working with a freelancer should feel like adding a senior team member. Here is how I structure projects so clients stay informed and in control.',
            ua: 'Співпраця з фрилансером має відчуватися як залучення досвідченого члена команди. Ось як я структурую роботу для комфорту та контролю клієнта.',
          },
        ],
      },
      {
        heading: {
          en: 'Typical project flow',
          ua: 'Типовий процес розробки',
        },
        paragraphs: [],
        list: [
          {
            en: 'Discovery call — goals, timeline, tech constraints, and budget alignment',
            ua: 'Перший дзвінок — обговорення цілей, термінів, технологій та бюджету',
          },
          {
            en: 'Scope document — clear deliverables, milestones, and communication channels',
            ua: 'ТЗ та етапи — фіксація завдань, результатів та каналів зв\'язку',
          },
          {
            en: 'Design & build — iterative updates with regular demos',
            ua: 'Розробка — регулярні демонстрації та проміжні звіти',
          },
          {
            en: 'QA & launch — cross-browser testing, performance check, deployment',
            ua: 'Тестування та запуск — перевірка на пристроях, оптимізація та реліз',
          },
          {
            en: 'Post-launch support — bug fixes, improvements, and scaling as you grow',
            ua: 'Підтримка після запуску — усунення зауважень та розвиток проекту',
          },
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string, lang: 'en' | 'ua' = 'en'): BlogPost | undefined {
  const raw = rawBlogPosts.find((post) => post.slug === slug)
  if (!raw) return undefined

  return {
    slug: raw.slug,
    date: raw.date,
    title: raw.title[lang] || raw.title.en,
    excerpt: raw.excerpt[lang] || raw.excerpt.en,
    readTime: raw.readTime[lang] || raw.readTime.en,
    tags: raw.tags[lang] || raw.tags.en,
    content: raw.content.map((sec) => ({
      heading: sec.heading ? sec.heading[lang] || sec.heading.en : undefined,
      paragraphs: sec.paragraphs.map((p) => p[lang] || p.en),
      list: sec.list ? sec.list.map((l) => l[lang] || l.en) : undefined,
    })),
  }
}

export const BLOG_POSTS_PER_PAGE = 4

export function getBlogPageCount(): number {
  return Math.ceil(rawBlogPosts.length / BLOG_POSTS_PER_PAGE)
}

export function getBlogPostsForPage(page: number, lang: 'en' | 'ua' = 'en'): BlogPost[] {
  const start = (page - 1) * BLOG_POSTS_PER_PAGE
  return rawBlogPosts.slice(start, start + BLOG_POSTS_PER_PAGE).map((raw) => getBlogPost(raw.slug, lang)!)
}

export function getBlogPagePath(page: number, lang: 'en' | 'ua' = 'en'): string {
  const prefix = lang === 'ua' ? '/ua' : ''
  return page === 1 ? `${prefix}/blog/` : `${prefix}/blog/page/${page}/`
}

export function getAllBlogSlugs(): string[] {
  return rawBlogPosts.map((post) => post.slug)
}

// Fallback legacy blogPosts array for backward compatibility
export const blogPosts: BlogPost[] = rawBlogPosts.map((raw) => getBlogPost(raw.slug, 'en')!)
