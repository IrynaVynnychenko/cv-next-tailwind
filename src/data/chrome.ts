import type { Language } from '@/lib/i18n'

type ChromeCopy = {
  projects: string
  projectsCount: string
  stack: string
  highlights: string
  workMode: string
  employmentPeriod: string
  freelance: string
  remote: string
  onsite: string
  toggleExperience: string
  openProject: string
  workTogether: string
  workTogetherText: string
  getInTouch: string
  socialTitle: string
  themeToggle: string
  years: string
  hours: string
  success: string
  launched: string
  ndaTitle: string
  publicWork: string
  to: string
  heroHeadline: string
  heroCta: string
  heroFor: string
  heroRotate: string[]
  heroAnswer: string
  heroAvailability: string
}

export const chrome: Record<Language, ChromeCopy> = {
  en: {
    projects: 'Projects',
    projectsCount: '100+',
    stack: 'Stack',
    highlights: 'Highlights',
    workMode: 'Work mode',
    employmentPeriod: 'Employment period',
    freelance: 'Freelance',
    remote: 'Remote',
    onsite: 'On-site',
    toggleExperience: 'Toggle experience details',
    openProject: 'Open project',
    workTogether: "Let's work together",
    workTogetherText:
      'SaaS, MVPs, Web Apps, fullstack Next.js - or a marketing site on Webflow, WordPress, or static. Scope and timeline on a short call.',
    getInTouch: 'Get in touch',
    socialTitle: 'Social Links',
    themeToggle: 'Toggle theme',
    years: '8+ years',
    hours: '4,200+ Upwork hours',
    success: '100% Job Success',
    launched: '100+ launched projects',
    ndaTitle: 'Product systems under NDA',
    publicWork: 'Selected public work',
    to: 'to',
    heroHeadline: 'Frontend & Full-Stack',
    heroCta: 'Book a call',
    heroFor: 'for',
    heroRotate: ['SaaS', 'MVPs', 'UI/UX to Code', 'AI-powered Web Apps', 'fullstack Next.js'],
    heroAnswer:
      'Iryna Vynnychenko, Senior Web Engineer in Kyiv. Fullstack Next.js for SaaS, MVPs, and Telegram Mini Apps - and marketing sites on Webflow, WordPress, or static. 8+ years in production, 4,200+ Upwork hours, 100+ launched projects.',
    heroAvailability: 'Available for remote B2B contracts globally',
  },
  ua: {
    projects: 'Проєкти',
    projectsCount: '100+',
    stack: 'Стек',
    highlights: 'Коротко',
    workMode: 'Формат',
    employmentPeriod: 'Період',
    freelance: 'Фриланс',
    remote: 'Віддалено',
    onsite: 'В офісі',
    toggleExperience: 'Показати деталі досвіду',
    openProject: 'Відкрити проєкт',
    workTogether: 'Працюймо разом',
    workTogetherText:
      'SaaS, MVPs, Web Apps, fullstack Next.js - або маркетинговий сайт на Webflow, WordPress чи статиці. Скоуп і терміни - на короткому колі.',
    getInTouch: 'Написати',
    socialTitle: 'Соцмережі',
    themeToggle: 'Змінити тему',
    years: '8+ років',
    hours: '4 200+ годин на Upwork',
    success: '100% Job Success',
    launched: '100+ запущених проєктів',
    ndaTitle: 'Продуктові системи під NDA',
    publicWork: 'Публічні кейси',
    to: '-',
    heroHeadline: 'Frontend & Full-Stack',
    heroCta: 'Book a call',
    heroFor: 'для',
    heroRotate: ['SaaS', 'MVPs', 'UI/UX to Code', 'AI-powered Web Apps', 'fullstack Next.js'],
    heroAnswer:
      'Ірина Винниченко, Senior Web Engineer у Києві. Fullstack Next.js для SaaS, MVP і Telegram Mini Apps — і маркетингові сайти на Webflow, WordPress або статиці. 8+ років у проді, 4 200+ годин на Upwork, 100+ запущених проєктів.',
    heroAvailability: 'Віддалені B2B-контракти по всьому світу',
  },
  de: {
    projects: 'Projekte',
    projectsCount: '100+',
    stack: 'Stack',
    highlights: 'Highlights',
    workMode: 'Arbeitsmodus',
    employmentPeriod: 'Zeitraum',
    freelance: 'Freelance',
    remote: 'Remote',
    onsite: 'Vor Ort',
    toggleExperience: 'Erfahrungsdetails umschalten',
    openProject: 'Projekt öffnen',
    workTogether: 'Lassen Sie uns zusammenarbeiten',
    workTogetherText:
      'SaaS, MVPs, Web Apps, fullstack Next.js - oder eine Marketing-Site in Webflow, WordPress oder statisch. Scope und Zeitplan in einem kurzen Call.',
    getInTouch: 'Kontakt',
    socialTitle: 'Social Links',
    themeToggle: 'Thema wechseln',
    years: '8+ Jahre',
    hours: '4.200+ Upwork-Stunden',
    success: '100% Job Success',
    launched: '100+ gelaunchte Projekte',
    ndaTitle: 'Produktsysteme unter NDA',
    publicWork: 'Ausgewählte öffentliche Arbeit',
    to: 'bis',
    heroHeadline: 'Frontend & Full-Stack',
    heroCta: 'Book a call',
    heroFor: 'für',
    heroRotate: ['SaaS', 'MVPs', 'UI/UX to Code', 'AI-powered Web Apps', 'fullstack Next.js'],
    heroAnswer:
      'Iryna Vynnychenko, Senior Web Engineer in Kiew. Fullstack-Next.js für SaaS, MVPs und Telegram Mini Apps - und Marketing-Sites in Webflow, WordPress oder statisch. 8+ Jahre Produktion, 4.200+ Upwork-Stunden, 100+ gelaunchte Projekte.',
    heroAvailability: 'Verfügbar für Remote-B2B-Verträge weltweit',
  },
  fr: {
    projects: 'Projets',
    projectsCount: '100+',
    stack: 'Stack',
    highlights: 'Points clés',
    workMode: 'Mode de travail',
    employmentPeriod: 'Période',
    freelance: 'Freelance',
    remote: 'Remote',
    onsite: 'Sur site',
    toggleExperience: 'Afficher les détails',
    openProject: 'Ouvrir le projet',
    workTogether: 'Travaillons ensemble',
    workTogetherText:
      'SaaS, MVPs, Web Apps, fullstack Next.js - ou un site marketing en Webflow, WordPress ou statique. Périmètre et délais sur un court call.',
    getInTouch: 'Me contacter',
    socialTitle: 'Réseaux',
    themeToggle: 'Changer de thème',
    years: '8+ ans',
    hours: '4 200+ heures Upwork',
    success: '100 % Job Success',
    launched: '100+ projets lancés',
    ndaTitle: 'Systèmes produit sous NDA',
    publicWork: 'Travail public sélectionné',
    to: 'à',
    heroHeadline: 'Frontend & Full-Stack',
    heroCta: 'Book a call',
    heroFor: 'pour',
    heroRotate: ['SaaS', 'MVPs', 'UI/UX to Code', 'AI-powered Web Apps', 'fullstack Next.js'],
    heroAnswer:
      'Iryna Vynnychenko, ingénieure web senior à Kyiv. Next.js fullstack pour SaaS, MVP et Telegram Mini Apps - et sites marketing en Webflow, WordPress ou statique. 8+ ans en production, 4 200+ heures Upwork, 100+ projets lancés.',
    heroAvailability: 'Disponible pour des contrats B2B à distance, partout dans le monde',
  },
  es: {
    projects: 'Proyectos',
    projectsCount: '100+',
    stack: 'Stack',
    highlights: 'Destacados',
    workMode: 'Modalidad',
    employmentPeriod: 'Periodo',
    freelance: 'Freelance',
    remote: 'Remoto',
    onsite: 'Presencial',
    toggleExperience: 'Mostrar detalles',
    openProject: 'Abrir proyecto',
    workTogether: 'Trabajemos juntos',
    workTogetherText:
      'SaaS, MVPs, Web Apps, fullstack Next.js - o un sitio de marketing en Webflow, WordPress o estático. Alcance y plazos en una llamada corta.',
    getInTouch: 'Contactar',
    socialTitle: 'Redes',
    themeToggle: 'Cambiar tema',
    years: '8+ años',
    hours: '4.200+ horas en Upwork',
    success: '100% Job Success',
    launched: '100+ proyectos lanzados',
    ndaTitle: 'Sistemas de producto bajo NDA',
    publicWork: 'Trabajo público seleccionado',
    to: 'a',
    heroHeadline: 'Frontend & Full-Stack',
    heroCta: 'Book a call',
    heroFor: 'para',
    heroRotate: ['SaaS', 'MVPs', 'UI/UX to Code', 'AI-powered Web Apps', 'fullstack Next.js'],
    heroAnswer:
      'Iryna Vynnychenko, ingeniera web senior en Kyiv. Next.js fullstack para SaaS, MVPs y Telegram Mini Apps - y sitios de marketing en Webflow, WordPress o estático. 8+ años en producción, 4.200+ horas en Upwork, 100+ proyectos lanzados.',
    heroAvailability: 'Disponible para contratos B2B remotos a nivel global',
  },
  it: {
    projects: 'Progetti',
    projectsCount: '100+',
    stack: 'Stack',
    highlights: 'In evidenza',
    workMode: 'Modalità',
    employmentPeriod: 'Periodo',
    freelance: 'Freelance',
    remote: 'Remoto',
    onsite: 'In sede',
    toggleExperience: 'Mostra i dettagli',
    openProject: 'Apri progetto',
    workTogether: 'Lavoriamo insieme',
    workTogetherText:
      'SaaS, MVPs, Web Apps, fullstack Next.js - o un sito marketing su Webflow, WordPress o statico. Scope e tempi in una breve call.',
    getInTouch: 'Contattami',
    socialTitle: 'Social',
    themeToggle: 'Cambia tema',
    years: '8+ anni',
    hours: '4.200+ ore su Upwork',
    success: '100% Job Success',
    launched: '100+ progetti lanciati',
    ndaTitle: 'Sistemi di prodotto sotto NDA',
    publicWork: 'Lavoro pubblico selezionato',
    to: 'a',
    heroHeadline: 'Frontend & Full-Stack',
    heroCta: 'Book a call',
    heroFor: 'per',
    heroRotate: ['SaaS', 'MVPs', 'UI/UX to Code', 'AI-powered Web Apps', 'fullstack Next.js'],
    heroAnswer:
      'Iryna Vynnychenko, ingegnera web senior a Kyiv. Next.js fullstack per SaaS, MVP e Telegram Mini Apps - e siti marketing su Webflow, WordPress o statico. 8+ anni in produzione, 4.200+ ore su Upwork, 100+ progetti lanciati.',
    heroAvailability: 'Disponibile per contratti B2B da remoto in tutto il mondo',
  },
  tr: {
    projects: 'Projeler',
    projectsCount: '100+',
    stack: 'Yığın',
    highlights: 'Öne çıkanlar',
    workMode: 'Çalışma şekli',
    employmentPeriod: 'Dönem',
    freelance: 'Freelance',
    remote: 'Uzaktan',
    onsite: 'Ofiste',
    toggleExperience: 'Deneyim detaylarını aç',
    openProject: 'Projeyi aç',
    workTogether: 'Birlikte çalışalım',
    workTogetherText:
      'SaaS, MVPs, Web Apps, fullstack Next.js - veya Webflow, WordPress ya da statik bir pazarlama sitesi. Kapsam ve tarih - kısa bir görüşmede.',
    getInTouch: 'İletişime geç',
    socialTitle: 'Sosyal bağlantılar',
    themeToggle: 'Temayı değiştir',
    years: '8+ yıl',
    hours: '4.200+ Upwork saati',
    success: '100% Job Success',
    launched: '100+ yayınlanan proje',
    ndaTitle: 'NDA altındaki ürün sistemleri',
    publicWork: 'Seçilmiş kamuya açık işler',
    to: '-',
    heroHeadline: 'Frontend & Full-Stack',
    heroCta: 'Book a call',
    heroFor: 'için',
    heroRotate: ['SaaS', 'MVPs', 'UI/UX to Code', 'AI-powered Web Apps', 'fullstack Next.js'],
    heroAnswer:
      'Iryna Vynnychenko, Kyiv’de Senior Web Engineer. SaaS, MVP ve Telegram Mini Apps için fullstack Next.js - ve Webflow, WordPress veya statik pazarlama siteleri. Üretimde 8+ yıl, 4.200+ Upwork saati, 100+ yayınlanan proje.',
    heroAvailability: 'Dünya genelinde uzaktan B2B sözleşmelerine açığım',
  },
}
