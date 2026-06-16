type TextHeroProps = {
  heading: string
  accentWord?: string
  subtitle?: string
  className?: string
}

export function TextHero({
  heading,
  accentWord,
  subtitle,
  className = '',
}: TextHeroProps) {
  return (
    <div className={`space-y-3 text-center ${className}`}>
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
  )
}
