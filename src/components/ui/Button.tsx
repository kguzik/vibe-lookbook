import Link from 'next/link'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--color-selected)] text-white hover:opacity-90',
  secondary:
    'bg-[var(--color-surface-raised)] text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)]',
  ghost:
    'bg-transparent text-[var(--color-muted)] hover:text-[var(--color-foreground)]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  iconLeft,
  iconRight,
  className = '',
  disabled,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition-all duration-150',
    'disabled:pointer-events-none disabled:opacity-40',
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button disabled={disabled} className={classes} {...props}>
      {content}
    </button>
  )
}
