import type { ReactNode } from 'react'

export function Panel({
  id,
  title,
  count,
  children,
}: {
  id?: string
  title: string
  count?: number | string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge"
    >
      <header className="screen-line-after px-4 py-4">
        <h2 className="text-xl font-semibold tracking-tight">
          {title}
          {count != null && count !== '' && (
            <sup className="-top-[0.25em] ml-1 text-sm font-medium text-muted-foreground tabular-nums select-none">
              ({count})
            </sup>
          )}
        </h2>
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
