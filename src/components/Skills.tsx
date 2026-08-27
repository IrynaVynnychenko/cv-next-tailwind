'use client'

import { useLanguage } from '@/context/LanguageContext'
import { chrome } from '@/data/chrome'
import { Panel } from './Panel'
import { Marquee } from './Animate'

const STACK = [
  'ts',
  'js',
  'react',
  'nextjs',
  'threejs',
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

const ROW_A = STACK.filter((_, index) => index % 2 === 0)
const ROW_B = STACK.filter((_, index) => index % 2 === 1)

function SkillIcon({ id }: { id: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://skillicons.dev/icons?i=${id}`}
      alt={`${id} icon`}
      width={48}
      height={48}
      className="size-10 object-contain opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:size-12"
      loading="lazy"
    />
  )
}

export default function Skills() {
  const { language } = useLanguage()
  const c = chrome[language]

  return (
    <Panel id="skills" title={c.stack}>
      <div className="space-y-4 py-4">
        <Marquee duration={42}>
          {ROW_A.map((id) => (
            <SkillIcon key={id} id={id} />
          ))}
        </Marquee>
        <Marquee reverse duration={48}>
          {ROW_B.map((id) => (
            <SkillIcon key={id} id={id} />
          ))}
        </Marquee>
      </div>
    </Panel>
  )
}
