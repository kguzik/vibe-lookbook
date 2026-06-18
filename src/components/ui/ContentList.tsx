import { type ReactNode } from 'react'

type ContentListItem = {
  heading: string
  body: ReactNode
}

type ContentListProps = {
  items: ContentListItem[]
  className?: string
}

export function ContentList({ items, className = '' }: ContentListProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="space-y-2">
          <h2 className="h3">
            {index + 1}. {item.heading}
          </h2>
          <div>{item.body}</div>
        </div>
      ))}
    </div>
  )
}
