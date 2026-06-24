'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Google } from '@/components/icons/Google'
import { LoginForm } from '@/features/auth/LoginForm'
import { loginContent } from '@/content/login'

type Mode = 'login' | 'signup'

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>('login')

  const isSignup = mode === 'signup'
  const content = isSignup ? loginContent.signup : loginContent.login
  const { google, divider } = loginContent

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-1 text-center">
          <h2>{content.heading}</h2>
          <p className="text-sm">{content.subtitle}</p>
        </div>
        <Button
          variant="secondary"
          className="w-full"
          iconLeft={<Google />}
          onClick={() => {}}
        >
          {google.label}
        </Button>
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-[var(--color-border)]" />
          <span className="text-xs text-[var(--color-subtle)]">{divider}</span>
          <div className="h-px flex-1 bg-[var(--color-border)]" />
        </div>
        <LoginForm key={mode} isSignup={isSignup} />
        <p className="text-center text-sm">
          {content.toggleText}{' '}
          <button
            onClick={() => setMode(isSignup ? 'login' : 'signup')}
            className="cursor-pointer font-medium text-[var(--color-accent)] transition-opacity hover:opacity-75"
          >
            {content.toggleLink}
          </button>
        </p>
      </div>
    </main>
  )
}
