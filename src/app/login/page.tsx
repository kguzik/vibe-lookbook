'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Google } from '@/components/icons/Google'
import { LoginForm } from '@/features/auth/LoginForm'
import { loginContent } from '@/content/login'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SmallHero } from '@/components/ui/SmallHero'

type Mode = 'login' | 'signup'

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>('login')

  const isSignup = mode === 'signup'
  const content = isSignup ? loginContent.signup : loginContent.login
  const { google, divider } = loginContent

  return (
    <main>
      <Section disableBottomMargin spacing="sm">
        <Container size="sm">
          <SmallHero
            title={content.heading}
            className="text-center"
            subtitle={content.subtitle}
          />
        </Container>
      </Section>
      <Section disableTopMargin spacing="sm">
        <Container size="xs">
          <Button
            variant="secondary"
            className="m-auto !flex max-w-[220px]"
            iconLeft={<Google />}
            onClick={() => {}}
          >
            {google.label}
          </Button>
          <div className="my-5 flex items-center gap-3 lg:my-6">
            <div className="h-px flex-1 bg-[var(--color-border)]" />
            <span className="text-xs text-[var(--color-subtle)]">
              {divider}
            </span>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
          <LoginForm key={mode} isSignup={isSignup} />
          <p className="mt-3 text-center text-sm">
            {content.toggleText}{' '}
            <button
              onClick={() => setMode(isSignup ? 'login' : 'signup')}
              className="cursor-pointer font-medium text-[var(--color-accent)] transition-opacity hover:opacity-75"
            >
              {content.toggleLink}
            </button>
          </p>
        </Container>
      </Section>
    </main>
  )
}
