'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

const getEquivalentPath = (targetLang: 'en' | 'ua', currentPath: string) => {
  const isCurrentlyUa = currentPath.startsWith('/ua')
  let cleanPath = isCurrentlyUa ? currentPath.slice(3) : currentPath
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath
  }

  if (targetLang === 'ua') {
    return cleanPath === '/' ? '/ua/' : `/ua${cleanPath}`
  } else {
    return cleanPath === '' ? '/' : cleanPath
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname() || '/'
  const { language, setLanguage } = useLanguage()

  const isUa = language === 'ua'
  const isHome = pathname === '/' || pathname === '/ua' || pathname === '/ua/'

  const t = translations[language]

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ]

  useEffect(() => {
    if (pathname.startsWith('/ua')) {
      setLanguage('ua')
    } else {
      setLanguage('en')
    }
  }, [pathname, setLanguage])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const homeHref = isUa ? '/ua/' : '/'
  const blogHref = isUa ? '/ua/blog/' : '/blog/'

  const langSwitcherMarkup = (
    <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide">
      <Link
        href={getEquivalentPath('ua', pathname)}
        onClick={() => setLanguage('ua')}
        className={`transition-colors ${
          isUa
            ? 'font-bold text-gray-900 dark:text-white'
            : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
        aria-label="Українська мова"
      >
        UA
      </Link>
      <span className="text-gray-300 dark:text-gray-600 select-none">/</span>
      <Link
        href={getEquivalentPath('en', pathname)}
        onClick={() => setLanguage('en')}
        className={`transition-colors ${
          !isUa
            ? 'font-bold text-gray-900 dark:text-white'
            : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
        aria-label="English language"
      >
        EN
      </Link>
    </div>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm'
        : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
    }`}>
      {/* Top Banner Contact Bar - Clean & borderless */}
      <div className="w-full py-2">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 text-xs">
          {/* Prominent Quick Contacts */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-medium text-gray-600 dark:text-gray-400">
            <a 
              href="mailto:i.vynnychenko@gmail.com"
              className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>i.vynnychenko@gmail.com</span>
            </a>

            <a 
              href="https://telegram.me/+380931844615"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span>Telegram (+380931844615)</span>
            </a>

            <a 
              href="https://wa.me/380931844615"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full py-3">
        <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between gap-4">
          <Link href={homeHref} className="group flex-shrink-0">
            <div className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              {t.header.name}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
              {t.header.role}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              isHome ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={isUa ? `/ua/#${item.id}` : `/#${item.id}`}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href={blogHref}
              className={`text-sm transition-colors font-medium ${
                pathname.includes('/blog')
                  ? 'text-green-700 dark:text-green-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t.nav.blog}
            </Link>

            {/* Language Switcher next to Menu */}
            <div className="border-l border-gray-200 dark:border-gray-700 pl-4 ml-1">
              {langSwitcherMarkup}
            </div>
          </div>

          {/* Mobile menu toggle & Language Switcher */}
          <div className="flex md:hidden items-center space-x-4">
            {langSwitcherMarkup}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden max-w-5xl mx-auto px-6 pt-4 pb-2 border-t border-gray-200 dark:border-gray-800 mt-3 space-y-3">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) =>
                isHome ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-base text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors font-medium py-1.5 px-1"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.id}
                    href={isUa ? `/ua/#${item.id}` : `/#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-base text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors font-medium py-1.5 px-1"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href={blogHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base transition-colors font-medium py-1.5 px-1 ${
                  pathname.includes('/blog')
                    ? 'text-green-700 dark:text-green-400 font-semibold'
                    : 'text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {t.nav.blog}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
