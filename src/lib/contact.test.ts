import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  CONTACT_EMAIL,
  getInquiryMailto,
  isValidContactEmail,
  submitContactInquiry,
  type ContactInquiry,
} from '@/lib/contact'

describe('isValidContactEmail', () => {
  it('accepts a normal email address', () => {
    expect(isValidContactEmail('someone@example.com')).toBe(true)
  })

  it('trims surrounding whitespace before validating', () => {
    expect(isValidContactEmail('  someone@example.com  ')).toBe(true)
  })

  it('rejects an address with no domain', () => {
    expect(isValidContactEmail('someone@')).toBe(false)
  })

  it('rejects an address with no @', () => {
    expect(isValidContactEmail('someone.example.com')).toBe(false)
  })

  it('rejects an address with no TLD', () => {
    expect(isValidContactEmail('someone@example')).toBe(false)
  })

  it('rejects an address containing spaces', () => {
    expect(isValidContactEmail('some one@example.com')).toBe(false)
  })

  it('rejects an empty string', () => {
    expect(isValidContactEmail('')).toBe(false)
  })
})

describe('getInquiryMailto', () => {
  it('builds a mailto: URL to the contact address', () => {
    const url = getInquiryMailto({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello there',
      subject: 'Project details',
    })
    expect(url.startsWith(`mailto:${CONTACT_EMAIL}?`)).toBe(true)
  })

  it('URL-encodes the subject', () => {
    const url = getInquiryMailto({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello there',
      subject: 'Project details & scope',
    })
    expect(url).toContain(`subject=${encodeURIComponent('Project details & scope')}`)
  })

  it('embeds the name, email, and message in the body', () => {
    const url = getInquiryMailto({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello there',
      subject: 'Project details',
    })
    const expectedBody = 'Name: Jane Doe\nEmail: jane@example.com\n\nHello there'
    expect(url).toContain(`body=${encodeURIComponent(expectedBody)}`)
  })
})

describe('submitContactInquiry', () => {
  const baseInquiry: ContactInquiry = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Hello there',
    language: 'en',
    subject: 'Project details',
  }

  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      })
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('posts to the formsubmit endpoint for the contact email', async () => {
    await submitContactInquiry(baseInquiry)
    expect(fetch).toHaveBeenCalledTimes(1)
    const [url, init] = vi.mocked(fetch).mock.calls[0]
    expect(url).toBe(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`)
    expect(init?.method).toBe('POST')
  })

  it('short-circuits and never calls fetch when the honeypot field is filled', async () => {
    await submitContactInquiry({ ...baseInquiry, honey: 'i-am-a-bot' })
    expect(fetch).not.toHaveBeenCalled()
  })

  it('throws when the response is not ok', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({}),
      })
    )
    await expect(submitContactInquiry(baseInquiry)).rejects.toThrow('submit_failed')
  })

  it('throws when the response body reports success: false', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: false }),
      })
    )
    await expect(submitContactInquiry(baseInquiry)).rejects.toThrow('submit_failed')
  })

  it('does not throw when json() parsing fails but the response was ok', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => {
          throw new Error('bad json')
        },
      })
    )
    await expect(submitContactInquiry(baseInquiry)).resolves.toBeUndefined()
  })
})
