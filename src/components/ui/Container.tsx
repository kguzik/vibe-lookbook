import { type HTMLAttributes } from 'react'

type ContainerSize = 'sm' | 'md' | 'lg' | 'full'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: 'max-w-xl',
  md: 'max-w-2xl',
  lg: 'max-w-5xl',
  full: 'max-w-full',
}

export function Container({
  size = 'md',
  className = '',
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={['mx-auto w-full px-4 md:px-6', sizeStyles[size], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
