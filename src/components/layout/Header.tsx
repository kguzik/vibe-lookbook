import { Logo } from '@/components/ui/Logo'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-surface-subtle)] py-2 backdrop-blur-md">
      <Container size="lg">
        <div className="flex h-14 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-3">
            <Button href="/login" variant="primary" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  )
}
