'use client'

import { useLanguage } from '@/context/LanguageContext'
import { experiencePage } from '@/data/experience-page'
import Experience from './Experience'
import Education from './Education'

export default function ExperienceView() {
  const { language } = useLanguage()
  const p = experiencePage

  return (
    <article className="pt-20">
      <div className="pattern-hatch h-8 w-full border-x border-edge" />
      <div className="screen-line-before border-x border-edge px-4 pb-8 pt-6">
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{p.h1[language]}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{p.lead[language]}</p>
      </div>
      <Experience />
      <Education defaultOpen />
    </article>
  )
}
