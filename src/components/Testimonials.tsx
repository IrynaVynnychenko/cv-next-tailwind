'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { Panel } from './Panel'

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="size-3.5 fill-current drop-shadow-[0_0_1px_rgba(201,162,39,0.45)]"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { language } = useLanguage()
  const t = translations[language].testimonials
  const count = t.items.length
  const [start, setStart] = useState(0)
  const [paused, setPaused] = useState(false)
  const visible = [0, 1, 2].map((offset) => t.items[(start + offset) % count])

  useEffect(() => {
    if (count <= 1 || paused) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return
    const id = window.setInterval(() => {
      setStart((current) => (current + 1) % count)
    }, 5200)
    return () => window.clearInterval(id)
  }, [count, paused])

  return (
    <Panel id="testimonials" title={t.title}>
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-live="polite"
      >
        {visible.map((testimonial, index) => (
          <blockquote
            key={`${start}-${index}-${testimonial.text}`}
            className={`flex flex-col border-b border-edge p-4 transition-colors hover:bg-accent-muted motion-safe:animate-testimonial-in md:border-b-0 md:border-r md:last:border-r-0 ${
              index > 0 ? 'hidden md:flex' : ''
            }`}
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <footer className="mt-4 flex items-end justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{testimonial.author}</p>
                <p className="truncate text-xs text-muted-foreground">{testimonial.project}</p>
              </div>
              <Stars />
            </footer>
          </blockquote>
        ))}
      </div>
      <div className="border-t border-edge px-4 py-4 text-center">
        <a
          href="https://www.upwork.com/freelancers/irynavynnychenko"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#14A800] underline-offset-4 hover:underline hover:text-[#108A00] dark:text-[#6FDA44] dark:hover:text-[#14A800]"
        >
          {t.jobSuccess}
        </a>
        <p className="mt-1 text-xs text-muted-foreground">{t.stats}</p>
      </div>
    </Panel>
  )
}
