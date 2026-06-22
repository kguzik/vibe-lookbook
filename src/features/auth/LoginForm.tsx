'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { loginContent } from '@/content/login'
import type { SubmitEventHandler } from 'react'

type Props = {
  isSignup: boolean
  onSubmit: SubmitEventHandler<HTMLFormElement>
}

type FormErrors = {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
}

const { validation } = loginContent

const PASSWORD_RULES = [
  {
    test: (passwordValue: string) => passwordValue.length >= 8,
    message: validation.password.minLength,
  },
  {
    test: (passwordValue: string) => /[A-Z]/.test(passwordValue),
    message: validation.password.uppercase,
  },
  {
    test: (passwordValue: string) => /[0-9]/.test(passwordValue),
    message: validation.password.number,
  },
  {
    test: (passwordValue: string) => /[^A-Za-z0-9]/.test(passwordValue),
    message: validation.password.specialChar,
  },
]

const validatePassword = (value: string): string | undefined => {
  const failed = PASSWORD_RULES.find((rule) => !rule.test(value))
  return failed?.message
}

const isValidEmail = (value: string): boolean => {
  const input = document.createElement('input')
  input.type = 'email'
  input.value = value
  return input.checkValidity()
}

export const LoginForm = ({ isSignup, onSubmit }: Props) => {
  const { fields } = loginContent
  const [formErrors, setFormErrors] = useState<FormErrors>({})

  const submitLabel = isSignup
    ? loginContent.signup.submitButton
    : loginContent.login.submitButton

  const validate = (formData: FormData): FormErrors => {
    const name = (formData.get('name') as string) ?? ''
    const email = (formData.get('email') as string) ?? ''
    const password = (formData.get('password') as string) ?? ''
    const confirmPassword = (formData.get('confirm-password') as string) ?? ''
    const formErrors: FormErrors = {}

    if (isSignup && !name.trim()) formErrors.name = validation.required
    if (!email.trim()) formErrors.email = validation.required
    else if (!isValidEmail(email)) formErrors.email = validation.emailInvalid
    if (!password) formErrors.password = validation.required
    else if (isSignup) formErrors.password = validatePassword(password)
    if (isSignup && !confirmPassword)
      formErrors.confirmPassword = validation.required
    else if (
      isSignup &&
      password &&
      confirmPassword &&
      password !== confirmPassword
    )
      formErrors.confirmPassword = validation.passwordMismatch

    return formErrors
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const formErrors = validate(formData)
    setFormErrors(formErrors)
    if (Object.values(formErrors).some(Boolean)) return
    onSubmit(e)
  }

  const clearError = (field: keyof FormErrors) => () => {
    if (formErrors[field])
      setFormErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      {isSignup && (
        <Input
          id="name"
          name="name"
          label={fields.name.label}
          type="text"
          placeholder={fields.name.placeholder}
          autoComplete="name"
          error={formErrors.name}
          onChange={clearError('name')}
          required
        />
      )}
      <Input
        id="email"
        name="email"
        label={fields.email.label}
        type="email"
        placeholder={fields.email.placeholder}
        autoComplete="email"
        error={formErrors.email}
        onChange={clearError('email')}
        required
      />
      <Input
        id="password"
        name="password"
        label={fields.password.label}
        type="password"
        placeholder={fields.password.placeholder}
        autoComplete={isSignup ? 'new-password' : 'current-password'}
        hint={isSignup ? fields.password.hint : undefined}
        error={formErrors.password}
        onChange={clearError('password')}
        required
      />
      {isSignup && (
        <Input
          id="confirm-password"
          name="confirm-password"
          label={fields.confirmPassword.label}
          type="password"
          placeholder={fields.confirmPassword.placeholder}
          autoComplete="new-password"
          error={formErrors.confirmPassword}
          onChange={clearError('confirmPassword')}
          required
        />
      )}
      <Button type="submit" className="w-full" size="lg">
        {submitLabel}
      </Button>
    </form>
  )
}
