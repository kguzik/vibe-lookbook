import { type InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export function Input({
  label,
  error,
  className = '',
  id,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-[var(--color-foreground)]"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={[
          'w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)]',
          'px-4 py-2.5 text-sm text-[var(--color-foreground)] outline-none',
          'placeholder:text-[var(--color-subtle)]',
          'transition-colors duration-150 focus:border-[var(--color-accent)]',
          error ? 'border-red-400' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
