'use client'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { loginContent } from '@/content/login'
import type { SubmitEventHandler } from 'react'

type Props = {
  isSignup: boolean
  onSubmit: SubmitEventHandler<HTMLFormElement>
}

export function LoginForm({ isSignup, onSubmit }: Props) {
  const { fields } = loginContent
  const submitLabel = isSignup
    ? loginContent.signup.submitButton
    : loginContent.login.submitButton

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {isSignup && (
        <Input
          id="name"
          label={fields.name.label}
          type="text"
          placeholder={fields.name.placeholder}
          autoComplete="name"
        />
      )}
      <Input
        id="email"
        label={fields.email.label}
        type="email"
        placeholder={fields.email.placeholder}
        autoComplete="email"
      />
      <Input
        id="password"
        label={fields.password.label}
        type="password"
        placeholder={fields.password.placeholder}
        autoComplete={isSignup ? 'new-password' : 'current-password'}
      />
      {isSignup && (
        <Input
          id="confirm-password"
          label={fields.confirmPassword.label}
          type="password"
          placeholder={fields.confirmPassword.placeholder}
          autoComplete="new-password"
        />
      )}
      <Button type="submit" className="w-full" size="lg">
        {submitLabel}
      </Button>
    </form>
  )
}
