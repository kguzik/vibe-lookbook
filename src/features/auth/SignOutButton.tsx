'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { signOut } from '@/features/auth/actions'
import { accountContent } from '@/content/account'

export const SignOutButton = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.refresh()
    router.push('/')
  }

  return (
    <Button variant="primary" size="md" onClick={handleSignOut}>
      {accountContent.signOut}
    </Button>
  )
}
