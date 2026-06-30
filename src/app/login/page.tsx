'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Google } from '@/components/icons/Google'
import { LoginForm } from '@/features/auth/LoginForm'
import { loginContent } from '@/content/login'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SmallHero } from '@/components/ui/SmallHero'
import { Divider } from '@/components/ui/Divider'
import { createClient } from '@/lib/supabase/client'

type Mode = 'login' | 'signup'

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>('login')

  const handleGoogleSignIn = async () => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
  }

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
            onClick={handleGoogleSignIn}
          >
            {google.label}
          </Button>
          <Divider label={divider} />
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
