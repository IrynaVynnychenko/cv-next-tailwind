import type { Language } from '@/lib/i18n'

type ChromeCopy = {
  projects: string
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
}

export const chrome: Record<Language, ChromeCopy> = {
  en: {
    projects: 'Projects',
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
      'Marketing sites, Webflow, WordPress, motion, fullstack Next.js. Scope and timeline on a short call.',
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
    heroRotate: ['marketing sites', 'Webflow', 'WordPress', 'animation', 'static sites', 'Next.js'],
  },
  ua: {
    projects: 'Проєкти',
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
      'Маркетингові сайти, Webflow, WordPress, анімація, fullstack Next.js. Скоуп і терміни — на короткому колі.',
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
    heroRotate: ['маркетингові сайти', 'Webflow', 'WordPress', 'анімація', 'статика', 'Next.js'],
  },
  de: {
    projects: 'Projekte',
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
      'Marketing-Sites, Webflow, WordPress, Motion, Fullstack-Next.js. Scope und Zeitplan in einem kurzen Call.',
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
    heroRotate: ['Marketing-Sites', 'Webflow', 'WordPress', 'Animation', 'statische Sites', 'Next.js'],
  },
  fr: {
    projects: 'Projets',
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
      'Sites marketing, Webflow, WordPress, motion, Next.js fullstack. Périmètre et délais sur un court call.',
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
    heroRotate: ['sites marketing', 'Webflow', 'WordPress', 'animation', 'statique', 'Next.js'],
  },
  es: {
    projects: 'Proyectos',
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
      'Sitios de marketing, Webflow, WordPress, motion, Next.js fullstack. Alcance y plazos en una llamada corta.',
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
    heroRotate: ['sitios de marketing', 'Webflow', 'WordPress', 'animación', 'sitios estáticos', 'Next.js'],
  },
  it: {
    projects: 'Progetti',
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
      'Siti marketing, Webflow, WordPress, motion, Next.js fullstack. Scope e tempi in una breve call.',
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
    heroRotate: ['siti marketing', 'Webflow', 'WordPress', 'animazione', 'siti statici', 'Next.js'],
  },
  tr: {
    projects: 'Projeler',
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
      'Pazarlama siteleri, Webflow, WordPress, motion, fullstack Next.js. Kapsam ve tarih — kısa bir görüşmede.',
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
    heroRotate: ['pazarlama siteleri', 'Webflow', 'WordPress', 'animasyon', 'statik siteler', 'Next.js'],
  },
}
