'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { signOut } from '@/features/auth/actions'
import { loginContent } from '@/content/login'

export const SignOutButton = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.refresh()
    router.push('/')
  }

  return (
    <Button variant="secondary" size="sm" onClick={handleSignOut}>
      {loginContent.signOut.label}
    </Button>
  )
}
