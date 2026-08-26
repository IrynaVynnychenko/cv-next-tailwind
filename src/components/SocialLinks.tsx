'use client'

import type { ReactNode } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { chrome } from '@/data/chrome'
import { TELEGRAM_URL, VIBER_URL, WHATSAPP_URL } from '@/lib/contact'
import { ViberIcon } from './Icons'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 256 256" className="size-4 text-muted-foreground transition-[rotate] duration-300 group-hover:rotate-45" fill="currentColor" aria-hidden="true">
      <path d="M192,64V168L88,64Z" opacity="0.2" />
      <path d="M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z" />
    </svg>
  )
}

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative size-8 shrink-0 inline-flex items-center justify-center">
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/15" />
    </div>
  )
}

const links = [
  {
    id: 'upwork',
    href: 'https://www.upwork.com/freelancers/irynavynnychenko',
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.49 1.649-5.31 4.37-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.496H0v7.112c0 2.929 2.385 5.303 5.265 5.303 2.88 0 5.265-2.374 5.265-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.604l1.213-5.71c1.063.679 2.285 1.109 3.584 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.451-5.439-5.451z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/iryna-vynnychenko-287202141/',
    icon: (
      <svg viewBox="0 0 256 256" className="size-5" fill="currentColor" aria-hidden="true">
        <path d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z" opacity="0.2" />
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
      </svg>
    ),
  },
  {
    id: 'github',
    href: 'https://github.com/irynavynnychenko',
    icon: (
      <svg viewBox="0 0 256 256" className="size-5" fill="currentColor" aria-hidden="true">
        <path d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z" opacity="0.2" />
        <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z" />
      </svg>
    ),
  },
  {
    id: 'telegram',
    href: TELEGRAM_URL,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    href: WHATSAPP_URL,
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: 'viber',
    href: VIBER_URL,
    icon: <ViberIcon className="size-5" />,
  },
  {
    id: 'email',
    href: 'mailto:i.vynnychenko@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
]

export default function SocialLinks() {
  const { language } = useLanguage()

  return (
    <section data-slot="panel" className="screen-line-before screen-line-after border-x border-edge before:content-none after:content-none">
      <h2 className="sr-only">{chrome[language].socialTitle}</h2>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-[1] grid grid-cols-2 gap-2 md:grid-cols-3">
          <div className="border-r border-edge" />
          <div className="border-l border-edge md:border-x" />
          <div className="hidden border-l border-edge md:block" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center gap-4 p-4 pr-2 transition-colors hover:bg-accent-muted"
            >
              <IconFrame>{link.icon}</IconFrame>
              <h3 className="flex-1 font-medium capitalize underline-offset-4 group-hover:underline">{link.id}</h3>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
