'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { chrome } from '@/data/chrome'
import { Badge, Panel } from './Panel'

function parseProject(raw: string) {
  const [url, ...rest] = raw.split(' - ')
  return {
    url: url.trim(),
    title: url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
    description: rest.join(' - ').trim(),
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

const PROJECT_TAGS = [
  ['Next.js', 'React', 'TypeScript'],
  ['Next.js', 'Tailwind CSS'],
  ['Webflow', 'CMS'],
  ['Webflow', 'Landing'],
  ['React', 'Figma', 'Dashboard'],
]

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language].experience
  const c = chrome[language]
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const freelance = t.items[0]
  const projects = freelance.projects.map(parseProject)
  const ndaProjects = 'ndaProjects' in freelance ? freelance.ndaProjects : []

  return (
    <Panel id="projects" title={c.projects} count={projects.length + (ndaProjects.length ? 1 : 0)}>
      <div>
        {projects.map((project, index) => {
          const isOpen = openIndex === index
          return (
            <div key={project.url}>
              <div className="flex items-center hover:bg-accent-muted">
                <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background">
                  <BoxIcon />
                </div>
                <div className="flex-1 border-l border-dashed border-edge">
                  <div className="flex w-full items-center gap-2 p-4 pr-2">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="min-w-0 flex-1">
                      <h3 className="mb-1 text-balance font-medium leading-snug">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{freelance.period}</p>
                    </a>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
                      aria-expanded={isOpen}
                    >
                      <span className="sr-only">{c.openProject}</span>
                      <svg className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
                      aria-label={c.openProject}
                    >
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="space-y-4 border-t border-edge p-4">
                  {project.description && <p className="text-sm text-muted-foreground">{project.description}</p>}
                  <ul className="flex flex-wrap gap-1.5">
                    {(PROJECT_TAGS[index] ?? ['Frontend']).map((tag) => (
                      <li key={tag}>
                        <Badge>{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}

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
      </div>
    </Panel>
  )
}
