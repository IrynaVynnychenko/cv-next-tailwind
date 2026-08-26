import type { Language } from '@/lib/i18n'

export const CONTACT_EMAIL = 'i.vynnychenko@gmail.com'
export const TELEGRAM_URL = 'https://telegram.me/+380931844615'
export const VIBER_URL = 'viber://chat?number=%2B380931844615'
export const WHATSAPP_URL = 'https://wa.me/380931844615'

const mailCopy: Record<Language, { subject: string; body: string }> = {
  en: {
    subject: 'Project details',
    body: `Hi Iryna,

What I need:


Deadline:

Links / references:
`,
  },
  ua: {
    subject: 'Деталі проєкту',
    body: `Привіт, Ірино,

Що потрібно зробити:


Дедлайн:

Посилання / референси:
`,
  },
  de: {
    subject: 'Projektdetails',
    body: `Hallo Iryna,

Was ich brauche:


Deadline:

Links / Referenzen:
`,
  },
  fr: {
    subject: 'Détails du projet',
    body: `Bonjour Iryna,

Ce dont j’ai besoin :


Délai :

Liens / références :
`,
  },
  es: {
    subject: 'Detalles del proyecto',
    body: `Hola Iryna,

Qué necesito:


Plazo:

Enlaces / referencias:
`,
  },
  it: {
    subject: 'Dettagli del progetto',
    body: `Ciao Iryna,

Cosa mi serve:


Scadenza:

Link / riferimenti:
`,
  },
  tr: {
    subject: 'Proje detayları',
    body: `Merhaba Iryna,

Ne gerekiyor:


Tarih:

Bağlantılar / referanslar:
`,
  },
}

export function getContactMailto(lang: Language, subjectOverride?: string) {
  const copy = mailCopy[lang]
  const subject = subjectOverride ?? copy.subject
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(copy.body)}`
}
