import { Button, type ButtonProps } from '@/components/ui/Button'

type ButtonConfig = ButtonProps & {
  label: string
}

type TextHeroProps = {
  heading: string
  accentWord?: string
  subtitle?: string
  primaryButton?: ButtonConfig
  secondaryButton?: ButtonConfig
  className?: string
}

export function TextHero({
  heading,
  accentWord,
  subtitle,
  primaryButton,
  secondaryButton,
  className = '',
}: TextHeroProps) {
  return (
    <div className={`space-y-6 text-center ${className}`}>
      <div className="space-y-3">
        <h1>
          {heading}
          {accentWord && (
            <>
              {' '}
              <span className="accent-word">{accentWord}</span>
            </>
          )}
        </h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {(primaryButton || secondaryButton) && (
        <div className="flex items-center justify-center gap-3">
          {primaryButton && (
            <Button {...primaryButton}>{primaryButton.label}</Button>
          )}
          {secondaryButton && (
            <Button variant="secondary" {...secondaryButton}>
              {secondaryButton.label}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
