'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { chrome } from '@/data/chrome'
import { RotatingWords } from './Animate'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const c = chrome[language]

  return (
    <div>
      <div className="pattern-dots screen-line-before screen-line-after flex min-h-[240px] flex-col items-center justify-start gap-3 overflow-x-clip border-x border-edge px-4 pb-6 pt-24 text-center sm:min-h-[280px] sm:gap-4 sm:px-6 sm:pb-8 sm:pt-28">
        <p className="w-full max-w-[22rem] text-[1.65rem] font-semibold leading-[1.2] tracking-tight motion-safe:animate-hero-in sm:max-w-4xl sm:text-4xl md:max-w-none md:whitespace-nowrap md:text-5xl">
          {c.heroHeadline}
        </p>
        <p className="flex w-full max-w-[22rem] items-center justify-center overflow-hidden text-[1.35rem] font-semibold leading-tight tracking-tight motion-safe:animate-hero-in sm:max-w-4xl sm:text-3xl md:max-w-none md:text-4xl [animation-delay:120ms]">
          <RotatingWords words={c.heroRotate} className="text-sky-500" />
        </p>
        <a
          href="https://telegram.me/+380931844615"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-edge bg-background/80 px-4 py-2 text-sm font-medium backdrop-blur-sm transition duration-300 hover:bg-accent motion-safe:animate-hero-in motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98] [animation-delay:220ms]"
        >
          {c.heroCta}
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"
            />
          </svg>
        </a>
        <p className="inline-flex max-w-[22rem] items-center justify-center gap-1.5 font-mono text-[11px] leading-snug text-muted-foreground motion-safe:animate-hero-in sm:max-w-none [animation-delay:280ms]">
          <span className="size-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
          {c.heroAvailability}
        </p>
      </div>

      <div className="relative flex min-w-0 border-x border-edge px-3">
        <div className="shrink-0 border-r border-edge">
          <div className="mx-0.5 my-1">
            <Image
              src="/images/profile-photo.jpg"
              alt={t.about.title}
              width={160}
              height={160}
              priority
              className="size-[6.5rem] rounded-full object-cover object-left ring-2 ring-sky-500 ring-offset-2 ring-offset-background select-none motion-safe:animate-hero-in sm:size-40 [animation-delay:280ms]"
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex grow items-end pb-1 pl-3 sm:pl-4">
            <div className="hidden font-mono text-xs text-muted-foreground sm:inline-flex sm:items-center sm:gap-1">
              <svg className="mr-1 size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 01-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0116 0z"
                />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t.about.location}
            </div>
          </div>
          <div className="border-t border-edge">
            <div className="flex min-w-0 items-start gap-1.5 py-0.5 pl-3 sm:items-center sm:gap-2 sm:pl-4">
              <h1 className="min-w-0 text-[1.35rem] font-semibold leading-tight tracking-tight sm:text-3xl">
                {t.about.title}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="mt-1 inline-block size-4 shrink-0 select-none text-sky-500 sm:mt-0 sm:size-[1.125rem]"
                aria-label="Verified"
                role="img"
              >
                <path
                  fill="currentColor"
                  d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
                />
              </svg>
            </div>
            <div className="border-t border-edge py-1.5 pl-3 sm:h-9 sm:py-1 sm:pl-4">
              <p className="font-mono text-xs leading-snug text-muted-foreground sm:text-sm sm:text-balance">
                {t.header.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="border-x border-t border-edge px-4 py-3 text-sm leading-relaxed text-muted-foreground">
        {c.heroAnswer}
      </p>

      <div className="pattern-hatch h-8 w-full border-x border-edge" />
    </div>
  )
}
