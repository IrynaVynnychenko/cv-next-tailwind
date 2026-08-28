'use client'

import { FormEvent, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { contactsPage } from '@/data/contacts-page'
import {
  CONTACT_EMAIL,
  getInquiryMailto,
  isValidContactEmail,
  submitContactInquiry,
} from '@/lib/contact'

type Status = 'idle' | 'sending' | 'success' | 'error'

const fieldClass =
  'mt-1.5 w-full rounded-md border border-edge bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring'

export default function ContactForm() {
  const { language } = useLanguage()
  const copy = contactsPage
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honey, setHoney] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError(copy.required[language])
      return
    }
    if (!isValidContactEmail(trimmedEmail)) {
      setError(copy.invalidEmail[language])
      return
    }

    const inquiry = {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
      language,
      subject: copy.mailSubject[language],
      honey,
    }

    setError('')
    setStatus('sending')

    try {
      await submitContactInquiry(inquiry)
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      setHoney('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p role="status" className="p-4 text-sm leading-relaxed">
        {copy.success[language]}
      </p>
    )
  }

  return (
    <form
      action={`https://formsubmit.co/${CONTACT_EMAIL}`}
      method="POST"
      onSubmit={onSubmit}
      className="space-y-4 p-4"
      noValidate
    >
      <input type="hidden" name="_subject" value={copy.mailSubject[language]} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_replyto" value={email} />
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_website">Website</label>
        <input
          id="company_website"
          name="_honey"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(event) => setHoney(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contact-name" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {copy.name[language]}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {copy.email[language]}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {copy.message[language]}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={copy.messagePlaceholder[language]}
          className={`${fieldClass} resize-y min-h-[8rem]`}
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}

      {status === 'error' ? (
        <p role="alert" className="text-sm text-muted-foreground">
          {copy.error[language]}{' '}
          <a
            href={getInquiryMailto({
              name: name.trim(),
              email: email.trim(),
              message: message.trim(),
              subject: copy.mailSubject[language],
            })}
            className="underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'sending' ? copy.sending[language] : copy.submit[language]}
      </button>
    </form>
  )
}
