'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { chrome } from '@/data/chrome'
import { Badge } from './Panel'

export default function Education() {
  const { language } = useLanguage()
  const t = translations[language].education
  const c = chrome[language]
  const [open, setOpen] = useState(false)

  return (
    <section
      id="education"
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge"
    >
      <header className="screen-line-after">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="education-content"
          aria-label={c.toggleExperience}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-accent-muted"
        >
          <h2 className="text-xl font-semibold tracking-tight">{t.title}</h2>
          <svg
            className={`size-4 shrink-0 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </header>
      {open && (
        <div id="education-content" className="divide-y divide-edge">
          {t.items.map((edu) => (
            <div key={`${edu.institution}-${edu.period}`} className="px-4 py-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold leading-snug">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">{edu.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {edu.relevantCourses.map((course) => (
                  <li key={course}>
                    <Badge>{course}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="px-4 py-4">
            <h3 className="mb-3 text-sm font-semibold">{t.certificationsTitle}</h3>
            <div className="space-y-3">
              {t.certifications.map((cert) => (
                <div key={cert.name} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{cert.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
