import type { ReactNode } from 'react'

export function Panel({
  id,
  title,
  count,
  children,
  headingLevel = 'h2',
}: {
  id?: string
  title: string
  count?: number | string
  children: ReactNode
  /** The page's first/only Panel should be 'h1' when nothing else on the page provides one. */
  headingLevel?: 'h1' | 'h2'
}) {
  const Heading = headingLevel
  return (
    <section
      id={id}
      data-slot="panel"
      className="screen-line-before border-x border-edge"
    >
      <header className="screen-line-after px-4 py-4">
        <Heading className="text-xl font-semibold tracking-tight">
          {title}
          {count != null && count !== '' && (
            <sup className="-top-[0.25em] ml-1 text-sm font-medium text-muted-foreground tabular-nums select-none">
              ({count})
            </sup>
          )}
        </Heading>
      </header>
      {children}
    </section>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-md bg-muted px-[0.45rem] text-xs font-medium text-muted-foreground">
      {children}
    </span>
  )
}
