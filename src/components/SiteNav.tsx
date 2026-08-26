'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { chrome } from '@/data/chrome'
import { getContactMailto } from '@/lib/contact'
import ThemeToggle from './ThemeToggle'
import ChatLinks from './ChatLinks'
import {
  getBlogIndexPath,
  getEquivalentPath,
  getLangFromPath,
  stripLangPrefix,
  withLangPrefix,
  type Language,
} from '@/lib/i18n'

const LANG_OPTIONS: { code: Language; short: string; native: string }[] = [
  { code: 'ua', short: 'UA', native: 'Українська' },
  { code: 'en', short: 'EN', native: 'English' },
  { code: 'de', short: 'DE', native: 'Deutsch' },
  { code: 'fr', short: 'FR', native: 'Français' },
  { code: 'es', short: 'ES', native: 'Español' },
  { code: 'it', short: 'IT', native: 'Italiano' },
  { code: 'tr', short: 'TR', native: 'Türkçe' },
]

function useNavItems() {
  const pathname = usePathname() || '/'
  const { language } = useLanguage()
  const t = translations[language]
  const c = chrome[language]
  const isHome = stripLangPrefix(pathname) === '/'
  const isBlog = pathname.includes('/blog')

  const items = [
    { id: 'about', label: t.nav.about, href: withLangPrefix(language, '/#about') },
    { id: 'experience', label: t.nav.experience, href: withLangPrefix(language, '/#experience') },
    { id: 'projects', label: c.projects, href: withLangPrefix(language, '/#projects') },
    { id: 'blog', label: t.nav.blog, href: getBlogIndexPath(language) },
    { id: 'contact', label: t.nav.contact, href: withLangPrefix(language, '/#contact') },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return { items, isHome, isBlog, scrollTo, t, c }
}

function navLinkClass(active: boolean, compact = false) {
  const tone = active
    ? 'bg-muted text-foreground'
    : compact
      ? 'text-muted-foreground hover:bg-accent hover:text-foreground'
      : 'text-foreground hover:bg-accent'

  if (compact) {
    return [
      'whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-3',
      tone,
    ].join(' ')
  }

  return [
    'flex w-full items-center justify-between rounded-lg px-3 py-3 text-lg font-medium transition-colors',
    tone,
  ].join(' ')
}

export default function SiteNav() {
  const pathname = usePathname() || '/'
  const { language, setLanguage } = useLanguage()
  const { items, isHome, isBlog, scrollTo, t, c } = useNavItems()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setLanguage(getLangFromPath(pathname))
  }, [pathname, setLanguage])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const goToSection = (id: string) => {
    setOpen(false)
    if (isHome) {
      requestAnimationFrame(() => scrollTo(id))
    }
  }

  return (
    <>
      <nav className="pointer-events-none fixed inset-x-0 top-4 z-[60] px-3 md:px-4">
        <div className="mx-auto flex max-w-[1024px] items-center justify-end gap-2">
          <div className="pointer-events-auto hidden w-fit items-center justify-center gap-0.5 overflow-x-auto no-scrollbar rounded-full border border-edge bg-background/80 px-2 py-1.5 shadow-lg backdrop-blur-md md:flex md:absolute md:left-1/2 md:-translate-x-1/2">
            {items.map((item) => {
              const active = item.id === 'blog' ? isBlog : false
              if (item.id === 'blog') {
                return (
                  <Link key={item.id} href={item.href} className={navLinkClass(active, true)}>
                    {item.label}
                  </Link>
                )
              }
              if (isHome) {
                return (
                  <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className={navLinkClass(active, true)}>
                    {item.label}
                  </button>
                )
              }
              return (
                <Link key={item.id} href={item.href} className={navLinkClass(active, true)}>
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-edge bg-background/80 p-1 shadow-lg backdrop-blur-md md:rounded-lg md:p-0.5">
            <div className="hidden md:block">
              <LanguageChips compact />
            </div>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full text-foreground md:hidden"
              aria-label={t.a11y.toggleMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[55] flex flex-col bg-background md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={t.a11y.toggleMenu}
        >
          <div className="h-[4.5rem] shrink-0" />
          <div className="flex-1 overflow-y-auto px-4 pb-8">
            <div className="mx-auto max-w-md space-y-6">
              <div className="space-y-1 border-b border-edge pb-4">
                {items.map((item) => {
                  const active = item.id === 'blog' ? isBlog : false
                  if (item.id === 'blog') {
                    return (
                      <Link key={item.id} href={item.href} className={navLinkClass(active)} onClick={() => setOpen(false)}>
                        {item.label}
                      </Link>
                    )
                  }
                  if (isHome) {
                    return (
                      <button key={item.id} type="button" onClick={() => goToSection(item.id)} className={navLinkClass(active)}>
                        {item.label}
                      </button>
                    )
                  }
                  return (
                    <Link key={item.id} href={item.href} className={navLinkClass(active)} onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  )
                })}
              </div>

              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {translations[language].a11y.languages}
                </p>
                <LanguageChips onSelect={() => setOpen(false)} />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-edge px-3 py-2">
                <span className="text-sm text-muted-foreground">{c.themeToggle}</span>
                <ThemeToggle />
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={getContactMailto(language)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
                  onClick={() => setOpen(false)}
                >
                  {c.heroCta}
                </a>
                <ChatLinks onClick={() => setOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function LanguageChips({
  compact = false,
  onSelect,
}: {
  compact?: boolean
  onSelect?: () => void
}) {
  const pathname = usePathname() || '/'
  const { language, setLanguage } = useLanguage()
  const a11y = translations[language].a11y

  if (compact) {
    return (
      <div className="relative">
        <LanguageDropdown />
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-2 gap-2" aria-label={a11y.languages}>
      {LANG_OPTIONS.map((opt) => {
        const isActive = language === opt.code
        return (
          <li key={opt.code}>
            <Link
              href={getEquivalentPath(opt.code, pathname)}
              onClick={() => {
                setLanguage(opt.code)
                onSelect?.()
              }}
              className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm transition-colors ${
                isActive
                  ? 'border-foreground bg-muted font-semibold'
                  : 'border-edge text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
            >
              <span className="font-mono text-[11px]">{opt.short}</span>
              <span>{opt.native}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function LanguageDropdown() {
  const pathname = usePathname() || '/'
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const current = LANG_OPTIONS.find((opt) => opt.code === language) ?? LANG_OPTIONS[1]
  const a11y = translations[language].a11y

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isOpen) return
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('[data-lang-dropdown]')) setIsOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  return (
    <div className="relative" data-lang-dropdown>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-8 items-center gap-1 rounded-md px-1.5 font-mono text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={a11y.selectLanguage}
      >
        <span>{current.short}</span>
        <svg className={`size-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ul
          role="listbox"
          aria-label={a11y.languages}
          className="absolute right-0 z-50 mt-1.5 min-w-[10.5rem] rounded-lg border border-edge bg-background py-1 shadow-lg"
        >
          {LANG_OPTIONS.map((opt) => {
            const isActive = language === opt.code
            return (
              <li key={opt.code} role="option" aria-selected={isActive}>
                <Link
                  href={getEquivalentPath(opt.code, pathname)}
                  onClick={() => {
                    setLanguage(opt.code)
                    setIsOpen(false)
                  }}
                  className={`flex items-center justify-between gap-3 px-3 py-2 text-sm transition-colors ${
                    isActive ? 'bg-muted font-semibold text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 font-mono text-[11px] text-muted-foreground">{opt.short}</span>
                    <span>{opt.native}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
