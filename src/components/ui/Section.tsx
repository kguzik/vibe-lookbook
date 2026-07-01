import { type HTMLAttributes } from 'react'

type SectionSpacing = 'xs' | 'sm' | 'md' | 'lg'

type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: SectionSpacing
  background?: string
  disableTopMargin?: boolean
  disableBottomMargin?: boolean
}

const paddingStyles: Record<SectionSpacing, string> = {
  xs: 'py-4 md:py-6',
  sm: 'py-8 md:py-10',
  md: 'py-10 md:py-16',
  lg: 'py-16 md:py-24',
}

export function Section({
  spacing = 'md',
  background,
  disableTopMargin = false,
  disableBottomMargin = false,
  className = '',
  children,
  style,
  ...props
}: SectionProps) {
  return (
    <section
      className={[
        paddingStyles[spacing],
        !disableTopMargin && 'mt-4 md:mt-6',
        !disableBottomMargin && 'mb-4 md:mb-6',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        ...(background ? { backgroundColor: background } : {}),
        ...style,
      }}
      {...props}
    >
      {children}
    </section>
  )
}
