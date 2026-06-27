import type { ReactNode } from 'react'

type Column = {
  heading: string
  body: ReactNode
}

export const TwoColumnContent = ({
  columns,
}: {
  columns: [Column, Column]
}) => (
  <div className="grid gap-8 md:grid-cols-2">
    {columns.map(({ heading, body }) => (
      <div key={heading} className="space-y-3">
        <h2 className="h4">{heading}</h2>
        <div className="text-sm text-[var(--color-subtle)]">{body}</div>
      </div>
    ))}
  </div>
)
