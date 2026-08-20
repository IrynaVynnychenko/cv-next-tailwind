'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { chrome } from '@/data/chrome'
import { Panel } from './Panel'

function parseProject(raw: string) {
  const parts = raw.split(/\s-\s/)
  const url = (parts[0] ?? '').trim()
  return {
    url,
    title: url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
    description: parts.slice(1).join(' - ').trim(),
  }
}

function BoxIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3.3 7 8.7 5 8.7-5M12 22V12" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 256 256" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M192,64V168L88,64Z" opacity="0.2" />
      <path d="M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z" />
    </svg>
  )
}

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language].experience
  const c = chrome[language]
  const [openIndex, setOpenIndex] = useState<number | null>(-1)
  const freelance = t.items[0]
  const projects = freelance.projects.map(parseProject)
  const ndaProjects = 'ndaProjects' in freelance ? freelance.ndaProjects : []

  return (
    <Panel id="projects" title={c.projects} count={projects.length + (ndaProjects.length ? 1 : 0)}>
      <div>
        {ndaProjects.length > 0 && (
          <div>
            <div className="flex items-center hover:bg-accent-muted">
              <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
                <BoxIcon />
              </div>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === -1 ? null : -1)}
                className="flex-1 border-l border-dashed border-edge p-4 text-left"
              >
                <h3 className="mb-1 font-medium">{c.ndaTitle}</h3>
                <p className="text-sm text-muted-foreground">{t.ndaProjectsNote}</p>
              </button>
            </div>
            {openIndex === -1 && (
              <ul className="space-y-2 border-t border-edge p-4 text-sm text-muted-foreground">
                {ndaProjects.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {projects.length > 0 && (
          <p className="border-t border-edge px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
            {c.publicWork}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => (
              <div
                key={project.url}
                className="min-w-0 border-b border-edge sm:odd:border-r"
              >
                <div className="flex min-w-0 items-center hover:bg-accent-muted">
                  <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background sm:hidden">
                    <BoxIcon />
                  </div>
                  <div className="min-w-0 flex-1 border-l border-dashed border-edge sm:border-l-0">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={project.title}
                      className="flex w-full min-w-0 items-center gap-1 p-3 sm:gap-2 sm:p-4 sm:pr-2"
                    >
                      <h3 className="min-w-0 flex-1 truncate font-medium leading-snug">
                        {project.title}
                      </h3>
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground">
                        <ArrowIcon />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Panel>
  )
}
