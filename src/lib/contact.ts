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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidContactEmail(value: string) {
  return EMAIL_RE.test(value.trim())
}

export type ContactInquiry = {
  name: string
  email: string
  message: string
  language: Language
  subject: string
  honey?: string
}

export async function submitContactInquiry(inquiry: ContactInquiry) {
  if (inquiry.honey?.trim()) return

  const payload = {
    name: inquiry.name,
    email: inquiry.email,
    message: inquiry.message,
    language: inquiry.language,
    _replyto: inquiry.email,
    _subject: inquiry.subject,
    _template: 'table',
    _captcha: 'false',
  }

  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) throw new Error('submit_failed')

  const data: { success?: boolean | string } = await response.json().catch(() => ({}))
  if (data.success === false || data.success === 'false') throw new Error('submit_failed')
}

export function getInquiryMailto(inquiry: Pick<ContactInquiry, 'name' | 'email' | 'message' | 'subject'>) {
  const body = `Name: ${inquiry.name}\nEmail: ${inquiry.email}\n\n${inquiry.message}`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(inquiry.subject)}&body=${encodeURIComponent(body)}`
}
