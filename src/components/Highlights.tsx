'use client'

import { useLanguage } from '@/context/LanguageContext'
import { chrome } from '@/data/chrome'

export default function Highlights() {
  const { language } = useLanguage()
  const c = chrome[language]
  const items = [c.years, c.hours, c.success, c.launched]

  return (
    <div className="border-x border-edge px-3 py-3">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">{c.highlights}</span>
        {items.map((item) => (
          <span key={item} className="inline-flex items-center gap-1.5 whitespace-nowrap py-0.5">
            <span className="size-1 rounded-full bg-sky-500" />
            <span className="text-[11px] font-medium text-foreground">{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
