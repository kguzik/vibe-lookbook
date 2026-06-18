import Link from 'next/link'

type LogoProps = {
  href?: string
  className?: string
}

export function Logo({ href = '/', className = '' }: LogoProps) {
  const svg = (
    <svg
      width="100"
      height="52"
      viewBox="0 0 120 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vibe Lookbook"
    >
      <text
        x="1"
        y="16"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize="14"
        fontStyle="italic"
        fontWeight="400"
        fill="var(--color-accent)"
      >
        Vibe
      </text>
      <text
        x="0"
        y="46"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize="26"
        fontWeight="700"
        fill="var(--color-foreground)"
      >
        Lookbook
      </text>
    </svg>
  )

  if (href) {
    return <Link href={href}>{svg}</Link>
  }

  return svg
}
