'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { Panel } from './Panel'

export default function Testimonials() {
  const { language } = useLanguage()
  const t = translations[language].testimonials

  return (
    <Panel id="testimonials" title={t.title}>
      <div className="divide-y divide-edge">
        {t.items.map((testimonial) => (
          <blockquote key={testimonial.text} className="p-4">
            <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{testimonial.text}&rdquo;</p>
            <footer className="mt-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.project}</p>
              </div>
              <div className="flex text-muted-foreground" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="size-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
      <div className="border-t border-edge px-4 py-4 text-center">
        <a
          href="https://www.upwork.com/freelancers/irynavynnychenko"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          {t.jobSuccess}
        </a>
        <p className="mt-1 text-xs text-muted-foreground">{t.stats}</p>
      </div>
    </Panel>
  )
}
