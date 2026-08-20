'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { chrome } from '@/data/chrome'
import { Panel } from './Panel'

const STACK = [
  'ts',
  'js',
  'react',
  'nextjs',
  'nodejs',
  'python',
  'php',
  'postgres',
  'graphql',
  'tailwind',
  'sass',
  'redux',
  'vite',
  'git',
  'github',
  'vercel',
  'aws',
  'html',
  'css',
  'figma',
  'npm',
  'jest',
  'vue',
  'wordpress',
  'docker',
  'cloudflare',
]

export default function Skills() {
  const { language } = useLanguage()
  const t = translations[language].skills
  const c = chrome[language]

  return (
    <Panel id="skills" title={c.stack}>
      <div className="p-4">
        <ul className="group mx-auto flex flex-wrap justify-center gap-4 select-none">
          {STACK.map((id) => (
            <li key={id}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://skillicons.dev/icons?i=${id}`}
                alt={`${id} icon`}
                width={48}
                height={48}
                className="size-10 object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 md:size-12"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-muted-foreground">{t.subtitle}</p>
        <div className="mt-4 rounded-lg border border-edge bg-muted/40 p-4">
          <h3 className="mb-2 text-sm font-semibold">{t.aiTitle}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{t.aiDesc}</p>
          <p className="mt-2 text-sm font-medium">{t.aiFooter}</p>
        </div>
      </div>
    </Panel>
  )
}
