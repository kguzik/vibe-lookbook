type SmallHeroProps = {
  title: string
  subtitle?: string
  className?: string
}

export function SmallHero({ title, subtitle, className = '' }: SmallHeroProps) {
  return (
    <div className={`space-y-2 ${className} mb-10 md:mb-14`}>
      <h1 className="h2">{title}</h1>
      {subtitle && (
        <p className="text-sm text-[var(--color-subtle)]">{subtitle}</p>
      )}
    </div>
  )
}
