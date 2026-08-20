'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { chrome } from '@/data/chrome'
import { Badge, Panel } from './Panel'

const WORK_MODES = ['freelance', 'remote', 'onsite'] as const

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language].experience
  const c = chrome[language]
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const modeLabel = {
    freelance: c.freelance,
    remote: c.remote,
    onsite: c.onsite,
  }

  return (
    <Panel id="experience" title={t.title}>
      <div className="pr-2 pl-4">
        {t.items.map((exp, index) => {
          const isOpen = openIndex === index
          const mode = WORK_MODES[index] ?? 'remote'
          return (
            <div key={`${exp.company}-${exp.period}`} className="group relative space-y-4 py-4 screen-line-after last:after:content-none">
              <div className="relative z-[1] mb-1 flex items-start gap-3 pl-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-xs font-semibold text-muted-foreground">
                  {initials(exp.company)}
                </div>
                <div className="min-w-0 flex-1 pr-10">
                  <h3 className="text-balance font-semibold leading-snug">
                    {exp.company} - {exp.title}
                  </h3>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>{modeLabel[mode]}</span>
                    <span className="h-4 w-px bg-border" />
                    <span className="flex items-center gap-0.5">
                      <span>{exp.period}</span>
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-label={c.toggleExperience}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="absolute right-2 top-1 inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <svg className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 15 5 5 5-5M7 9l5-5 5 5" />
                  </svg>
                </button>
              </div>

              {isOpen && (
                <div className="space-y-3 pl-9 pr-4 text-sm leading-relaxed text-muted-foreground">
                  <p>{exp.description}</p>
                  <div>
                    <p className="mb-1 font-mono text-xs font-semibold tracking-tight text-foreground">{t.keyAchievements}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <ul className="flex flex-wrap gap-1.5 pl-9">
                {exp.technologies.slice(0, 8).map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
