'use client'

import { useEffect, useState, type ReactNode } from 'react'

export function RotatingWords({
  words,
  className = '',
  interval = 2400,
}: {
  words: string[]
  className?: string
  interval?: number
}) {
  const [index, setIndex] = useState(0)
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), '')

  useEffect(() => {
    if (words.length < 2) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [interval, words.length])

  if (words.length === 0) return null

  return (
    <span className={`relative inline-grid h-[1.15em] justify-items-center overflow-hidden leading-none ${className}`}>
      <span className="sr-only">{words.join(', ')}</span>
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
        {longest}
      </span>
      <span
        key={`${words[index]}-${index}`}
        className="col-start-1 row-start-1 whitespace-nowrap motion-safe:animate-text-up"
        aria-hidden="true"
      >
        {words[index]}
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
