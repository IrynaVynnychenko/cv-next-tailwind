'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import ThemeToggle from './ThemeToggle'
import {
  getEquivalentPath,
  getLangFromPath,
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

function LanguageDropdown({
  language,
  pathname,
  setLanguage,
}: {
  language: Language
  pathname: string
  setLanguage: (lang: Language) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const current = LANG_OPTIONS.find((opt) => opt.code === language) ?? LANG_OPTIONS[1]
  const a11y = translations[language].a11y

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isOpen) return

    const onPointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
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
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-8 items-center gap-1 rounded-md px-1.5 font-mono text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={a11y.selectLanguage}
      >
        <span>{current.short}</span>
        <svg
          className={`size-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
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
                    isActive
                      ? 'bg-muted font-semibold text-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 font-mono text-[11px] tracking-wide text-muted-foreground">
                      {opt.short}
                    </span>
                    <span>{opt.native}</span>
                  </span>
                  {isActive && (
                    <svg className="size-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default function Header() {
  const pathname = usePathname() || '/'
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    setLanguage(getLangFromPath(pathname))
  }, [pathname, setLanguage])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[51] flex justify-end px-3">
      <div className="pointer-events-auto flex items-center gap-0.5 rounded-lg border border-edge bg-background/80 p-0.5 backdrop-blur-md">
        <LanguageDropdown language={language} pathname={pathname} setLanguage={setLanguage} />
        <ThemeToggle />
      </div>
    </div>
  )
}
