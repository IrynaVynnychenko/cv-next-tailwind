'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { chrome } from '@/data/chrome'
import {
  getBlogIndexPath,
  getHomePath,
  stripLangPrefix,
  withLangPrefix,
} from '@/lib/i18n'

export default function BottomNav() {
  const pathname = usePathname() || '/'
  const { language } = useLanguage()
  const t = translations[language]
  const c = chrome[language]
  const isHome = stripLangPrefix(pathname) === '/'
  const blogHref = getBlogIndexPath(language)
  const homeHref = getHomePath(language)
  const isBlog = pathname.includes('/blog')

  const items = [
    { id: 'about', label: t.nav.about, href: withLangPrefix(language, '/#about') },
    { id: 'experience', label: t.nav.experience, href: withLangPrefix(language, '/#experience') },
    { id: 'projects', label: c.projects, href: withLangPrefix(language, '/#projects') },
    { id: 'blog', label: t.nav.blog, href: blogHref },
    { id: 'contact', label: t.nav.contact, href: withLangPrefix(language, '/#contact') },
  ]

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-lg -translate-x-1/2">
      <div className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar rounded-full border border-edge bg-background/80 px-2 py-1.5 shadow-lg backdrop-blur-md">
        {items.map((item) => {
          const active = item.id === 'blog' ? isBlog : false
          const className = `whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-3 ${
            active
              ? 'bg-muted text-foreground'
              : 'text-muted-foreground hover:bg-accent hover:text-foreground'
          }`

          if (item.id === 'blog') {
            return (
              <Link key={item.id} href={item.href} className={className}>
                {item.label}
              </Link>
            )
          }

          if (isHome) {
            return (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className={className}>
                {item.label}
              </button>
            )
          }

          return (
            <Link key={item.id} href={item.href} className={className}>
              {item.label}
            </Link>
          )
        })}
        <Link
          href={homeHref}
          className="hidden rounded-full px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground sm:inline"
        >
          {t.header.name.split(' ')[0]}
        </Link>
      </div>
    </nav>
  )
}
