'use client'

import { useState } from 'react'
import type { InputHTMLAttributes } from 'react'
import { loginContent } from '@/content/login'
import { ErrorMessage } from '@/components/ui/ErrorMessage'

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  type?: InputType
  label?: string
  hint?: string
  error?: string
  required?: boolean
}

const { validation } = loginContent

export const Input = ({
  label,
  hint,
  error: externalError,
  className = '',
  id,
  type = 'text',
  onChange,
  onBlur,
  onInvalid,
  required,
  ...props
}: InputProps) => {
  const [internalError, setInternalError] = useState<string>()

  const error = externalError ?? internalError

  const getValidationMessage = (input: HTMLInputElement): string => {
    const { validity } = input
    if (validity.valueMissing) return validation.required
    if (validity.typeMismatch) {
      if (type === 'email') return validation.emailInvalid
      if (type === 'url') return validation.urlInvalid
    }
    return input.validationMessage
  }

  const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInternalError(getValidationMessage(e.currentTarget))
    onInvalid?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.currentTarget.checkValidity()) {
      setInternalError(getValidationMessage(e.currentTarget))
    }
    onBlur?.(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (internalError) setInternalError(undefined)
    onChange?.(e)
  }

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-[var(--color-foreground)]"
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        required={required}
        className={[
          'w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)]',
          'px-4 py-2.5 text-sm text-[var(--color-foreground)] outline-none',
          'placeholder:text-[var(--color-subtle)]',
          'transition-colors duration-150 focus:border-[var(--color-accent)]',
          error ? 'border-red-400' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        onChange={handleChange}
        onBlur={handleBlur}
        onInvalid={handleInvalid}
        {...props}
      />
      <ErrorMessage message={error} />
      {!error && hint && (
        <p className="text-xs text-[var(--color-subtle)]">{hint}</p>
      )}
    </div>
  )
}
