import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { footerData } from '@/content/footer'

export function Footer() {
  const { tagline, navLinks, copyright } = footerData

  return (
    <footer className="mt-auto border-t border-[var(--color-border)]">
      <Container size="lg">
        <div className="flex flex-col items-center gap-4 py-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="space-y-2">
            <Logo />
            <p className="text-xs text-[var(--color-muted)]">{tagline}</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-end">
            <nav className="flex gap-4">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-[var(--color-subtle)]">
              {copyright.replace('{year}', String(new Date().getFullYear()))}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
