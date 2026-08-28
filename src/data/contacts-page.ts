import type { Language } from '@/lib/i18n'

type L = Record<Language, string>

export const CONTACTS_PATH = '/contacts/'

export const contactsPage: {
  h1: L
  lead: L
  metaTitle: L
  metaDescription: L
  formTitle: L
  name: L
  email: L
  message: L
  messagePlaceholder: L
  submit: L
  sending: L
  success: L
  error: L
  required: L
  invalidEmail: L
  channelsTitle: L
  mailSubject: L
} = {
  h1: {
    en: 'Contacts',
    ua: 'Контакти',
    de: 'Kontakt',
    fr: 'Contact',
    es: 'Contacto',
    it: 'Contatti',
    tr: 'İletişim',
  },
  lead: {
    en: 'Send a short brief — what you need, a deadline if you have one, links or Figma. I reply by email.',
    ua: 'Надішліть коротку заявку — що потрібно зробити, дедлайн якщо є, посилання чи Figma. Відповім на email.',
    de: 'Kurze Anfrage: was Sie brauchen, Deadline falls vorhanden, Links oder Figma. Ich antworte per E-Mail.',
    fr: 'Envoyez un brief court — besoin, délai s’il y en a un, liens ou Figma. Je réponds par e-mail.',
    es: 'Envíe un brief corto — qué necesita, plazo si lo hay, enlaces o Figma. Respondo por email.',
    it: 'Invii un brief breve — cosa serve, scadenza se c’è, link o Figma. Rispondo via email.',
    tr: 'Kısa bir brief gönderin — ne gerekli, varsa tarih, bağlantılar veya Figma. E-posta ile dönerim.',
  },
  metaTitle: {
    en: 'Contacts | Iryna Vynnychenko',
    ua: 'Контакти | Ірина Винниченко',
    de: 'Kontakt | Iryna Vynnychenko',
    fr: 'Contact | Iryna Vynnychenko',
    es: 'Contacto | Iryna Vynnychenko',
    it: 'Contatti | Iryna Vynnychenko',
    tr: 'İletişim | Iryna Vynnychenko',
  },
  metaDescription: {
    en: 'Contact Iryna Vynnychenko: send a project inquiry to email, or write on Telegram, WhatsApp, Viber, Upwork, or LinkedIn.',
    ua: 'Контакти Ірини Винниченко: надішліть заявку на email або напишіть у Telegram, WhatsApp, Viber, Upwork чи LinkedIn.',
    de: 'Kontakt zu Iryna Vynnychenko: Projektanfrage per E-Mail, oder Telegram, WhatsApp, Viber, Upwork, LinkedIn.',
    fr: 'Contacter Iryna Vynnychenko : envoyer une demande par e-mail, ou écrire sur Telegram, WhatsApp, Viber, Upwork, LinkedIn.',
    es: 'Contacto de Iryna Vynnychenko: envíe una consulta por email, o escriba por Telegram, WhatsApp, Viber, Upwork o LinkedIn.',
    it: 'Contatti di Iryna Vynnychenko: invii una richiesta via email, oppure scriva su Telegram, WhatsApp, Viber, Upwork o LinkedIn.',
    tr: 'Iryna Vynnychenko iletişim: proje talebini e-postayla gönderin veya Telegram, WhatsApp, Viber, Upwork, LinkedIn’den yazın.',
  },
  formTitle: {
    en: 'Project inquiry',
    ua: 'Заявка',
    de: 'Projektanfrage',
    fr: 'Demande de projet',
    es: 'Consulta de proyecto',
    it: 'Richiesta di progetto',
    tr: 'Proje talebi',
  },
  name: {
    en: 'Name',
    ua: 'Ім’я',
    de: 'Name',
    fr: 'Nom',
    es: 'Nombre',
    it: 'Nome',
    tr: 'Ad',
  },
  email: {
    en: 'Email',
    ua: 'Email',
    de: 'E-Mail',
    fr: 'E-mail',
    es: 'Email',
    it: 'Email',
    tr: 'E-posta',
  },
  message: {
    en: 'What do you need?',
    ua: 'Що потрібно зробити?',
    de: 'Was brauchen Sie?',
    fr: 'De quoi avez-vous besoin ?',
    es: '¿Qué necesita?',
    it: 'Di cosa ha bisogno?',
    tr: 'Ne gerekiyor?',
  },
  messagePlaceholder: {
    en: 'A few lines on the task, deadline, and links.',
    ua: 'Кілька рядків про задачу, дедлайн і посилання.',
    de: 'Ein paar Zeilen zu Aufgabe, Deadline und Links.',
    fr: 'Quelques lignes sur la tâche, le délai et les liens.',
    es: 'Unas líneas sobre la tarea, el plazo y los enlaces.',
    it: 'Qualche riga su compito, scadenza e link.',
    tr: 'Görev, tarih ve bağlantılar hakkında birkaç satır.',
  },
  submit: {
    en: 'Send inquiry',
    ua: 'Надіслати заявку',
    de: 'Anfrage senden',
    fr: 'Envoyer la demande',
    es: 'Enviar consulta',
    it: 'Invia richiesta',
    tr: 'Talebi gönder',
  },
  sending: {
    en: 'Sending…',
    ua: 'Надсилаю…',
    de: 'Senden…',
    fr: 'Envoi…',
    es: 'Enviando…',
    it: 'Invio…',
    tr: 'Gönderiliyor…',
  },
  success: {
    en: 'Sent. I’ll reply to your email.',
    ua: 'Заявку надіслано. Відповім на ваш email.',
    de: 'Gesendet. Ich antworte an Ihre E-Mail.',
    fr: 'Envoyé. Je réponds sur votre e-mail.',
    es: 'Enviado. Responderé a su email.',
    it: 'Inviato. Rispondo alla sua email.',
    tr: 'Gönderildi. E-postanıza dönerim.',
  },
  error: {
    en: 'Couldn’t send. Email me directly or try again.',
    ua: 'Не вдалося надіслати. Напишіть напряму на email або спробуйте ще раз.',
    de: 'Senden fehlgeschlagen. Schreiben Sie direkt per E-Mail oder versuchen Sie es erneut.',
    fr: 'Envoi impossible. Écrivez-moi par e-mail ou réessayez.',
    es: 'No se pudo enviar. Escríbame por email o inténtelo de nuevo.',
    it: 'Invio non riuscito. Mi scriva via email o riprovi.',
    tr: 'Gönderilemedi. Doğrudan e-posta yazın veya tekrar deneyin.',
  },
  required: {
    en: 'Name, email, and a short description are required.',
    ua: 'Потрібні ім’я, email і короткий опис.',
    de: 'Name, E-Mail und eine kurze Beschreibung sind erforderlich.',
    fr: 'Nom, e-mail et une courte description sont requis.',
    es: 'Nombre, email y una breve descripción son obligatorios.',
    it: 'Nome, email e una breve descrizione sono obbligatori.',
    tr: 'Ad, e-posta ve kısa bir açıklama gerekli.',
  },
  invalidEmail: {
    en: 'Enter a valid email.',
    ua: 'Вкажіть коректний email.',
    de: 'Gültige E-Mail eingeben.',
    fr: 'Entrez un e-mail valide.',
    es: 'Introduzca un email válido.',
    it: 'Inserisca un’email valida.',
    tr: 'Geçerli bir e-posta girin.',
  },
  channelsTitle: {
    en: 'Other ways to reach me',
    ua: 'Інші способи зв’язку',
    de: 'Weitere Kontaktwege',
    fr: 'Autres moyens de me joindre',
    es: 'Otras vías de contacto',
    it: 'Altri modi per contattarmi',
    tr: 'Diğer iletişim yolları',
  },
  mailSubject: {
    en: 'Project inquiry from vynnychenko.dev',
    ua: 'Заявка з vynnychenko.dev',
    de: 'Projektanfrage von vynnychenko.dev',
    fr: 'Demande de projet depuis vynnychenko.dev',
    es: 'Consulta de proyecto desde vynnychenko.dev',
    it: 'Richiesta di progetto da vynnychenko.dev',
    tr: 'vynnychenko.dev üzerinden proje talebi',
  },
}
