'use client'

import { useEffect, useState, type ReactNode } from 'react'

export function RotatingWords({
  items,
  className = '',
  interval = 2800,
}: {
  items: { word: string; hint?: string }[]
  className?: string
  interval?: number
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length < 2) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [interval, items.length])

  if (items.length === 0) return null

  const current = items[index]
  const longestWord = items.reduce((a, b) => (b.word.length > a.word.length ? b : a))
  const longestHint = items.reduce<{ hint?: string } | undefined>(
    (longest, item) => (item.hint && item.hint.length > (longest?.hint?.length ?? 0) ? item : longest),
    undefined,
  )

  return (
    <span className={`relative inline-grid max-w-full overflow-hidden align-baseline ${className}`}>
      <span className="sr-only">{items.map((item) => item.word).join(', ')}</span>
      <span
        className="invisible col-start-1 row-start-1 hidden flex-col sm:flex"
        aria-hidden="true"
      >
        <span className="whitespace-nowrap">{longestWord?.word}</span>
        {longestHint?.hint ? (
          <span className="mt-1 font-mono text-[11px] font-normal leading-snug text-muted-foreground sm:text-sm">
            {longestHint.hint}
          </span>
        ) : null}
      </span>
      <span
        key={`${current.word}-${index}`}
        className="col-start-1 row-start-1 flex max-w-full flex-col items-center text-center motion-safe:animate-text-up"
        aria-hidden="true"
      >
        <span className="sm:whitespace-nowrap">{current.word}</span>
        {current.hint ? (
          <span className="mt-1 max-w-[22rem] font-mono text-[11px] font-normal leading-snug text-muted-foreground sm:max-w-none sm:text-sm">
            {current.hint}
          </span>
        ) : null}
      </span>
    </span>
  )
}

export function Marquee({
  children,
  reverse = false,
  duration = 36,
  pauseOnHover = true,
}: {
  children: ReactNode
  reverse?: boolean
  duration?: number
  pauseOnHover?: boolean
}) {
  return (
    <div
      className={`group relative overflow-hidden motion-reduce:overflow-visible ${
        pauseOnHover ? 'hover:[&_.marquee-track]:[animation-play-state:paused]' : ''
      }`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background motion-reduce:hidden sm:w-12" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background motion-reduce:hidden sm:w-12" />
      <div
        className={`marquee-track flex w-max ${
          reverse ? 'motion-safe:animate-marquee-reverse' : 'motion-safe:animate-marquee'
        } motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center`}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center gap-4 pr-4 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0">
          {children}
        </div>
        <div className="flex shrink-0 items-center gap-4 pr-4 motion-reduce:hidden" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
