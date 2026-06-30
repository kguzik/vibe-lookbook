'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { ErrorMessage } from '@/components/ui/ErrorMessage'
import { signOut } from '@/features/auth/actions'
import { createClient } from '@/lib/supabase/client'
import { accountContent } from '@/content/account'

export const SignOutButton = () => {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string>()

  const handleSignOut = async () => {
    setPending(true)
    setError(undefined)
    await createClient().auth.signOut()
    const result = await signOut()
    if (result?.error) {
      setError(result.error)
      setPending(false)
      return
    }
    router.push('/')
  }

  return (
    <div className="space-y-2">
      <Button
        variant="primary"
        size="md"
        disabled={pending}
        onClick={handleSignOut}
      >
        {pending ? accountContent.waitingText : accountContent.signOut}
      </Button>
      <ErrorMessage message={error} />
    </div>
  )
}
